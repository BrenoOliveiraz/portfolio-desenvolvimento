
// Este componente vai rastrear o tamanho va view port para lockar na página
"use client"
import { links } from '@/lib/data'
import React, {useState, createContext} from 'react'


//tipando as funções
type SectionName = typeof links[number]["name"]

type ActiveSectionContextProviderProps = {
  children: React.ReactNode
}

type ActiveSectionContextType = {
  activeSection: SectionName
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
}

//utilizando a context API do react para trackear a página
export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null) //valor default null

export default function ActiveSectionContextProvider({children}: ActiveSectionContextProviderProps) {
    const [activeSection, setActiveSection] = useState<SectionName>('Home')
    
  return <ActiveSectionContext.Provider value={{
    activeSection, setActiveSection

  }}>{children} </ActiveSectionContext.Provider>
  
}
