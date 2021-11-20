import { Story, Meta } from '@storybook/react'
import FormSignIn, { FormSignInProps } from './FormSignIn'

export default {
  title: 'Form/FormSignIn',
  component: FormSignIn,
  argTypes: {
    onSubmit: { action: 'submit' }
  }
} as Meta

export const Default: Story<FormSignInProps> = (args) => (
  <div style={{ maxWidth: 400, margin: 'auto' }}>
    <FormSignIn {...args} />
  </div>
)
