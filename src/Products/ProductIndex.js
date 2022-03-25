import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
const ProductIndex = () => {
  const [products, setProducts] = useState(null)

  useEffect(async () => {
    const response = await fetch(`/api/products`)
    const items = await response.json()
    setProducts(items)
  }, [])

  if (products === null) {
    return <div>Loading ....</div>
  }
  return (
    <div>
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  )
}

export default ProductIndex
