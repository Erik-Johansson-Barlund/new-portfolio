import React, { createContext, useMemo, useState } from 'react'

export interface MouseContextType {
  isHovering: boolean
  setIsHovering: React.Dispatch<React.SetStateAction<boolean>>
}

const initContext: MouseContextType = {
  isHovering: false,
  setIsHovering: () => {}
}

export const MouseContext = createContext<MouseContextType>(initContext)

// Create the provider component
export default function MouseProvider ({ children }: { children: React.ReactNode }): JSX.Element {
  const [isHovering, setIsHovering] = useState(false)

  const api: MouseContextType = useMemo(() => ({
    isHovering,
    setIsHovering
  }), [isHovering])

  return (
    <MouseContext.Provider value={api}>
      {children}
    </MouseContext.Provider>
  )
};
