import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './main.css'
import ScrollToTop from './components/Scroller'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>,
  )



