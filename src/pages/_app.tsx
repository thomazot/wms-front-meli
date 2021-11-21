import { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { WishlistProvider } from 'hooks/use-wishlist'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <WishlistProvider>
        <Head>
          <title>MercadoLivre WMS Front End Test</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#06092B" />
          <meta name="description" content="MercadoLivre WMS Front End Test" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </WishlistProvider>
    </ThemeProvider>
  )
}

export default App
