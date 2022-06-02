import { createTheme, ThemeProvider } from '@mui/material';
import Layout from '../components/layout/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = createTheme({

    palette: {

    },
    typography: {
      fontFamily: "Open Sans, sans serif",
      
    }

  })
  return <ThemeProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ThemeProvider>
}

export default MyApp
