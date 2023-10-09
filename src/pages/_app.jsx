import Head from 'next/head';
import Layout from '@/layout/layout'
import style from '@/styles/MainStyle.css';

export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <meta charSet="UTF-8"/>
      <meta name="author" content="Florian PALVADEAU"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    </Head>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
    </>
  )
}