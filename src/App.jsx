import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import { useEffect } from "react"
import './App.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  
// Dark Mode State

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light"
  }, [isDarkMode])

// Cart State

  const addToCart = (product) => {
    if (!cartItems.find(item => item.id === product.id)) {
      setCartItems(prev => [...prev, product])
    }
  }

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId))
  }

  // TODO: Implement state for category filtering

  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value)
  }


  const products = [
    {id: 1, name: 'Apple', category: 'Fruits', inStock: true },
    {id: 3, name: 'Banana', category: 'Fruits', inStock: true },
    {id: 2, name: 'Milk', category: 'Dairy', inStock: true },
    {id: 4, name: 'Cheese', category: 'Dairy', inStock: true },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)


  return (
    <div>
      <h1>🛒 Shopping App</h1>

      {/* Dark Mode Toggle */}
      <DarkModeToggle
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
      />

      {/* Category Filter */}
      <div style={{ margin: '1rem 0' }}>
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="Fruits">Fruits</option>
          <option value="Dairy">Dairy</option>
        </select>
      </div>
      
      {/* Product List */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/* Cart */}
      <Cart cartItems={cartItems} />

      {/* Remove All Items */}
      {cartItems.length > 0 && (
        <button onClick={() => setCartItems([])} style={{ marginTop: '1rem' }}>
          Clear Cart
        </button>
      )}
    </div>
  )
}

export default App
