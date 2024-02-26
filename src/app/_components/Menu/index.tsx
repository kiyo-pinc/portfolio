'use client'
import Link from 'next/link'

import Name from '../Name'

interface Menu {
  name: string
  path: string
}

export default function Menu() {
  const menu: Menu[] = [
    {
      name: 'Profile',
      path: '/',
    },
    {
      name: 'Portfolio',
      path: '/portfolio',
    },
    {
      name: 'Works',
      path: '/works',
    },
    {
      name: 'Contact',
      path: '/contact',
    },
  ]
  return (
    <nav className="h-full px-8 pt-12 shadow-md">
      <div className="mx-4 mb-12 aspect-square bg-slate-400 "></div>
      <Name />
      <ul>
        {menu.map(({ name, path }) => (
          <li key={path}>
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
