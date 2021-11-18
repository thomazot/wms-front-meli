import { render, screen } from 'utils/test-utils'

import Button from '.'

describe('<Button />', () => {
  it('should remder the medium size by default', () => {
    const { container } = render(<Button>Hello World</Button>)

    expect(screen.getByRole('button', { name: /Hello World/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Hello World</Button>)

    expect(screen.getByRole('button', { name: /Hello World/i })).toHaveStyle({
      height: '3rem',
      fontSize: '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Hello World</Button>)

    expect(screen.getByRole('button', { name: /Hello World/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Hello World</Button>)

    expect(
      screen.getByRole('button', { name: /Hello World/i })
    ).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
  })

  it('should render Button as a link', () => {
    render(
      <Button as="a" href="/link">
        Hello World
      </Button>
    )

    expect(screen.getByRole('link', { name: /Hello World/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Hello World</Button>)

    expect(screen.getByRole('button', { name: /Hello World/i })).toHaveStyle({
      width: '100%'
    })
  })
})
