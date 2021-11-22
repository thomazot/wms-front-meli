import faker from 'faker'

export const generator = (schema, min = 1, max) => {
  max = max || min
  return Array.from({
    length: faker.datatype.number({ min: min, max: max })
  }).map(() =>
    Object.keys(schema).reduce((entity, key) => {
      entity[key] = String(schema[key]).match(/^{{/)
        ? faker.fake(schema[key])
        : schema[key]
      return entity
    }, {})
  )
}

const productsSchema = {
  id: '{{datatype.uuid}}',
  title: '{{company.companyName}} {{company.companySuffix}}',
  price: '{{commerce.price}}',
  thumbnail: '/images/img.png',
  permalink: 'https://www.mercadolivre.com.br/produto/123',
  rating: 4,
  currency_id: 'BRL'
}

export const productsData = generator(productsSchema, 9, 9)

const menuSchema = {
  id: '{{datatype.uuid}}',
  name: '{{company.companyName}} {{company.companySuffix}}'
}

export const menuData = generator(menuSchema, 10, 20)
