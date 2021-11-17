import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MercadoLivre WMS Front End Test</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#06092B" />
        <meta name="description" content="MercadoLivre WMS Front End Test" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
