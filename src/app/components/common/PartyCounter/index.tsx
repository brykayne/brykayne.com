import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import styles from './styles.module.css';

interface PartyCount {
  id: number;
  count: number;
}

const PartyCounter = () => {
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    let retryCount = 0;
    const maxRetries = 3;
    
    fetchCount();

    const setupSubscription = async () => {
      try {
        const channel = supabase
          .channel('party_counter_changes')
          .on(
            'postgres_changes',
            {
              event: 'UPDATE',
              schema: 'public',
              table: 'party_counter',
              filter: 'id=eq.1'
            },
            (payload) => {
              const newData = payload.new as PartyCount;
              if (newData && typeof newData.count === 'number') {
                setCount(newData.count);
              }
            }
          )
          .subscribe(async (status) => {
            if (status === 'CLOSED' && retryCount < maxRetries) {
              retryCount++;
              await setupSubscription();
            }
          });

        return channel;
      } catch (err) {
        if (retryCount < maxRetries) {
          retryCount++;
          return await setupSubscription();
        }
        return null;
      }
    };

    let channel: any;
    setupSubscription().then(ch => {
      channel = ch;
    });

    return () => {
      if (channel) {
        supabase.removeChannel(channel);
      }
    };
  }, []);

  const fetchCount = async () => {
    try {
      setLoading(true);
      
      const { data, error: fetchError } = await supabase
        .from('party_counter')
        .select('*')
        .eq('id', 1)
        .single();

      if (fetchError) {
        throw fetchError;
      }

      if (!data) {
        throw new Error('No counter data found');
      }

      const partyCount = data as PartyCount;
      setCount(partyCount.count);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch counter');
      setDebugInfo(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className={styles.counter}>
        Loading counter...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.counter}>
        <div style={{ color: 'red', fontSize: '0.8em' }}>Error: {error}</div>
        {debugInfo && (
          <pre style={{ 
            fontSize: '0.7em', 
            marginTop: '8px', 
            padding: '8px', 
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '4px',
            overflow: 'auto',
            maxHeight: '100px'
          }}>
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        )}
        <button 
          onClick={fetchCount}
          style={{ 
            marginTop: '8px', 
            padding: '4px 8px',
            fontSize: '0.8em',
            cursor: 'pointer'
          }}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={styles.counter}>
      Party Mode Activated {count} Times
    </div>
  );
};

export default PartyCounter; 