import { render, screen } from 'utils/test-utils'

import Rating from '.'

describe('<Rating />', () => {
  it('should render component', () => {
    const { container } = render(<Rating />)

    expect(container).toBeInTheDocument()
  })

  it('should render a normal logo when size is small', () => {
    const { container } = render(<Rating size="small" />)

    expect(container.firstChild).toHaveStyle({
      height: '1.5rem'
    })
  })

  it('should render on 0 star ranting', () => {
    render(<Rating />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(0)
  })

  it('should render on 1 star ranting', () => {
    render(<Rating rating={1} />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(1)
  })

  it('should render on 2 star ranting', () => {
    render(<Rating rating={2} />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(2)
  })

  it('should render on 3 star ranting', () => {
    render(<Rating rating={3} />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(3)
  })

  it('should render on 4 star ranting', () => {
    render(<Rating rating={4} />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(4)
  })

  it('should render on 5 star ranting', () => {
    render(<Rating rating={5} />)

    expect(screen.queryAllByTestId('rating-on').length).toBe(5)
  })
})
