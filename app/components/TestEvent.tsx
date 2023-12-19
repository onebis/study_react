'use client'

import { useCallback } from 'react'

export function TestEvent() {
  const handleClick = useCallback(() => {
    alert('123')
  }, [])

  return (
    <a href='/' onClick={handleClick}>
      click here
    </a>
  )
}
