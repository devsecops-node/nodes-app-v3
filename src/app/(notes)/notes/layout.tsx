import React from 'react'

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen bg-[#282c34] justify-center items-center'>
      {children}
    </main>
  );
}