import React from 'react'

export default function NotesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=' min-h-screen  bg-[#282c34] '>
      {children}
    </main>
  );
}