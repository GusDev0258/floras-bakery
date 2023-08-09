import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from '../view/components/Home'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produtos" element={<div>Produtos</div>} />
    </Routes>
  )
}

export default Router