"use client"
import { useAppContext } from '@/context/app.context'
import React from 'react'

const CreateNoteButton = () => {
  const { changeCreateModalStatus,createModalStatus } = useAppContext()
  const openCreateNoteModal =  () => {
    changeCreateModalStatus(true)
  }
  return (
    <button
      onClick={() =>  openCreateNoteModal()}
      className={`bg-sky-600 rounded-sm px-2 transition-all duration-150 hover:opacity-[0.6] ${createModalStatus? 'opacity-[0.1] z-0' :''}`}>Create One</button>
  )
}

export default CreateNoteButton