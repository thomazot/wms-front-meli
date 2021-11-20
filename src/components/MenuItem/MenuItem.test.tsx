import { render } from 'utils/test-utils'

import MenuItem from '.'

describe('<MenuItem />', () => {
  it('should render component', () => {
    const { container } = render(<MenuItem id="1" name="category 1" />)

    expect(container).toBeInTheDocument()
  })
})
