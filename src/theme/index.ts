import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    background: {
      default: '#FFFFFF',
      paper: '#F8F9FA',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          padding: 0,
          margin: 0,
          boxSizing: 'border-box',
          '& ::-webkit-scrollbar': {
            width: '10px',
            height: '6px',
            borderRadius: '8px',
          },
          '& ::-webkit-scrollbar-track': {
            backgroundColor: '#e0e0e0',
            borderRadius: '8px',
          },
          '& ::-webkit-scrollbar-thumb': {
            backgroundColor: '#17305A',
            borderRadius: '8px',
          },
        },
      },
    },
  },
})
