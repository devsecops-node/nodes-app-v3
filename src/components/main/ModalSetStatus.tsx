"use client"
import React from 'react'

interface ModalSetStatusProps {
  setStatus: (status: StatusOptiosn) => void
}

export type StatusOptiosn = "low" | "medium" | "Hihgt"
const ModalSetStatus = (props: ModalSetStatusProps) => {

  return (
    <div className='text-black outline outline-1 outline-[#272b33] absolute bottom-0 z-20 right-0 drop-shadow-sm bg-[#4c5768] rounded-sm p-[4px] font-bold text-[11px] flex flex-col gap-[3px]'>
      <p
        onClick={() => props.setStatus('low')}
        className='bg-yellow-600 rounded-sm text-center cursor-pointer hover:opacity-[0.7]'>low</p>
      <p
        onClick={() => props.setStatus('medium')}
        className='bg-green-600 rounded-sm text-center cursor-pointer hover:opacity-[0.7]'>medium</p>
      <p
        onClick={() => props.setStatus('Hihgt')}
        className='bg-red-600 rounded-sm text-center cursor-pointer hover:opacity-[0.7]'>hight</p>
    </div>
  )
}

export default ModalSetStatus