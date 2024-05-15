import { useEffect, useRef } from 'react'

export const useThrottle = <T extends () => void>(callback: T, delay = 1000) => {
   const lastExecTime = useRef(0)
   const clickTriggered = useRef(false)

   useEffect(() => {
      if (clickTriggered.current) {
         const timer = setTimeout(() => {
            lastExecTime.current = Date.now()
            callback()
            clickTriggered.current = false
         }, delay)

         return () => clearTimeout(timer)
      }
   }, [callback, delay])

   const throttle = () => {
      if (Date.now() - lastExecTime.current >= delay) {
         lastExecTime.current = Date.now()
         callback()
      } else {
         clickTriggered.current = true
      }
   }

   return throttle
}