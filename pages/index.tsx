import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

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

      <div className="grid h-screen place-content-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="heading text-6xl">
            Current theme is:{' '}
            <span className="text-blue-600 dark:text-blue-500">{theme}</span>
          </h1>

          <div className="flex gap-4">
            <button className="button" onClick={() => setTheme('dark')}>
              Set Dark theme
            </button>
            <button className="button-accent" onClick={() => setTheme('light')}>
              Set Light theme
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
