import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
