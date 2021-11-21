import { render } from 'utils/test-utils'

import Card from '.'
import CardItem from './Card.mock'

describe('<Card />', () => {
  it('should render component', () => {
    const { container } = render(<Card {...CardItem} />)

    expect(container).toBeInTheDocument()
  })
})
