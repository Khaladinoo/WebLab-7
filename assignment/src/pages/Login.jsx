import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as loginApi } from '../api/authApi';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login: setAuthUser } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const from = location.state?.from?.pathname || '/';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
    const userObj = await loginApi(username, password);

    setAuthUser(userObj);

    navigate(from, { replace: true });

    } catch (err) {

    setError(err.message || 'Authentication failed. Please check credentials.');

    } finally {

    setLoading(false);

        }      
    }
}