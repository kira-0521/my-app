import '../styles/globals.css'
import { ThemeProvider } from '@mui/material'

import { theme } from '../theme'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
