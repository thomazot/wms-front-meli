import Link from 'next/link'
import Image from 'next/image'

import * as S from './Card.styles'

import Rating from 'components/Rating'
import WishlistButton from 'components/WishlistButton'

export type CardProps = {
  id: string
  title: string
  permalink: string
  thumbnail: string
  price: number
  currency_id: string
  rating: 0 | 1 | 2 | 3 | 4 | 5
}

const Card = ({
  id,
  title,
  permalink,
  thumbnail,
  price,
  currency_id,
  rating
}: CardProps) => {
  const toCurrency = (n: number, curr: string, LanguageFormat = 'en-US') =>
    Intl.NumberFormat(LanguageFormat, {
      style: 'currency',
      currency: curr
    }).format(n)

  return (
    <S.Wrapper data-testid={`card-${id}`}>
      <Link href={permalink} passHref>
        <a>
          <Image src={thumbnail} width={500} height={500} title={title} />
        </a>
      </Link>
      <S.Row>
        <S.Title>
          <Link href={`${permalink}`} passHref>
            <a title={title}>{title}</a>
          </Link>
        </S.Title>
        <S.Rating>
          <Rating size="small" rating={rating} />
        </S.Rating>
      </S.Row>
      <S.Price>{toCurrency(price, currency_id)}</S.Price>
      <S.Wishlist>
        <WishlistButton id={id} />
      </S.Wishlist>
    </S.Wrapper>
  )
}

export default Card
