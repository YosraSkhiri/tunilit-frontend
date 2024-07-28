'use client'
import * as ToastRadix from '@radix-ui/react-toast'

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ToastRadix.Provider>
      {children}
      <ToastRadix.Viewport className="ToastViewport" />
    </ToastRadix.Provider>
  )
}
