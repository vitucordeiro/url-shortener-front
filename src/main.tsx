import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

import './index.css'

import App from './App.tsx'
import Share from './pages/Share.tsx'

// src/main.jsx ou src/index.jsx

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/share" element={<Share />} />

    </Routes>
  </BrowserRouter>
)
