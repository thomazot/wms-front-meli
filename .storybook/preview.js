import * as NextImage from 'next/image'
import { RouterContext } from 'next/dist/shared/lib/router-context'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'
import { WishlistProvider } from '../src/hooks/use-wishlist'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <GlobalStyles />
        <Story />
      </WishlistProvider>
    </ThemeProvider>
  )
]

const OriginalNextImage = NextImage.default

// eslint-disable-next-line no-import-assign
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (/** @type {import('next/image').ImageProps} */ props) => {
    if (typeof props.src === 'string') {
      return (
        <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
      )
    } else {
      return <OriginalNextImage {...props} unoptimized />
    }
  }
})
