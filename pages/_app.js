import { createTheme, ThemeProvider } from '@mui/material';
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({

    palette: {
      primary:{
        main:"#07080A"
      },
      secondary:{
        main:"#AEBAC9"
      }
    },
    typography: {
      fontFamily: "Open Sans, sans serif",
      
    }

  })
  return <ThemeProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ThemeProvider>
}

export default MyApp
