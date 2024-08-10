import { getAllNotes } from '@/actions/crud'
import React from 'react'
import OptionsForms from './OptionsForms'


const TableUi = async () => {
  const notes = await getAllNotes()



  return (
    <table>
      <caption>All your notes here</caption>
      <thead>
        <tr className=''>
          <th scope='col'>Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>Created</th>
          <th scope='col'>Last Modified</th>
          <th scope='col' >ID</th>
          <th scope='col'>Content</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.data?.map((note) => (
          <tr className='transition-all duration-150 hover:bg-[#454c5a] ' key={note.id}>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.note}</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.status}</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>
              <p className='hidden sm:block'>
                {note.create.toDateString()}
                <span className='font-bold text-sky-600'>  {note.create.getHours().toString()}:{note.create.getMinutes().toString()}</span>
              </p>
            </th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start'>
              <p className='hidden sm:block'>
                {note.lastModified.toDateString()}
                <span className='font-bold text-sky-600'>  {note.lastModified.getHours().toString()}:{note.lastModified.getMinutes().toString()}</span>
              </p>
            </th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start  '>{note.id}</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.note} </th>
            <th
              className='font-normal overflow-x-hidden text-[10px] text-start options'>
              <OptionsForms noteId={note.id} />
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default TableUi