import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="w-100 h-50-px ptb-30">
      <span>Copyright © {year} Ha Hoang Nhat. All rights reserved.</span>
    </footer>
  )
}