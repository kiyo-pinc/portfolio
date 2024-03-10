import { Roboto_Mono } from 'next/font/google'

import Menu from './_components/Menu'

import type { Metadata } from 'next'

import './globals.css'

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja" className={robotoMono.className}>
      <body className="flex">
        <nav className="h-screen w-[250px]">
          <Menu />
        </nav>
        <main className="h-screen w-[calc(100%_-_250px)]">{children}</main>
      </body>
    </html>
  )
}
