import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
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
}