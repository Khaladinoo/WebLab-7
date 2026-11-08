import React from 'react';
import { Link } from 'react-router-dom';
import useCartStore from '../store/cartStore';

export default function ProductCard({ product }) {
const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (e) => {

  }
}