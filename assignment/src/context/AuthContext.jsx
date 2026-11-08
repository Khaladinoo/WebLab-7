import React, { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext(null);

const initialAuthState = {
  user: null,
};

function authReducer(state, action) {
  switch (action.type) {
    case 'LOGGED_IN':
      return { ...state, user: action.payload };
    case 'LOGGED_OUT':
      return { ...state, user: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  const login = (userData) => {
    dispatch({ type: 'LOGGED_IN', payload: userData });
  };

  const logout = () => {
    dispatch({ type: 'LOGGED_OUT' });
  };

  return (
    <AuthContext.Provider value={{ user: state.user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}