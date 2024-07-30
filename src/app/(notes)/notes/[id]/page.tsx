import { getNote } from '@/actions/crud'
import FormUpdateComment from '@/components/notes/FormUpdateComment'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const note = await getNote(params.id)
  return (
    <section className=''>
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

export default page