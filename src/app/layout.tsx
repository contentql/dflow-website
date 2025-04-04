import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Dflow',
  description:
    'Dflow simplifies deployment with powerful tools for server management, database hosting, GitHub app deployment, domain configuration, and real-time logging. Manage everything in one place with efficiency and ease.',
  image: '/public/images/og.png',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${geistSans.className} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
