import { Story, Meta } from '@storybook/react'
import MenuItem from '.'

import { MenuItemProps } from './MenuItem'

export default {
  title: 'MenuItem',
  component: MenuItem
} as Meta

export const Default: Story<MenuItemProps> = (args) => (
  <ul>
    <MenuItem {...args} />
  </ul>
)

Default.args = {
  id: '1',
  name: 'Categoria 1'
}
