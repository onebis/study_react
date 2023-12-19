'use client'
import React, { useCallback, useState } from 'react'

export const useInputArray = () => {
  const [text, setText] = useState('')
  const [array, setArray] = useState([''])

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setText((prevText) => e.target.value)
  }, [])

  const handleAdd = useCallback(() => {
    setArray((prevArray: string[]) => {
      if (prevArray.some((item) => item === text)) {
        alert('同じ要素が存在します')
        return prevArray
      }
      setText((prevText) => '')
      return [...prevArray, text]
    })
  }, [text])
  return { text, array, handleChange, handleAdd }
}
