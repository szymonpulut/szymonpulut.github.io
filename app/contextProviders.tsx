import { PropsWithChildren } from 'react'

import { IsClientContextProvider } from '@/src/context/IsClient.context'

export const ContextProviders: React.FC<PropsWithChildren> = ({ children }) => (
  <IsClientContextProvider>{children}</IsClientContextProvider>
)
