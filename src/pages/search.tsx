import { GetServerSideProps } from 'next'

import Search, { SearchProps } from 'templates/Search'
import { getProducts, getMenu } from 'services/api'
import { CardProps } from 'components/Card/Card'
import { MenuItemProps } from 'components/MenuItem/MenuItem'

export default function Index(props: SearchProps) {
  return <Search {...props} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { req, query } = context

  const title = 'Searching for:  ' + query?.w || 'undefined'

  let showcaseItems: CardProps[] = []
  let menuItems: MenuItemProps[] = []

  if (req) {
    showcaseItems = await getProducts()
    menuItems = await getMenu()
  }

  return {
    props: {
      title,
      menuItems,
      showcaseItems
    }
  }
}
