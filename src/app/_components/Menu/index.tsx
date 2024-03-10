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
    <nav className="h-full overflow-auto px-8 py-12 shadow-md">
      <div className="mx-4 mb-12 aspect-square bg-slate-400 "></div>
      <div className="mb-12">
        <Name />
      </div>
      <ul className="mb-12 flex flex-wrap gap-2">
        <li className="rounded-md bg-[#CDF3FF] px-3 py-2 text-[12px] tracking-[.1rem]">
          Front-end Enginner
        </li>
        <li className="rounded-md bg-[#CDF3FF] px-3 py-2 text-[12px] tracking-[.1rem]">
          Keybord OTAKU
        </li>
      </ul>
      <ul className="flex flex-col gap-y-5">
        {menu.map(({ name, path }) => (
          <li key={path} className="text-[20px] font-medium tracking-[.3rem]">
            <Link href={path}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
