import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a black label by default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/mercado livre/i).parentElement).toHaveStyle({
      color: '#343677'
    })
  })

  it('should render a white label by default', () => {
    render(<Logo color="white" />)
    expect(screen.getByLabelText(/mercado livre/i).parentElement).toHaveStyle({
      color: '#ffffff'
    })
  })

  it('should render a normal logo when size is default', () => {
    render(<Logo />)
    expect(screen.getByLabelText(/mercado livre/i).parentElement).toHaveStyle({
      maxWidth: '11rem'
    })
  })

  it('should render a bigger logo', () => {
    render(<Logo size="large" />)
    expect(screen.getByLabelText(/mercado livre/i).parentElement).toHaveStyle({
      maxWidth: '20rem'
    })
  })

  it('should render a bigger logo without text if hideOnMobile', () => {
    render(<Logo hideOnMobile />)
    expect(
      screen.getByLabelText(/mercado livre/i).parentElement
    ).toHaveStyleRule('max-width', '5.8rem', {
      media: '(max-width: 61.938rem)'
    })
  })
})
