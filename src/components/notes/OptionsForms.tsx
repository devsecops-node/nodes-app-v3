"use client"
import { Edit, Loader2Icon, Trash } from 'lucide-react'
import React, { useState } from 'react'
import Link from 'next/link'
import { deleteOne } from '@/actions/crud'

const OptionsForms = ({ noteId }: { noteId: string }) => {
  const [loading, setLoading] = useState(false)
  const deleteOneNote = async (id: string) => {
    setLoading(true)
    const { status } = await deleteOne(id)
    if (status) {
      setLoading(false)
    }
  }
  return (
    <div className='flex w-full justify-center items-center'>
      <span title='delete' className='p-[2px] bg-red-700 rounded-sm cursor-pointer hover:scale-105 hover:bg-red-500'>
        <Trash
          onClick={() => deleteOneNote(noteId)}
          className=''
          size={10} />
      </span>
      <span
        title='edith' className='p-[2px] bg-green-700 rounded-sm cursor-pointer hover:scale-105 hover:bg-green-500'>
        <Link href={`/notes/${noteId}`}>
          <Edit size={10} />
        </Link>
      </span>
      {loading ? <span><Loader2Icon  className='animate-spin' size={10}/> </span>:""}
    </div>
  )
}

export default OptionsForms