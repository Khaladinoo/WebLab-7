import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
  const { data: products, loading, error } = useFetch(fetchProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('q') || '';
  const selectedCategory = searchParams.get('category') || '';

  const updateSearchParam = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const categories = React.useMemo(() => {
    if (!products) return [];
    return Array.from(new Set(products.map((p) => p.category)));
  }, [products]);

  const filteredProducts = React.useMemo(() => {
    if (!products) return [];
    return products.filter((product) => {
      const matchesTitle = product.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      return matchesTitle && matchesCategory;
    });
  }, [products, searchQuery, selectedCategory]);

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '2rem' }}>Loading products catalogue...</div>;
  }

  if (error) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'red' }}>
        <h3>Error loading products</h3>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Product Catalogue</h2>

      {/* Filter Bar Controls */}
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
        {/* Title Search Input */}
        <input
          type="text"
          placeholder="Search products by title..."
          value={searchQuery}
          onChange={(e) => updateSearchParam('q', e.target.value)}
          style={{ padding: '0.5rem', flex: '1', minWidth: '200px' }}
        />

        {/* Category Dropdown Selector */}
        <select
          value={selectedCategory}
          onChange={(e) => updateSearchParam('category', e.target.value)}
          style={{ padding: '0.5rem', minWidth: '150px' }}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Empty Filter Results Handling */}
      {filteredProducts.length === 0 ? (
        <div style={{ padding: '2rem', textAlign: 'center', color: '#666' }}>
          No products match your search criteria.
        </div>
      ) : (
        /* Product Cards Grid Layout */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.5rem' }}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
