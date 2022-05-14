import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Button from '../components/Button'
import AccentButton from '../components/AccentButton'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      <Head>
        <title>Главная</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="grid min-h-[calc(100vh-136px)] place-items-center bg-zinc-900 px-3 pt-32 pb-24 lg:pt-64 lg:pb-48">
        <div className="flex flex-col items-center gap-6">
          <Image src="/logo.svg" height="124" width="124" />

          <h1 className="heading text-center text-4xl">
            Новый подход к скриптам в играх.
          </h1>
          <div className="flex flex-col items-center justify-center gap-2">
            <Link href="/download">
              <a>
                <Button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Скачать
                </Button>
              </a>
            </Link>
            <a href="https://github.com/pe3ep/ion-app">
              <AccentButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Исходный код
              </AccentButton>
            </a>
          </div>
        </div>
      </main>
      <div className="h-12"></div>
    </>
  )
}

export default Home
