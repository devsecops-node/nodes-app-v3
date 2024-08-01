"use client"
import React from 'react'
import FormUpdateComment from './FormUpdateComment';
import { useAppContext } from '@/context/app.context';
import RedirectNabard from './RedirectNabard';

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
  const { redirecMainStatus } = useAppContext()


  return (
    <>
      <section className={` ${redirecMainStatus ? "opacity-[0.1] z-0" : 'z-10'} `} >
        <h1 className='tracking-tighter font-bold'>Edith your <span className='text-sky-600'>Note Here ⭐</span></h1>
        <section>
          {
            note.status ?
              (
                <FormUpdateComment note={note.note?.note as string} id={params.id} />
              )
              :
              (
                <p>Parece que no hay una nota con ese id</p>
              )
          }
        </section>
      </section>
      {
        redirecMainStatus
          ?
          <RedirectNabard />
          :
          null
      }
    </>
  )
}

export default ClientContainer