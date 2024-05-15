import { Dispatch, MouseEvent, SetStateAction, memo, useCallback } from "react"
import { User } from "../../types"
import { useThrottle } from "../../hooks/useThrottle"

interface Props {
   setItem: Dispatch<SetStateAction<User | null>>
}

export const Button = memo(({ setItem }: Props) => {

   const throttle = useThrottle(async () => {
      const id = Math.floor(Math.random() * (10 - 1)) + 1
      const response = await fetch(`${process.env.REACT_APP_URL}/${id}`)
      const user = await response.json()
      setItem(user)
   })

   const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.stopPropagation()
      throttle()
   }, [])

   return <button type="button" onClick={handleButtonClick}>get random user</button>
})