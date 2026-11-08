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



}
