"use client"
import { createNote } from '@/actions/crud'
import { useAppContext } from '@/context/app.context'
import React from 'react'

const ModalCreateNote = () => {
  const { changeCreateModalStatus } = useAppContext()
  const uploadForm = async (formData: FormData) => {
    const { status } = await createNote(formData)
    if (status) {
      changeCreateModalStatus(false)
    }
  }
  return (
    <div className='h-screen  w-screen top-0 left-0 flex flex-col justify-center items-center  absolute z-40'>
      <h1 className=' font-bold text-sky-600'>Create Your First one</h1>
      <form action={uploadForm} className='flex flex-col gap-2'>
        <label htmlFor="content">Comment your note</label>
        <input id='content' className='px-2 tracking-tighter text-[12px] rounded-sm text-black' type="text" name='title' placeholder='comment your note here ....' />
        <button type='submit' className='bg-sky-600 rounded-sm transition-all duration-150 hover:scale-105 '>Create</button>
      </form>
    </div>
  )
}

export default ModalCreateNote