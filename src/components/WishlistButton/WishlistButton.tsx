import { useCallback } from 'react'
import { useWishlist } from 'hooks/use-wishlist'

import * as S from './WishlistButton.styles'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
}

const WishlistButton = ({ id, hasText = true }: WishlistButtonProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()
  const isInWish = useCallback(() => isInWishlist(id), [isInWishlist, id])

  const ButtonText = isInWish() ? 'Remove from Wishlist' : 'Add to Wishlist'
  const ButtonIcon = isInWish() ? <Favorite /> : <FavoriteBorder />

  function handleAddRemove() {
    return isInWish() ? removeFromWishlist(id) : addToWishlist(id)
  }

  return (
    <S.Button onClick={handleAddRemove}>
      {ButtonIcon}
      {hasText && <span>{ButtonText}</span>}
    </S.Button>
  )
}

export default WishlistButton
