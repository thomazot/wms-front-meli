import { Star as StarIcon } from '@styled-icons/evaicons-solid/Star'

import * as S from './Rating.styles'

export type RatingProps = {
  size?: 'normal' | 'small'
  rating?: 0 | 1 | 2 | 3 | 4 | 5
}

const Rating = ({ rating = 0, size = 'normal' }: RatingProps) => {
  return (
    <S.Wrapper size={size}>
      {[1, 2, 3, 4, 5].map((index) => (
        <StarIcon
          key={index}
          aria-checked={rating >= index}
          data-testid={`rating-${rating >= index ? 'on' : 'off'}`}
          fill={
            rating >= index
              ? 'var(--color-brand-primary)'
              : 'var(--color-grey-lightest)'
          }
        />
      ))}
    </S.Wrapper>
  )
}

export default Rating
