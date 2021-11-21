import { render, screen } from 'utils/test-utils'

import Auth from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Logo">{children}</div>
  }
}))

describe('<Auth />', () => {
  it('should render component', () => {
    render(<Auth title={'Auth page'} />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
  })
})
