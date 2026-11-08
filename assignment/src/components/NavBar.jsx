import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import useCartStore from '../store/cartStore';
import useLocalStorage from '../hooks/useLocalStorage';

export default function NavBar() {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  // Select only the items array from Zustand store to calculate item count
  const items = useCartStore((state) => state.items);
  
  // Compute total item quantity (Derived state)
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Toggle theme mode
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Handle logout action
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <strong>MiniShop</strong>
        
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Cart ({cartItemCount})
        </NavLink>
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <button onClick={toggleTheme}>
          Theme: {theme === 'light' ? 'Light' : 'Dark'}
        </button>

        {user ? (
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span>Welcome, <strong>{user.username}</strong></span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <NavLink to="/login" className={({ isActive }) => (isActive ? 'active-link' : '')}>
            Login
          </NavLink>
        )}
      </div>
    </nav>
  );
}