"use client"
import { useAppContext } from '@/context/app.context';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import ModalCreateNote from './ModalCreateNote';

export interface ProvideInfoRenderedUI {
  id: string;
  note: string;
}

const ProvideInfoRendered = ({ data }: { data: ProvideInfoRenderedUI[] | undefined }) => {
  const { createModalStatus, changeCreateModalStatus } = useAppContext()
  const [mounted, setMouted] = useState(false)

  const checkDataLength = () => {
    if (data && data.length === 0) {
      changeCreateModalStatus(true);
    }
  }

  useEffect(() => {
    setMouted(true)
    checkDataLength();
  }, [])

  // if (!mounted) {
  //   return (
  //     <div>renderizando</div>
  //   )
  // }
  if (createModalStatus) {
    return (
      <ModalCreateNote />
    )
  }
  return (
    <div>
      {
        data?.map((da) => (
          <Card key={da.id} title={da.note} id={da.id} />
        ))
      }
    </div>
  )
}

export default ProvideInfoRendered