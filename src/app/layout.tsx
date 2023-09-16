import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/common.css'
import '@/styles/container.css'
import '@/styles/color.css'

export const metadata: Metadata = {
  title: 'Hà Hoàng Nhật',
  description: 'This is my simple note during my learning to become a DevOps engineer.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className="container d-flex flex-col ptb-30 h-100">{children}</div>
      </body>
    </html>
  )
}
