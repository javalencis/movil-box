import React from 'react'
import ReactDOM from 'react-dom/client'
import {  AppProvider } from './context/AppContext'
import { App } from './pages/App'
import './styles/global.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>

  </React.StrictMode>
)
