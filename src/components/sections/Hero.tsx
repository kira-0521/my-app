import { Box, Typography, Stack, Button } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Hero = () => {
  return (
    <Box
      sx={{
        padding: '40px 0',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: { lg: 'row', xs: 'column' },
        alignItems: { xs: 'center' },
      }}
    >
      <Stack spacing={2} sx={{ width: '50%', whiteSpace: 'now-wrap', justifyContent: 'center' }}>
        <span style={{ color: '#63727e' }}>Welcome My Portofolio</span>
        <Typography variant='h2' sx={{ fontSize: '2.75rem' }}>
          Hello, I&apos;m Kira Tanaka <br />
          <span style={{ color: '#2196f3' }}>Web Frontend</span> Engineer
        </Typography>
        <Typography>
          sentencesentensesentencesentensesentencesentensesentencesentense
          sentencesentensesentencesentensesentencesentensesentencesentense
          sentencesentensesentencesentensesentencesentensesentencesentense
        </Typography>
        <Stack
          direction='row'
          spacing={1}
          sx={{ justifyContent: { xs: 'center', lg: 'flex-start' } }}
        >
          <Button sx={{ backgroundColor: 'primary.main', color: 'text.primary', paddingX: '2rem' }}>
            ボタン
          </Button>
          <Button
            sx={{
              border: '1px solid',
              borderColor: 'text.primary',
              color: 'text.primary',
              paddingX: '2rem',
            }}
          >
            ボタン２
          </Button>
        </Stack>
      </Stack>
      <Box sx={{ marginTop: { xs: '3rem' } }}>
        <Image
          src='/images/photo.JPG'
          width='500px'
          height='333px'
          alt='My name is Kira Tanaka'
          style={{ borderRadius: '50px' }}
        />
      </Box>
    </Box>
  )
}
