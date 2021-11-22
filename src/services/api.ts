import axios from 'axios'
import { CardProps } from 'components/Card/Card'
import { MenuItemProps } from 'components/MenuItem/MenuItem'

const Api = axios.create({ baseURL: process.env.API_URL })

export default Api

export const getProducts = async (): Promise<CardProps[]> => {
  const response = await Api.get('/api/products')
  return response.data
}

export const getMenu = async (): Promise<MenuItemProps[]> => {
  const response = await Api.get('/api/menu')
  return response.data
}
