import { render, screen } from 'utils/test-utils'

import Search from '.'
import MenuItems from 'components/Menu/Menu.mock'
import ShowcaseItems from 'components/Showcase/Showcase.mock'

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
    render(<Search menuItems={MenuItems} showcaseItems={ShowcaseItems} />)

    expect(screen.getByTestId('Mock Logo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
  })
})
