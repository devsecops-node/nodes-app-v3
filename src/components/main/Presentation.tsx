"use client"
import { useAppContext } from '@/context/app.context'
import React from 'react'

const Presentation = () => {
  const { createModalStatus } = useAppContext()
  return (
    <div className={`rounded-sm px-2 relative min-w-[250px] ${createModalStatus ? "opacity-[0.2]" : ''}`}>
      <h2 className='text-center text-[12px]'>Hello There 🖐🏻</h2>
      <h1 className='text-center text-[16px] font-bold'><span className='text-sky-700'>Simple Notes</span> App</h1>
      {/* <span className='absolute right-0 top-0 text-[9px] tracking-tighter'>presentation.component</span> */}
    </div>
  )
}

export default Presentation