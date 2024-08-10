"use client"
import React, { useState } from 'react'

const SearchingOptions = () => {
  const [inputSearching, setInputSearching] = useState<string | undefined>(undefined)
  return (
    <section className='flex gap-1 relative items-center '>
      <label htmlFor="findTitle" className='text-[12px]'>Find</label>
      <input
        id='findTitle'
        type="text"
        className='rounded-sm px-2 text-black text-[11px]'
        placeholder='find by title'
        onChange={(e) => setInputSearching(e.target.value)}
      />
      <div className='text-[12px] absolute bg-white'>
        <p>qweqwe</p>
      </div>
    </section>
  )
}

export default SearchingOptions