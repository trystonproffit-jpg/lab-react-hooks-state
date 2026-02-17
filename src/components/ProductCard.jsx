import React from 'react'
import styles from '../styles/ProductCard.module.css'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      style={{
        border: '1px solid gray',
        padding: '0.5rem',
        marginBottom: '0.5rem',
        opacity: product.inStock ? 1 : 0.5,
      }}
    >
      <strong>{product.name}</strong> ({product.category}) - {product.price}
      <button
        style={{ marginLeft: '1rem '}}
        onClick={() => addToCart(product)}
        disabled={!product.inStock}
        data-testid={'product-' + product.id}
      >
        Add To Cart
      </button>
      {!product.inStock && <span style={{ marginLeft: '0.5rem' }}>Out of Stock</span>}
    </div>
  )
}

export default ProductCard
