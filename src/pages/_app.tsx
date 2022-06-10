import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useState, useEffect, useCallback, MouseEventHandler } from 'react'

import { theme, darkTheme } from '../theme'
import { ThemeTypes } from '@/@types/view'

const getActiveTheme = (themeMode: ThemeTypes) => (themeMode === 'light' ? theme : darkTheme)

function MyApp({ Component, pageProps }: AppProps) {
  const [activeTheme, setActiveTheme] = useState(theme)
  const [selectedTheme, setSelectedTheme] = useState<'light' | 'dark'>('light')

  const toggleTheme: MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    const desiredTheme = selectedTheme === 'light' ? 'dark' : 'light'
    setSelectedTheme(desiredTheme)
    localStorage.setItem('theme', desiredTheme)
  }, [selectedTheme])

  useEffect(() => {
    const cacheTheme = localStorage.getItem('theme') as ThemeTypes
    setSelectedTheme((curTheme) => (cacheTheme ? cacheTheme : curTheme))
  }, [])

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme))
  }, [selectedTheme])

  return (
    <>
      <Head>
        <title>My Bio</title>
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={activeTheme}>
        <Component {...pageProps} toggleTheme={toggleTheme} currentTheme={selectedTheme} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
