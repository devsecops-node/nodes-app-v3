"use client"
import { ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'

interface ModalSetStatusProps {
  setStatus: (status: StatusOptiosn) => void
}

export type StatusOptiosn = "low" | "medium" | "Hihgt"
const ModalSetStatus = (props: ModalSetStatusProps) => {
  const [activateModal, setActivateModal] = useState(false)
  const [statusPrisma, setSatusPrisma] = useState<StatusOptiosn | undefined>(undefined)

  const assigmentStatusPrisma = (status: StatusOptiosn) => {
    props.setStatus(status)
    setSatusPrisma(status)
    setActivateModal(false)
  }

  return (
    <section className='flex'>
      <div
        onClick={() => setActivateModal(!activateModal)}
        className='bg-white px-1 py-1 text-black relative rounded-sm flex justify-center min-w-[70px] items-center mt-auto mb-auto max-h-[80%] tracking-tighter text-[12px] cursor-pointer'>
        <p>{statusPrisma ? statusPrisma : "Grade your note"}</p>
        {!activateModal
          ?
          (
            <ChevronDown size={12} strokeWidth={3} />
          )
          :
          (
            <>
              <ChevronUp size={12} strokeWidth={3} />
              <div className='bg-white rounded-sm absolute w-full top-0 flex flex-col gap-0 mt-[21px] outline outline-1 outline-[#282c34]  '>
                <p
                  onClick={() => assigmentStatusPrisma('low')}
                  className='flex px-2 flex-row  hover:bg-green-700 hover:text-white gap-2 items-center'>
                  <div className='w-[5px] h-[5px] bg-green-600 rounded-full' />
                  Low
                </p>
                <p
                  onClick={() => assigmentStatusPrisma('medium')}
                  className='flex  px-2 flex-row gap-2 hover:bg-yellow-700 hover:text-white items-center'>
                  <div className='w-[5px] h-[5px] bg-yellow-600 rounded-full' />
                  Medium
                </p>
                <p
                  onClick={() => assigmentStatusPrisma('Hihgt')}
                  className='flex px-2 flex-row gap-2 hover:bg-red-700 hover:text-white items-center'>
                  <div className='w-[5px] h-[5px] bg-red-600 rounded-full' />
                  Hihgt
                </p>
              </div>
            </>
          )
        }

      </div>
    </section>
  )
}

export default ModalSetStatus