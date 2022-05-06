import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <div className="h-screen bg-neutral-900">
          <div className="">
            <h1 className="heading">
              Совершенно новый поход к скриптам в играх.
            </h1>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
