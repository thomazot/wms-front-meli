import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import WishlistButton from '.'

describe('<WishlistButton />', () => {
  it('should render component', () => {
    const { container } = render(<WishlistButton id="1" />)

    expect(container).toBeInTheDocument()
  })

  it('should render component with text', () => {
    render(<WishlistButton id="1" />)

    expect(
      screen.getByRole('button', { name: /add to wishlist/i })
    ).toBeInTheDocument()
  })
  it('should add/remove to wishlist', () => {
    render(<WishlistButton id="1" />)

    const button = screen.getByRole('button', { name: /add to wishlist/i })

    userEvent.click(button)

    expect(button).toHaveTextContent(/remove from wishlist/i)

    userEvent.click(button)

    expect(button).toHaveTextContent(/add to wishlist/i)
  })
})
