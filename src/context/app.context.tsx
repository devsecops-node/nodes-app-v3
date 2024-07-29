"use client"
import { createContext, useContext, useState } from "react";


export interface AppContextUI {
  createModalStatus: boolean
  changeCreateModalStatus: (status: boolean) => void
}

const AppContext = createContext<AppContextUI>({
  createModalStatus: true,
  changeCreateModalStatus: (status: boolean) => {}
  // changeStatus: () => { }
})

export default function AppWrapper({ children }: { children: React.ReactNode }) {
  const [createModalStatus, setCreateModalStatus] = useState(false)
  const changeCreateModalStatus = (status: boolean) => {
    setCreateModalStatus(status)
  }
  return (
    <AppContext.Provider value={
      {
        createModalStatus,
        changeCreateModalStatus,
      }
    }>
      {children}
    </AppContext.Provider>
  )
}
export function useAppContext() {
  return useContext(AppContext)
}