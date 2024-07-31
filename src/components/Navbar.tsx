"use client"
import React, { useState } from 'react'
import style from "@/styles/main.module.css"
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'

const Navbar = () => {
  const [hoverStatus, setHoverStatus] = useState(false)
  const handleHover = (status: boolean) => {
    setHoverStatus(status)
  }
  return (
    <section className={`${style.navbard}`}>
      <div className='flex items-center'>
        <Link href='/'><h1 className='text-blue-500 font-bold cursor-pointer'>Notes app</h1></Link>
      </div>
      <div className='flex items-center'>
        <Link
          onMouseEnter={() => handleHover(true)}
          onMouseLeave={() => handleHover(false)}
          className={`flex items-center gap-[1px] cursor-pointer ${hoverStatus?"font-bold":''}`}
          href="/notes">
          Notes
          <MoveUpRight className={`${hoverStatus?'translate-y-[-2px]':'translate-y-0'} transition-all duration-200`} size={10} />
        </Link>
      </div>
    </section>
  )
}

export default Navbar