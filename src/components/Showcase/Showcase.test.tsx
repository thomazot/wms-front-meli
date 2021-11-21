import { render, screen } from 'utils/test-utils'

import Showcase from '.'
import ShowcaseItems from './Showcase.mock'

describe('<Showcase />', () => {
  it('should render component', () => {
    render(<Showcase title="showcase title" items={ShowcaseItems} />)

    expect(
      screen.getByRole('heading', { name: /showcase title/i })
    ).toBeInTheDocument()
  })
})
