import { Loader } from 'lucide-react'
import React from 'react'

const LoadingExample = () => {
  return (
    <div className=' flex justify-center items-center bg-[#272b33] animate-spin'>
      <Loader size={13} />
    </div>
  )
}

export default LoadingExample