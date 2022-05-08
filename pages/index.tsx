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
      <header className="">
        <div className="grid h-[70vh] place-content-center bg-neutral-900">
          <div className="flex flex-col items-center gap-8">
            <h1 className="heading">
              Совершенно новый поход к скриптам в играх.
            </h1>
            <div className="flex gap-4">
              <button className="button">Скачать</button>
              <button className="button">Исходный код</button>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section className="flex justify-center bg-neutral-900 pb-24">
          <img
            src="https://raw.githubusercontent.com/pe3ep/ion-app/main/resources/img/image.png"
            alt="Скриншот программы"
            className="rounded-lg shadow-2xl shadow-blue-900 outline-1 outline-neutral-700"
          />
        </section>
        <section className="bg-neutral-900">
          <div className="mx-auto max-w-6xl">
            <div className="flex items-center justify-between">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                />
              </svg>
              <h1 className="heading">Прозрачность</h1>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Home
