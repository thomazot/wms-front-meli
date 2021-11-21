import { useWishlist } from 'hooks/use-wishlist'

import * as S from './WishlistButton.styles'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'

export type WishlistButtonProps = {
  id: string
  hasText?: boolean
}

const WishlistButton = ({ id, hasText = true }: WishlistButtonProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist()

  const ButtonText = isInWishlist(id)
    ? 'Remove from Wishlist'
    : 'Add to Wishlist'

  function handleAddRemove() {
    return isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  return (
    <S.Button onClick={handleAddRemove}>
      {isInWishlist(id) ? <Favorite /> : <FavoriteBorder />}
      {hasText && <span>{ButtonText}</span>}
    </S.Button>
  )
}

export default WishlistButton
