import Container from '@/components/notes/Container'
import SearchingOptions from '@/components/notes/SearchingOptions'
import TableUi from '@/components/notes/TableUi'
import React from 'react'

const page = () => {
  return (
    <Container>
      <div className='mt-[30px] relative'>
        <div className='flex justify-between '>
          <h1 className='font-bold text-[16px]'>All your notes <span className='text-sky-600'>Configuration</span></h1>
          <SearchingOptions />
        </div>
        <TableUi />
      </div>
    </Container>
  )
}

export default page