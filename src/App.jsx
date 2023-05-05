import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Evento from './pages/Evento'
import Contacto from './pages/Contacto'
import PageTorneos from './pages/PageTorneos'
import PageTorneo from './pages/PageTorneo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/torneos' element={<PageTorneos />} />
      <Route path='/torneos/:id' element={<PageTorneo />} />
      <Route path='/eventos' element={<Evento />} />
      <Route path='/contacto' element={<Contacto />} />
    </Routes>
  )
}

export default App