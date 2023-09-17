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
      <a key={item.itemId} href={item.itemUrl}>
        < div className={`${item.itemId == activeItem ? 'active' : ''}`}>{item.itemName}</div>
      </a >
    )
  })

  return (
    <header>
      <nav>
        <div>
          {listItem}
        </div>
      </nav>
    </header>
  )
}