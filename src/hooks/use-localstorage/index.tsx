import { useState, useEffect } from 'react'

function getStorageValue(key: string, defaultValue?: any) {
  const value = localStorage.getItem(key)
  return value ? JSON.parse(value) : defaultValue
}

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T
): [value: T, setValue: (value: T) => void] {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue))

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
