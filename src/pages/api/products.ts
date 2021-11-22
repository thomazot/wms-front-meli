import { productsData } from 'utils/faker'

export default function handler(req: any, res: any) {
  res.status(200).json(productsData)
}
