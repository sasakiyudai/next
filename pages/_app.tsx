import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/layout/layout'
import {Provider} from 'next-auth/client'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Head>
          <meta name="viewport" content="width-device-width, initial-scale=1" />
        </Head>
      <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
