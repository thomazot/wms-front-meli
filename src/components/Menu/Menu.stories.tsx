import { Story, Meta } from '@storybook/react'
import Menu, { MenuProps } from './Menu'
import items from './Menu.mock'

export default {
  title: 'Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<MenuProps> = (args) => <Menu {...args} />

Default.args = {
  items
}
