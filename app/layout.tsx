import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"

export async function generateMetadata(): Promise<Metadata> {

  return {
    title: "NSDEX",
    description: "NSDΞX isn’t just an index. It’s a signal.",
    metadataBase: new URL('https://www.NSDEX.fun'),
    openGraph: {
    title: "NSDEX",
      description: "NSDΞX isn’t just an index. It’s a signal.",
      images: '/logo.png'
    }

  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
