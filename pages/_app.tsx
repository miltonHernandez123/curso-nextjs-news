import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createContext } from 'react'
const themeContext = createContext('dark')


//providers 
export default function App({ Component, pageProps }: AppProps) {
  return(
    <themeContext.Provider value='dark'>
      <Component { ...pageProps}/>
    </themeContext.Provider>
  )
}
