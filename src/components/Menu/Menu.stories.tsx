import { Story, Meta } from '@storybook/react'
import Menu from '.'
import items from './Menu.mock'

export default {
  title: 'Menu',
  component: Menu
} as Meta

export const Default: Story = () => <Menu items={items} />
