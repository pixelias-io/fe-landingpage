import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

type MotionPreference = { paused: boolean; toggle: () => void }
const MotionContext = createContext<MotionPreference>({ paused: false, toggle: () => {} })

export function MotionProvider({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false)
  useEffect(() => {
    document.documentElement.toggleAttribute('data-motion-paused', paused)
    document.dispatchEvent(new Event('pixelias-motion-change'))
    return () => {
      document.documentElement.removeAttribute('data-motion-paused')
    }
  }, [paused])
  return (
    <MotionContext.Provider value={{ paused, toggle: () => setPaused((value) => !value) }}>
      {children}
    </MotionContext.Provider>
  )
}
export function useMotion() {
  return useContext(MotionContext)
}
