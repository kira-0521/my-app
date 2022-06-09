import { Container } from '@mui/material'
import { ReactNode } from 'react'

import { PageHeader } from './PageHeader'

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
