import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
