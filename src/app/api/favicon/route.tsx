import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#000000',
            borderRadius: '4px',
          }}
        >
          <div
            style={{
              fontSize: '24px',
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: '#FF8C00',
              textShadow: '0 0 4px rgba(255,140,0,0.5)',
            }}
          >
            B
          </div>
        </div>
      ),
      {
        width: 32,
        height: 32,
        headers: {
          'Cache-Control': 'public, max-age=31536000, immutable',
          'Content-Type': 'image/png'
        }
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the favicon`, {
      status: 500,
    });
  }
} 