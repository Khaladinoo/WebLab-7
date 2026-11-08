import React, { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchProduct } from '../api/productsApi';
import useCartStore from '../store/cartStore';

export default function ProductDetail() {
const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const fetchSingleProduct = useCallback(
    (signal) => fetchProduct(id, signal),
    [id]
  );

  if (items.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h2>Your Cart is Empty 🛒</h2>
        <p style={{ color: '#666', margin: '1rem 0' }}>Looks like you haven't added any products to your cart yet.</p>
        <Link to="/products" style={{ padding: '0.6rem 1.2rem', backgroundColor: '#3498db', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h2>Shopping Cart</h2>

      {/* Cart Items List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: '1px solid #ddd',
              padding: '1rem',
              borderRadius: '6px'
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 0.3rem 0' }}>{item.title}</h4>
              <p style={{ margin: 0, color: '#666' }}>Price: ${item.price} each</p>
            </div>

            {/* Quantity Controls */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button onClick={() => setQuantity(item.id, item.quantity - 1)} style={{ padding: '0.2rem 0.5rem' }}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => setQuantity(item.id, item.quantity + 1)} style={{ padding: '0.2rem 0.5rem' }}>+</button>
            </div>

            {/* Item Total & Remove Action */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <strong>${(item.price * item.quantity).toFixed(2)}</strong>
              <button onClick={() => removeItem(item.id)} style={{ backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '0.4rem 0.8rem', borderRadius: '4px', cursor: 'pointer' }}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary Header */}
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '2px solid #ccc', paddingTop: '1rem' }}>
        <button onClick={clear} style={{ padding: '0.5rem 1rem', backgroundColor: '#95a5a6', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Clear Cart
        </button>

        <div style={{ textAlign: 'right' }}>
          <h3>Total: ${totalPrice.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
