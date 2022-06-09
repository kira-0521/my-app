import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    common: {
      black: '#1f2d37',
      white: '#fff',
    },
    primary: {
      main: '#2196f3',
      light: '#90cbf9',
      dark: '#145a92',
    },
    secondary: {
      main: '#f32142',
      light: '#f990a1',
      dark: '#7a1121',
    },
    grey: {
      50: '#f4f5f6',
      100: '#ebeeef',
      200: '#dde1e4',
      300: '#ced5d9',
      400: '#c0c8ce',
      500: '#acb7be',
      600: '#98a5ae',
      700: '#7e8f9a',
      800: '#70828f',
      900: '#63727e',
    },
    text: {
      primary: '#1f2d37',
      secondary: '#8f969b',
      disabled: '#c7cbcd',
    },
    divider: '#e3e5e6',
  },
})
