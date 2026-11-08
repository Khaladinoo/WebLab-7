import { useCallback, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchProduct } from '../api/productsApi';
import useCartStore from '../store/cartStore';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((state) => state.addItem);
  const [addedMessage, setAddedMessage] = useState(false);

  const fetchSingleProduct = useCallback(
    (signal) => fetchProduct(id, signal),
    [id]
  );

  const { data: product, loading, error } = useFetch(fetchSingleProduct, [fetchSingleProduct]);

  const handleAddToCart = () => {
    if (product) {
      addItem(product);
      setAddedMessage(true);
      setTimeout(() => setAddedMessage(false), 2000);
    }
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '3rem' }}>Loading product details...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem', color: '#e74c3c' }}>
        <h3>Error loading product</h3>
        <p>{error}</p>
        <button
          onClick={() => navigate('/products')}
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          &larr; Back to Products
        </button>
      </div>
    );
  }

  if (!product) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h3>Product not found</h3>
        <button
          onClick={() => navigate('/products')}
          style={{
            marginTop: '1rem',
            padding: '0.6rem 1.2rem',
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          &larr; Back to Products
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <button
        onClick={() => navigate('/products')}
        style={{
          marginBottom: '1.5rem',
          padding: '0.5rem 1rem',
          backgroundColor: 'transparent',
          border: '1px solid #ccc',
          borderRadius: '4px',
          cursor: 'pointer',
          color: 'inherit',
        }}
      >
        &larr; Back to Products
      </button>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          border: '1px solid #ddd',
          borderRadius: '8px',
          padding: '1.5rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            style={{
              maxWidth: '100%',
              maxHeight: '320px',
              objectFit: 'contain',
              borderRadius: '6px',
            }}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <div>
            <span
              style={{
                display: 'inline-block',
                textTransform: 'uppercase',
                fontSize: '0.75rem',
                letterSpacing: '1px',
                color: '#7f8c8d',
                marginBottom: '0.5rem',
              }}
            >
              {product.category}
            </span>
            <h2 style={{ margin: '0 0 0.5rem 0' }}>{product.title}</h2>
            {product.brand && (
              <p style={{ margin: '0 0 0.5rem 0', color: '#7f8c8d' }}>
                Brand: <strong>{product.brand}</strong>
              </p>
            )}
            <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2ecc71', margin: '0.5rem 0' }}>
              ${product.price}
            </p>
            {product.rating && (
              <p style={{ margin: '0 0 1rem 0' }}>⭐ {product.rating} / 5</p>
            )}
            <p style={{ lineHeight: '1.6', color: 'inherit' }}>{product.description}</p>
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <button
              onClick={handleAddToCart}
              style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#2ecc71',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {addedMessage ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
