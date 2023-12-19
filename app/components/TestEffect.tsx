'use client'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function TestEffect() {
  const pathName = usePathname()
  const bgColor = (pathName: string) => {
    switch (pathName) {
      case '/':
        return 'blue'
      case '/about':
        return 'lightblue'
      default:
        return ''
    }
  }
  useEffect(() => {
    document.body.style.backgroundColor = bgColor(pathName)
    return () => {
      //アンマウント時の処理
      document.body.style.backgroundColor = ''
    }
  }, [pathName])
  return <div></div>
}
