import React, { createContext } from 'react'
export const GlobalContext = createContext("Initial value");

const data = {
    name: "Zainab",
}

export default function ContextProvider({children}) {
  return (
      <GlobalContext.Provider value={data}>{ children }</GlobalContext.Provider>
  )
}
