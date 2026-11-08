import React from 'react';
import { useSearchParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { fetchProducts } from '../api/productsApi';
import ProductCard from '../components/ProductCard';

export default function ProductList() {
const [searchParams, setSearchParams] = useSearchParams();
const searchQuery = searchParams.get('q') || '';
  const selectedCategory = searchParams.get('category') || '';
}