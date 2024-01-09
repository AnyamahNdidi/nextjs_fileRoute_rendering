
import React from 'react'
import "@/style/global.css"

interface ChildrenProps {
    children : React.ReactNode
}
export default function RootLayout({children}:ChildrenProps) {
  return (
    <html >
      <body >{children}</body>
    </html>
  )
}
