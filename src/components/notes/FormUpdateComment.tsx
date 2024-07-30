"use client"
import { updateOneNote } from '@/actions/crud'
import React, { useState } from 'react'

const FormUpdateComment = ({ note, id }: { note: string, id: string }) => {
  const [noteUpdate, setNoteUpdate] = useState(note)
  const [statusLoading, setStatusLoading] = useState(false)

  const updateNote = async (formData: FormData) => {
    setStatusLoading(true)
    await updateOneNote(id, formData.get('note') as string)
    setStatusLoading(false)
  }
  return (
    <div>
      <p className='tracking-tighter text-[13px]'>From DB  <span className='text-red-600'>{noteUpdate}</span></p>
      <form action={updateNote} className='mt-2 flex flex-col'>
        <label htmlFor="name">Upadte Your Note</label>
        <input
          onChange={(e) => setNoteUpdate(e.target.value)}
          name='note'
          value={noteUpdate}
          id='name'
          className='text-black rounded-sm px-2 '
          type="text" />
      </form>
    </div>
  )
}

export default FormUpdateComment