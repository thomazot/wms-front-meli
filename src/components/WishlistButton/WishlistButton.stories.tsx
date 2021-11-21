import { Story, Meta } from '@storybook/react'
import WishlistButton from '.'

import { WishlistButtonProps } from './WishlistButton'

export default {
  title: 'WishlistButton',
  component: WishlistButton
} as Meta

export const Default: Story<WishlistButtonProps> = (args) => (
  <WishlistButton {...args} />
)

Default.args = {
  id: '1'
}
