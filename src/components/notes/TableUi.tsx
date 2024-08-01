import { getAllNotes } from '@/actions/crud'
import { Edit, Trash } from 'lucide-react'
import Link from 'next/link'
import React from 'react'


const TableUi = async () => {
  const notes = await getAllNotes()
  return (
    <table>
      <caption>All your notes here</caption>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Status</th>
          <th scope='col'>ID</th>
          <th scope='col'>Content</th>
          <th scope='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {notes.data?.map((note) => (
          <tr className='transition-all duration-150 hover:bg-[#454c5a]' key={note.id}>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.note}</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.id}</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>Completed</th>
            <th className='font-normal overflow-x-hidden text-[10px] text-start '>{note.note}</th>
            <th
              className='font-normal overflow-x-hidden text-[10px] text-start options'>
              <span title='delete' className='p-[2px] bg-red-700 rounded-sm cursor-pointer hover:scale-105 hover:bg-red-500'>
                <Trash className='' size={10} />
              </span>
                <span
                  title='edith' className='p-[2px] bg-green-700 rounded-sm cursor-pointer hover:scale-105 hover:bg-green-500'>
                  <Link href={`/notes/${note.id}`}>
                  <Edit size={10} />
                  </Link>
                </span>
            </th>
          </tr>
        ))}

      </tbody>
    </table>
  )
}

export default TableUi