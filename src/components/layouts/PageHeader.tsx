import Brightness5Icon from '@mui/icons-material/Brightness5'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt'
import { AppBar, Box, Typography, Toolbar, Button, Stack } from '@mui/material'
import React, { MouseEventHandler, FC, useState } from 'react'

import { ThemeTypes } from '@/@types/view'

type Props = {
  toggleTheme: MouseEventHandler<HTMLButtonElement>
  currentTheme: ThemeTypes
}

const pages = ['Posts', 'Active', 'Send Me']

export const PageHeader: FC<Props> = ({ toggleTheme, currentTheme }: Props) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <AppBar position='fixed' sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Box maxWidth='xl'>
        <Toolbar sx={{ paddingX: { md: '48px' }, justifyContent: 'space-between' }}>
          <Stack
            spacing={1}
            direction={'row'}
            sx={{
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}
          >
            <ElectricBoltIcon />
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/'
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'text.primary',
                textDecoration: 'none',
              }}
            >
              Bio
            </Typography>
          </Stack>

          <Box sx={{ display: 'flex' }}>
            <Box
              sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={
                    page === 'Send Me'
                      ? {
                          my: 2,
                          ml: 1,
                          color: 'white',
                          display: 'block',
                          backgroundColor: 'primary.main',
                        }
                      : { my: 2, color: 'text.primary', display: 'block' }
                  }
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button onClick={toggleTheme} sx={{ justifyContent: 'flex-end' }}>
              {currentTheme === 'light' ? (
                <Brightness5Icon sx={{ color: '#f37e21' }} />
              ) : (
                <DarkModeIcon sx={{ color: '#eaf321' }} />
              )}
            </Button>
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  )
}
