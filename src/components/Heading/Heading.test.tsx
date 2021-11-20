import { render, screen } from 'utils/test-utils'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a heading with a small size', () => {
    render(<Heading size="small">Mercado Livre</Heading>)
    expect(screen.getByRole('heading', { name: /mercado livre/i })).toHaveStyle(
      {
        'font-size': '1.6rem'
      }
    )

    expect(
      screen.getByRole('heading', { name: /mercado livre/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a medium size', () => {
    render(<Heading>Mercado Livre</Heading>)

    expect(screen.getByRole('heading', { name: /mercado livre/i })).toHaveStyle(
      {
        'font-size': '2.0rem'
      }
    )
  })

  it('should render a heading with a huge size', () => {
    render(<Heading size="huge">Mercado Livre</Heading>)

    expect(screen.getByRole('heading', { name: /mercado livre/i })).toHaveStyle(
      {
        'font-size': '5.2rem'
      }
    )
  })
})
