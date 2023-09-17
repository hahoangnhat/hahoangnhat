import type { Metadata } from 'next'
import '@/styles/globals.css'
import '@/styles/common.css'

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
        <div className="d-flex flex-col w-100 h-100">{children}</div>
      </body>
    </html>
  )
}
