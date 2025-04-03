import '../globals.css'
import { RootProvider } from 'fumadocs-ui/provider'
import type { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <RootProvider
          theme={{
            enabled: true,
            enableSystem: true,
            defaultTheme: 'dark',
          }}>
          {children}
        </RootProvider>
      </body>
    </html>
  )
}
