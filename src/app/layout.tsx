'use client'

import React from 'react'
import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/styles/GlobalStyles'
import { themeDefault } from '@/styles/theme'
import { Footer } from '@/components/Footer'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider theme={themeDefault}>
            <GlobalStyles />
            <main className="content">{children}</main>
            <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
