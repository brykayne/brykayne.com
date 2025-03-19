import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            padding: '40px',
            background: 'linear-gradient(180deg, rgba(255,140,0,0.1) 0%, rgba(0,0,0,0) 100%)',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
              height: '100%',
              border: '2px solid #FF8C00',
              boxShadow: '0 0 30px rgba(255,140,0,0.3)',
              padding: '60px',
            }}
          >
            <div
              style={{
                color: '#FF8C00',
                fontSize: '120px',
                fontFamily: 'monospace',
                fontWeight: 'bold',
                letterSpacing: '0.1em',
                textAlign: 'center',
                margin: '0 auto',
                padding: '0',
                textShadow: `
                  2px 2px 0 rgba(255,0,0,0.4),
                  -2px -2px 0 rgba(0,255,255,0.4),
                  0 0 20px rgba(255,140,0,0.5)
                `,
              }}
            >
              BRYKAYNE
            </div>
            <div
              style={{
                fontSize: '42px',
                fontFamily: 'monospace',
                color: '#FF8C00',
                textAlign: 'center',
                marginTop: '40px',
                opacity: 0.9,
                maxWidth: '90%',
                letterSpacing: '0.05em',
                textShadow: '0 0 10px rgba(255,140,0,0.3)',
              }}
            >
              Product Leader
            </div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Type': 'image/png'
        }
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
} 