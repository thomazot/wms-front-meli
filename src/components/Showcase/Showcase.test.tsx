import { render } from 'utils/test-utils'

import Showcase from '.'

describe('<Showcase />', () => {
  it('should render component', () => {
    const { container } = render(<Showcase items={[]} />)

    expect(container).toBeInTheDocument()
  })
})
