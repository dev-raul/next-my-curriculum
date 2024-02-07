'use client'
import { ReactNode } from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { themeDefault } from '@/styles/theme'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={themeDefault}>
            <GlobalStyles />

            <main className="wrapper">
              <section className="content">
                {children}
                <Footer />
              </section>
            </main>
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
