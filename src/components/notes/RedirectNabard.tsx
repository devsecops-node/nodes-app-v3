"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { useAppContext } from '@/context/app.context'

const RedirectNabard = () => {
  const { changeRedirecMainStatus } = useAppContext()
  const router = useRouter()

  const redirectToMain = () => {
    changeRedirecMainStatus(false)
    router.push('/')
  }

  return (
    <div className='p-3 h-full w-full outline-1 z-20  flex justify-center flex-col items-center absolute'>
      <p className='tracking-tighter font-bold text-green-700 text-[20px]'>Updateted succesfyllu</p>
      <p className='text-[12px]'>Info was updates succesfully</p>
      <button onClick={() => redirectToMain()} className='text-white mt-2 bg-sky-700 rounded-md px-2 font-bold text-[15px] transition-all duration-150 hover:translate-y-[-4px]'>Redirec to Main</button>
    </div>
  )
}

export default RedirectNabard