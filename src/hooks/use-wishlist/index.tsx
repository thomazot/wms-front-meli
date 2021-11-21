import React, { createContext, useContext } from 'react'
import { useLocalStorage } from 'hooks/use-localstorage'

export type WishlistItemsProps = {
  id: string
}

export type WishlistContextData = {
  items: WishlistItemsProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

export const WISHLIST_NAME = 'WISHLIST-MELI'

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [value, setValue] = useLocalStorage<WishlistItemsProps[]>(
    WISHLIST_NAME,
    []
  )

  const isInWishlist = (id: string) => value.some((item) => item.id === id)

  const addToWishlist = (id: string) => {
    if (isInWishlist(id)) return
    setValue([...value, { id }])
  }

  const removeFromWishlist = (id: string) => {
    setValue(value.filter((item) => item.id !== id))
  }

  return (
    <WishlistContext.Provider
      value={{
        items: value,
        isInWishlist,
        addToWishlist,
        removeFromWishlist
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
