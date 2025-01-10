'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import Confetti from 'react-confetti';
import useWindowSize from 'react-use/lib/useWindowSize';

interface PartyModeContextType {
  isPartyMode: boolean;
  togglePartyMode: () => void;
}

const PartyModeContext = createContext<PartyModeContextType | undefined>(undefined);

export function PartyModeProvider({ children }: { children: React.ReactNode }) {
  const [isPartyMode, setIsPartyMode] = useState(false);
  const { width, height } = useWindowSize();
  const [confettiPieces, setConfettiPieces] = useState<Array<{ x: number; y: number; key: number }>>([]);

  const handleClick = useCallback((e: MouseEvent) => {
    if (isPartyMode) {
      setConfettiPieces(prev => [...prev, {
        x: e.clientX,
        y: e.clientY,
        key: Date.now()
      }]);
    }
  }, [isPartyMode]);

  React.useEffect(() => {
    if (isPartyMode) {
      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
    }
  }, [isPartyMode, handleClick]);

  const togglePartyMode = () => setIsPartyMode(!isPartyMode);

  return (
    <PartyModeContext.Provider value={{ isPartyMode, togglePartyMode }}>
      {isPartyMode && (
        <>
          <style jsx global>{`
            /* Base elements */
            body, .terminal, .modal-body, .ascii-name, 
            .social-links a, .command, a, .orb-core {
              animation: darkColorChange 3s infinite !important;
              font-weight: bold !important;
            }

            /* Modal specific */
            .modal-content {
              animation: solidBackgroundColorChange 3s infinite !important;
              border-color: transparent !important;
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.3) !important;
            }

            /* Body background */
            body {
              animation: backgroundColorChange 3s infinite !important;
            }

            /* Buttons */
            .close-button, .minimize-button, .maximize-button {
              animation: buttonColorChange 2s infinite !important;
            }

            /* Terminal border */
            .terminal {
              border-color: transparent !important;
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.3) !important;
            }

            /* Disco Ball Orb */
            .orb {
              position: fixed !important;
              top: 20px !important;
              left: 50% !important;
              transform: translateX(-50%) scale(5) !important;
              margin: 0 !important;
              z-index: 2001 !important;
              transform-style: preserve-3d !important;
              perspective: 1000px !important;
              animation: discoBallHover 2s ease-in-out infinite !important;
            }

            .orb-core {
              background: repeating-conic-gradient(
                from 0deg,
                #808080 0deg 5deg,
                #a0a0a0 5deg 10deg,
                #d0d0d0 10deg 15deg,
                #ffffff 15deg 20deg
              ) !important;
              background-size: 4px 4px !important;
              animation: discoBallSpin 3s linear infinite !important;
              box-shadow: 
                inset -2px -2px 4px rgba(0,0,0,0.5),
                inset 2px 2px 4px rgba(255,255,255,0.9),
                0 0 10px rgba(255,255,255,0.5),
                0 0 20px rgba(255,255,255,0.3) !important;
              transform-style: preserve-3d !important;
            }

            .orb-rings {
              border: 1px solid rgba(192,192,192,0.8) !important;
              animation: discoRings 2s linear infinite !important;
              box-shadow: 
                0 0 15px rgba(255,255,255,0.3),
                0 0 30px rgba(255,255,255,0.2) !important;
            }

            .orb::before {
              content: '';
              position: absolute;
              top: -5px;
              left: -5px;
              right: -5px;
              bottom: -5px;
              background: radial-gradient(
                circle at var(--light-pos, 30% 30%),
                rgba(255,255,255,0.8) 0%,
                rgba(255,255,255,0.2) 20%,
                transparent 35%
              );
              animation: discoLight 4s infinite linear !important;
              border-radius: 50%;
              pointer-events: none;
            }

            @keyframes darkColorChange {
              0% { color: #660000; }
              20% { color: #004400; }
              40% { color: #000066; }
              60% { color: #660066; }
              80% { color: #666600; }
              100% { color: #660000; }
            }

            @keyframes backgroundColorChange {
              0% { background: rgba(255, 0, 0, 0.2); }
              20% { background: rgba(0, 255, 0, 0.2); }
              40% { background: rgba(0, 0, 255, 0.2); }
              60% { background: rgba(255, 0, 255, 0.2); }
              80% { background: rgba(255, 255, 0, 0.2); }
              100% { background: rgba(255, 0, 0, 0.2); }
            }

            @keyframes solidBackgroundColorChange {
              0% { background: #ff9999; }
              20% { background: #99ff99; }
              40% { background: #9999ff; }
              60% { background: #ff99ff; }
              80% { background: #ffff99; }
              100% { background: #ff9999; }
            }

            @keyframes buttonColorChange {
              0% { background: #ff0000; }
              20% { background: #00ff00; }
              40% { background: #0000ff; }
              60% { background: #ff00ff; }
              80% { background: #ffff00; }
              100% { background: #ff0000; }
            }

            @keyframes discoBallSpin {
              0% { transform: rotateY(0deg); }
              100% { transform: rotateY(360deg); }
            }

            @keyframes discoLight {
              0% { --light-pos: 30% 30%; }
              25% { --light-pos: 70% 30%; }
              50% { --light-pos: 70% 70%; }
              75% { --light-pos: 30% 70%; }
              100% { --light-pos: 30% 30%; }
            }

            @keyframes discoRings {
              0% { transform: scale(1) rotate(0deg); opacity: 0.8; }
              50% { transform: scale(1.5) rotate(180deg); opacity: 0.4; }
              100% { transform: scale(1) rotate(360deg); opacity: 0.8; }
            }

            @keyframes discoBallHover {
              0%, 100% { transform: translateX(-50%) scale(5) translateY(0); }
              50% { transform: translateX(-50%) scale(5) translateY(-5px); }
            }
          `}</style>
          {confettiPieces.map(piece => (
            <div key={piece.key} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 2000 }}>
              <Confetti
                width={width}
                height={height}
                recycle={false}
                numberOfPieces={50}
                confettiSource={{
                  x: piece.x,
                  y: piece.y,
                  w: 0,
                  h: 0
                }}
                onConfettiComplete={(confetti) => {
                  confetti?.reset();
                  setConfettiPieces(prev => prev.filter(p => p.key !== piece.key));
                }}
              />
            </div>
          ))}
        </>
      )}
      {children}
    </PartyModeContext.Provider>
  );
}

export function usePartyMode() {
  const context = useContext(PartyModeContext);
  if (context === undefined) {
    throw new Error('usePartyMode must be used within a PartyModeProvider');
  }
  return context;
}