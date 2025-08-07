import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mentiting.vercel.app'),
  title: 'Mentiting — Mentor-led Productivity SaaS',
  description:
    'Mentiting helps teams turn mentorship into measurable outcomes with collaborative goals, guided sessions, and actionable insights.',
  keywords: [
    'Mentiting',
    'SaaS',
    'mentorship',
    'productivity',
    'coaching',
    'teams',
    'Next.js',
    'Tailwind CSS',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mentiting — Mentor-led Productivity SaaS',
    description:
      'Mentiting helps teams turn mentorship into measurable outcomes with collaborative goals, guided sessions, and actionable insights.',
    url: '/',
    siteName: 'Mentiting',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Mentiting preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 antialiased`}>{children}</body>
    </html>
  )
}
