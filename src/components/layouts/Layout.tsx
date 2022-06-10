import { Container } from '@mui/material'
import { ReactNode, MouseEventHandler } from 'react'

import { PageHeader } from './PageHeader'
import { ThemeTypes } from '@/@types/view'

type Props = {
  children: ReactNode
  toggleTheme: MouseEventHandler<HTMLButtonElement>
  currentTheme: ThemeTypes
}

export default function Layout({ children, toggleTheme, currentTheme }: Props) {
  return (
    <>
      <PageHeader toggleTheme={toggleTheme} currentTheme={currentTheme} />
      <Container maxWidth='xl' sx={{ paddingTop: '68.5px' }}>
        {children}
      </Container>
    </>
  )
}
