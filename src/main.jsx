import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { ThemeProvider } from 'styled-components'
import { Routes } from './routes/index'
import { defaultTheme } from './styles/themes/default'
import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
