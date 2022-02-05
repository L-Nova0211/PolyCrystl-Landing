import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeContextProvider } from 'contexts/ThemeContext'

const Providers: React.FC = ({ children }) => {
  return (
    <HelmetProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </HelmetProvider>
  )
}

export default Providers
