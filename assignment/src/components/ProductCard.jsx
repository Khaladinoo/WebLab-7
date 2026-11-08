import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

export default function ProductCard({ product }) {
const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {
e.preventDefault(); // Prevent navigating if wrapped inside a link container
    addItem(product);
  };

  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <img 
          src={product.thumbnail} 
          alt={product.title} 
          style={{ width: '100%', height: '150px', objectFit: 'contain', marginBottom: '0.5rem' }} 
        />
        <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>{product.title}</h3>
        <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>${product.price}</p>
        <p style={{ fontSize: '0.85rem', color: '#7f8c8d' }}>Category: {product.category}</p>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', padding: '0.4rem 0.8rem', border: '1px solid #3498db', color: '#3498db', borderRadius: '4px' }}>
          View Details
        </Link>
        <button onClick={handleAddToCart} style={{ padding: '0.4rem 0.8rem', backgroundColor: '#2ecc71', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}