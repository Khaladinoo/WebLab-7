import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem' }}>
      <h1 style={{ fontSize: '4rem', margin: 0, color: '#e74c3c' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '2rem' }}>
        The URL path you requested does not match any valid view in this application.
      </p>

      <Link
        to="/"
        style={{
          padding: '0.6rem 1.2rem',
          backgroundColor: '#3498db',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '4px'
        }}
      >
        &larr; Return to Home Page
      </Link>
    </div>
  );
}