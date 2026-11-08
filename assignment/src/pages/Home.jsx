import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
      <h1>Welcome to MiniShop 🛒</h1>
      <p style={{ fontSize: '1.2rem', color: '#555', maxWidth: '600px', margin: '1rem auto' }}>
        Discover our catalog of products fetched live from the DummyJSON API. Browse categories, filter items, and manage your cart seamlessly.
      </p>

      <div style={{ marginTop: '2rem' }}>
        <Link 
          to="/products" 
          style={{
            padding: '0.8rem 1.6rem',
            backgroundColor: '#3498db',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6rem',
            fontSize: '1rem',
            fontWeight: 'bold'
          }}
        >
          Explore Product Catalogue &rarr;
        </Link>
      </div>
    </div>
  );
}