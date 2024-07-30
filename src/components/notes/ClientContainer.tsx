"use client"
import React from 'react'
import FormUpdateComment from './FormUpdateComment';

export interface ClientContainerProps {
  params: {
    id: string
  }
  note: {
    status: boolean;
    note: {
      id: string;
      note: string;
    } | null;
  } | {
    status: boolean;
    note: undefined;
  }
}

const ClientContainer = ({ params, note }: ClientContainerProps) => {
  return (
    <section>
      <h1 className='tracking-tighter font-bold'>Edith your <span className='text-sky-600'>Note Here ⭐</span></h1>
      <section>
        {
          note.status ?
            (
              <FormUpdateComment note={note.note?.note as string} id={params.id} />
            )
            :
            (
              <p>Not so good</p>
            )
        }
      </section>
    </section>
  )
}

export default ClientContainer