import { useState } from 'react'
import ProductForm from './components/ProductForm'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList';
import Home from './pages/Home';
import Products from './pages/Products';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
    <div className="flex flex-col lg:flex-row gap-10 h-full">
      <Navbar />
      <div className='flex-1 overflow-y-auto'>
        <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/products' element={<Products />} />
        <Route path='/create' element={<ProductForm />} />
        <Route path='/edit/:id' element={<ProductForm />} />
      </Routes>
      </div>
    </div>
    <Toaster />
    </>
  )
}

export default App
