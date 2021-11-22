import { GetServerSideProps } from 'next'

import Home, { HomeProps } from 'templates/Home'
import { getProducts, getMenu } from 'services/api'
import { CardProps } from 'components/Card/Card'
import { MenuItemProps } from 'components/MenuItem/MenuItem'

export default function Index(props: HomeProps) {
  return <Home {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req } = context

  let showcaseItems: CardProps[] = []
  let menuItems: MenuItemProps[] = []

  if (req) {
    showcaseItems = await getProducts()
    menuItems = await getMenu()
  }

  return {
    props: {
      menuItems,
      showcaseItems
    }
  }
}
