import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { login as loginApi } from '../api/authApi';

export default function Login() {
const navigate = useNavigate();
  const location = useLocation();
  const { login: setAuthUser } = useAuth();
}