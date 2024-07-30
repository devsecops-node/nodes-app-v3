"use client"
import { updateOneNote } from '@/actions/crud'
import { useAppContext } from '@/context/app.context'
import { Loader } from 'lucide-react'
import React, { useState } from 'react'

const FormUpdateComment = ({ note, id }: { note: string, id: string }) => {
  const [noteUpdate, setNoteUpdate] = useState(note)
  const [statusLoading, setStatusLoading] = useState(false)
  const { changeRedirecMainStatus} = useAppContext()

  const updateNote = async (formData: FormData) => {
    await updateOneNote(id, formData.get('note') as string)
    setStatusLoading(false)
    changeRedirecMainStatus(true)
  }
  return (
    <div>
      <p className='tracking-tighter text-[13px]'>From DB  <span className='text-red-600'>{noteUpdate}</span></p>
      <form action={async (formData) => await updateNote(formData)} className='mt-2 flex flex-col gap-1'>
        <label htmlFor="name">Upadte Your Note</label>
        <input
          onChange={(e) => setNoteUpdate(e.target.value)}
          name='note'
          value={noteUpdate}
          id='name'
          className='text-black rounded-sm px-2 '
          type="text" />
        <button
          onClick={() => setStatusLoading(true)}
          className='px-2 bg-sky-600 opacity-[1] disabled:scale-100 rounded-sm transition-all duration-150 hover:scale-105 disabled:opacity-[0.7] relative'
        >
          Submmit
          <span className='animate-spin absolute right-0 mt-1'>{statusLoading ? <Loader size={12} /> : null}</span>
        </button>
      </form>
    </div>
  )
}

export default FormUpdateComment