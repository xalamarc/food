import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import Recipe from './pages/Recipe'
import Breakfast from './pages/Breakfast'
import Lunch from './pages/Lunch'
import Dessert from './pages/Dessert'
import Dinner from './pages/Dinner'

import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/recipe' element={<Recipe />} />
        <Route path='/breakfast' element={<Breakfast />} />
        <Route path='/lunch' element={<Lunch />} />
        <Route path='/dessert' element={<Dessert />} />
        <Route path='/dinner' element={<Dinner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
