"use client"
import { createNote } from '@/actions/crud'
import { useAppContext } from '@/context/app.context'
import React, { useState } from 'react'
import ModalSetStatus, { StatusOptiosn } from './ModalSetStatus'

const ModalCreateNote = () => {
  const { changeCreateModalStatus } = useAppContext()

  const [modalType, setModalType] = useState(false)
  const [typeOption, setTypeOption] = useState<StatusOptiosn>('low')

  const uploadForm = async (formData: FormData) => {
    const { status } = await createNote(formData)
    if (status) {
      changeCreateModalStatus(false)
    }
  }

  const assigTypeOption = (option: StatusOptiosn) => {
    setTypeOption(option)
    setModalType(false)
  }

  return (
    <div className='h-screen  w-screen top-0 left-0 flex flex-col justify-center items-center  absolute z-40'>
      <h1 className=' font-bold text-sky-600'>Create Your First one</h1>
      <form action={uploadForm} className='flex flex-col gap-2'>
        <section className='flex flex-col'>
          <label htmlFor="title">Title</label>
          <div className='flex gap-2 relative'>
            <input
              id='title'
              className='px-2 tracking-tighter text-[12px] rounded-sm text-black'
              type="text"
              name='title'
              placeholder='title your note here ....' />
            <div
              onMouseEnter={() => setModalType(true)}
              className={`tracking-tighter flex items-center w-full cursor-pointer text-[10px] rounded-sm transition-all duration-150 ${modalType ? "opacity-[0.6] cursor-default" : ''}`}
            >
              <p className={`bg-slate-500 w-full h-full px-2 rounded-sm`}>Level your note</p>
            </div>
            {
              modalType
                ?
                (<ModalSetStatus setStatus={assigTypeOption} />)
                :
                null
            }
          </div>
        </section>
        <section className='flex flex-col'>
          <label htmlFor="comment">
            Comment
          </label>
          <input
            id='comment'
            className='px-2 tracking-tighter text-[12px] rounded-sm text-black'
            type="text"
            name='comment'
            placeholder='Comment your note here ....' />
        </section>
        <button type='submit' className='bg-sky-600 rounded-sm transition-all duration-150 hover:scale-105 '>Create</button>
      </form>
    </div >
  )
}

export default ModalCreateNote