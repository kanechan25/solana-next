import React from 'react'
import Link from 'next/link'

interface ILink {
  children: React.ReactNode
  href: string
  onClick?: () => void
}
export const NavLink: React.FC<ILink> = ({ children, href }) => {
  return (
    <Link href={href} target='_blank' rel='noopener noreferrer' passHref className='text-secondary hover:text-white'>
      {children}
    </Link>
  )
}
