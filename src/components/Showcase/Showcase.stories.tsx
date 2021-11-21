import { Story, Meta } from '@storybook/react'
import Showcase from '.'

import { ShowcaseProps } from './Showcase'
import ShowcaseItems from './Showcase.mock'

export default {
  title: 'Showcase',
  component: Showcase
} as Meta

export const Default: Story<ShowcaseProps> = (args) => <Showcase {...args} />

Default.args = {
  title: 'Showcase title',
  items: ShowcaseItems
}
