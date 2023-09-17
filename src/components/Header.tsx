import React from 'react'

export default function Header({ activeItem }: { activeItem: String }) {
  const navList = [
    {
      itemId: "1",
      itemName: "home",
      itemUrl: "/"
    },
    {
      itemId: "2",
      itemName: "blogs",
      itemUrl: "/blogs"
    }
  ]

  const listItem = navList.map(item => {
    return (
      <a key={item.itemId} href={item.itemUrl}
        className={`txt-decoration-none link`}>
        < div className={`ptb-6 mtb-15 ${item.itemId == activeItem ? 'active' : ''}`}>{item.itemName}</div>
      </a >
    )
  })

  return (
    <header className="w-100 pb-15">
      <nav>
        <div className="d-flex gap-20">
          {listItem}
        </div>
      </nav>
    </header>
  )
}