"use client"

import Link from 'next/link'
import React, { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import '../globals.css'

const navLinks = [
    {name:'Profile',href:'/profile'},
    {name:'Config',href:'/config'},
    {name:'Info',href:'/info'}


]

const UsersLayout = ({children}:{children:ReactNode}) => {

    const pathname = usePathname()
  return (
    <div className="w-[700px] mx-auto flex justify-center flex-col items-center">
        <div className="flex gap-3">

       
        {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href)
            return (
                <Link className={`${isActive ? 'text-yellow-400' : 'text-gray-700'}`} href={link.href} key={link.href}>{link.name}</Link>
            )
        })}
         </div>
        {children}
    </div>
  )
}

export default UsersLayout