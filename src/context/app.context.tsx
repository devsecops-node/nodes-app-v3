"use client"
import { createContext, useContext, useState } from "react";


export interface AppContextUI {
  createModalStatus: boolean
  changeCreateModalStatus: (status: boolean) => void
  redirecMainStatus: boolean
  changeRedirecMainStatus: (status: boolean) => void
}

const AppContext = createContext<AppContextUI>({
  createModalStatus: true,
  changeCreateModalStatus: (status: boolean) => { },
  // changeStatus: () => { }
  redirecMainStatus: false,
  changeRedirecMainStatus: (status: boolean) => { }
})

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  //? Modal Status
  const [createModalStatus, setCreateModalStatus] = useState(false)
  const changeCreateModalStatus = (status: boolean) => {
    setCreateModalStatus(status)
  }

  //? Redirect Main Status
  const [redirecMainStatus, setRedirecMainStatus] = useState(false)
  const changeRedirecMainStatus = (status: boolean) => {
    setRedirecMainStatus(status)
  }
  return (
    <AppContext.Provider value={
      {
        createModalStatus,
        changeCreateModalStatus,
        redirecMainStatus,
        changeRedirecMainStatus
      }
    }>
      {children}
    </AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}