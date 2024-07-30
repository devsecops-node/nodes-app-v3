import { getNote } from '@/actions/crud'
import ClientContainer from '@/components/notes/ClientContainer'
import FormUpdateComment from '@/components/notes/FormUpdateComment'
import React from 'react'

const page = async ({ params }: { params: { id: string } }) => {
  const note = await getNote(params.id)
  return (
    <>
      <ClientContainer note={note} params={params}/>
    </>
  )
}

export default page