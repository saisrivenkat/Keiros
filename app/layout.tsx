import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Keiros — Precision Location. Every Address. Every Floor.',
  description: 'Create, engage, and analyze your brand experience with KEIROS',
  openGraph: {
    title: 'Keiros — Precision Location. Every Address. Every Floor.',
    description:
      'Precision location with floor-aware guidance. Every address, every floor, 3-foot accuracy.',
    images: [{ url: '/keiros-logo.png', width: 1200, height: 630, alt: 'Keiros' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Keiros — Precision Location. Every Address. Every Floor.',
    description:
      'Precision location with floor-aware guidance. Every address, every floor, 3-foot accuracy.',
    images: ['/keiros-logo.png'],
  },
  icons: {
    icon: [
      {
        url: '/keiros-logo.pngg',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/keiros-logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/keiros-logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/keiros-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
