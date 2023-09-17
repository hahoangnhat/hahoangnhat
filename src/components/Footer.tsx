import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <span>Copyright © {year} Ha Hoang Nhat. All rights reserved.</span>
    </footer>
  )
}