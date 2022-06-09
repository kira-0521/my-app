import { ReactNode } from 'react'

import PageHeader from './PageHeader'
import { Container } from '@mui/material'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <PageHeader />
      <Container maxWidth='lg'>main</Container>
    </>
  )
}
