import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PartyModeProvider } from '@/contexts/PartyModeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BryKayne.com",
  description: "Product leader building things, like this jenky site.",
  metadataBase: new URL('https://brykayne.com'),
  icons: {
    icon: [
      { url: '/api/favicon', type: 'image/png', sizes: '32x32' }
    ],
    shortcut: '/api/favicon',
    apple: '/api/favicon',
  },
  openGraph: {
    title: 'BryKayne.com',
    description: 'Product leader building things, like this jenky site.',
    url: 'https://brykayne.com',
    siteName: 'BryKayne.com',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: 'https://brykayne.com/api/og',
      width: 1200,
      height: 630,
      alt: 'BryKayne.com - Product Leader Building Things',
      type: 'image/png',
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BryKayne.com',
    description: 'Product leader building things, like this jenky site.',
    creator: '@brykayne',
    images: ['https://brykayne.com/api/og']
  },
  other: {
    'telegram:channel': '@brykayne',
    'og:image:type': 'image/png',
    'og:image:width': '1200',
    'og:image:height': '630',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PartyModeProvider>
          {children}
        </PartyModeProvider>
      </body>
    </html>
  );
}
