import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersContext } from './context/Filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FiltersContext.Provider>
    <App />
  </FiltersContext.Provider>
)
