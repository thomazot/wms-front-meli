import { render, screen } from 'utils/test-utils'

import Home from '.'

jest.mock('components/Logo', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Logo">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Showcase">{children}</div>
  }
}))

describe('<Home />', () => {
  it('should render component', () => {
    render(<Home />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
