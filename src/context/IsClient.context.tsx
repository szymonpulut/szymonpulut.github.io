import { createContext, useContext, useEffect, useState } from 'react'

const IsClientContext = createContext(false)

interface IsClientContextProps {
  children?: React.ReactNode
}

export const IsClientContextProvider: React.FC<IsClientContextProps> = ({
  children,
}) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => setIsClient(true), [])

  return (
    <IsClientContext.Provider value={isClient}>
      {children}
    </IsClientContext.Provider>
  )
}

export function useIsClient() {
  return useContext(IsClientContext)
}
