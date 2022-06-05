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
      h3:{
        fontFamily: "Open Sans",
        [`@media screen and (max-width: 1532px)`]: {
          fontSize: "2.85rem"
        }, [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.75rem"
        }, [`@media screen and (max-width: 900px)`]: {
          fontSize: "1.625rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.6rem"
        },
        fontWeight: 600
      },
      h4: {
        fontFamily: "Open Sans",
        [`@media screen and (max-width: 1532px)`]: {
          fontSize: "1.95rem"
        }, [`@media screen and (max-width: 1200px)`]: {
          fontSize: "1.75rem"
        }, [`@media screen and (max-width: 900px)`]: {
          fontSize: "1.525rem"
        }, [`@media screen and (max-width: 600px)`]: {
          fontSize: "1.4rem"
        },
        fontWeight: 600
      }
    }

  })
  return <ThemeProvider theme={theme}><Layout><Component {...pageProps} /></Layout></ThemeProvider>
}

export default MyApp
