import { useState, useEffect } from 'react'
import { parseCookies, setCookie } from 'nookies'

function getStorageValue(key: string, defaultValue?: any) {
  const value = parseCookies()[key]
  return value ? JSON.parse(value) : defaultValue
}

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [value: T, setValue: (value: T) => void] {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    setCookie(null, key, JSON.stringify(value), { maxAge: 30 * 24 * 60 * 60 })
  }, [key, value])

  return [value, setValue]
}
