"use client"
import { fintNoteByTitle } from '@/actions/crud'
import React, { useState } from 'react'

const SearchingOptions = () => {
  const [inputSearching, setInputSearching] = useState<string | undefined>(undefined)
  const [statusModalSearch, setStatusModalSeach] = useState(false)

  const findNotes = async (title: string) => {
    setInputSearching(title)
    const notesFinded = await fintNoteByTitle(title)
    console.log(notesFinded)
  }

  return (
    <section className='flex gap-1 items-center'>
      <label htmlFor="findTitle" className='text-[12px]'>Find</label>
      <input
        id='findTitle'
        type="text"
        className='rounded-sm px-2 text-black text-[11px]'
        placeholder='find by title'
        value={inputSearching}
        onClick={() => setStatusModalSeach(true)}
        onChange={async (e) => await findNotes(e.target.value)}
      />
      {statusModalSearch
        ?
        (
          <div className='text-[12px] absolute mobile:top-6 top-9 right-0 min-w-[162px] bg-white text-black rounded-sm shadow-2xl '>
            <p className='px-2'>qweqwe</p>
          </div>
        )
        :
        null
      }
    </section>
  )
}

export default SearchingOptions