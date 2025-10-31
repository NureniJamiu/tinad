import { useState, useEffect } from 'react'

export function useLoadingState(dataLoading, minDisplayTime = 1500) {
  const [showLoading, setShowLoading] = useState(true)
  const [startTime] = useState(Date.now())

  useEffect(() => {
    if (!dataLoading) {
      const elapsed = Date.now() - startTime
      const remaining = Math.max(0, minDisplayTime - elapsed)
      
      setTimeout(() => {
        setShowLoading(false)
      }, remaining)
    }
  }, [dataLoading, startTime, minDisplayTime])

  return showLoading
}
