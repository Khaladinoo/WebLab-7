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
}