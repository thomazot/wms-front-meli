import { Story, Meta } from '@storybook/react'
import Rating from '.'
import { RatingProps } from './Rating'

export default {
  title: 'Rating',
  component: Rating
} as Meta

export const Default: Story<RatingProps> = (args) => <Rating {...args} />
