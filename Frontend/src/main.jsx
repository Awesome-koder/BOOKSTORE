import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <div className='dark:bg-cyan-950 dark:text-stone-400'>
      <App />
    </div>
  </BrowserRouter>
)
// setTimeout(() => {
//   const HomeBackground = document.querySelector('.HomeBackground');
// }, 200);