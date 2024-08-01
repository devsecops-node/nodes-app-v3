import React from 'react'

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='p-5 min-h-screen tracking-tighter'>
      {children}
    </div>
  )
}

export default Container