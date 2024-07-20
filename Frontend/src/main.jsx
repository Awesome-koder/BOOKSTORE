import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AuthProvider from "./context/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <div className='dark:bg-cyan-950 dark:text-stone-400'>
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
)
setTimeout(() => {
  const HomeBackground = document.querySelector('.HomeBackground');
  HomeBackground.classList.add("active");
}, 200);