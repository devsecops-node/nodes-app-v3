import { getAllNotes } from '@/actions/crud'
import React from 'react'
import ProvideInfoRendered from './ProvideInfoRendered'

const RenderNotes = async () => {
  const notes = await getAllNotes()

  return (
    <div>
      {notes.status
        ?
        (
            <ProvideInfoRendered data={notes.data} />
        )
        :
        (
          <p>Nothing here</p>
        )
      }
    </div>
  )
}

export default RenderNotes