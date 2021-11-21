import { Story, Meta } from '@storybook/react'
import Card from '.'

import { CardProps } from './Card'
import CardItemMock from './Card.mock'

export default {
  title: 'Card',
  component: Card
} as Meta

export const Default: Story<CardProps> = (args) => <Card {...args} />

Default.args = CardItemMock
