import Container from '@/components/notes/Container'
import TableUi from '@/components/notes/TableUi'
import React from 'react'

const page = () => {
  return (
    <Container>
      <div className='mt-[30px]'>
        <h1  className='font-bold text-[16px]'>All your notes <span className='text-sky-600'>Configuration</span></h1>
        <TableUi />
      </div>
    </Container>
  )
}

export default page