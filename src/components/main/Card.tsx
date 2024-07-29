"use client"
import { deleteOne } from '@/actions/crud'
import { Delete, Loader, Trash, Trash2 } from 'lucide-react'
import React, { useState } from 'react'

const Card = ({ title, id }: { title: string, id: string }) => {
  const [loading, setLoading] = useState(false)
  const deleteOneNote = async (id: string) => {
    setLoading(true)
    const { status } = await deleteOne(id)
    if (status) {
      setLoading(false)
    }
  }
  return (
    <div className='flex justify-between items-center outline outline-1 rounded-md px-2 py-1 min-w-[250px]'>
      <section className='flex gap-1 tracking-tighter items-center'>
        <h1 className='text-[15px] font-bold'>Title:</h1>
        <p className='text-[13px]'>{title}</p>
      </section>
      <section onClick={() => deleteOneNote(id)}>
        {
          loading ?
            (<Loader size={15} className='animate-spin' />)
            :
            (
              <Trash2 className='transition-all duration-150 hover:bg-red-600 rounded-sm text-red text-[red] hover:text-[white]' size={15} />
            )
        }
      </section>
    </div>
  )
}

export default Card