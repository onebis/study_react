'use client'
import { useCallback, useState } from 'react'

export const useCounter = () => {
  const [isShow, setIsShow] = useState(true)
  const [count, setCount] = useState(0)
  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])
  const toggleIsShow = useCallback(() => {
    setIsShow((prevIsShow) => !prevIsShow)
  }, [])

  return { count, isShow, handleClick, toggleIsShow }
}
