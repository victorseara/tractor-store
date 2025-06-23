import React, { lazy } from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';
import Recommendations from './Recommendations';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', paddingBottom: '2rem' }}
        data-boundary-page="inspire">
        <h1>Inspire Remote - Tractor Sample 2.0</h1>
        <h2>Exported Components</h2>
        <Recommendations skus={['CL-01-GY', 'AU-07-MT']} />
      </div>
    ),
  },
  {
    path: '*',
    element: (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1em',
          paddingBottom: '2rem',
          textAlign: 'center',
        }}
        data-boundary-page="checkout">
        <h1>Checkout Remote - Tractor Sample 2.0</h1>
        <h2>404 - Page not found</h2>
        <h3>The page you are looking for might be on other remote.</h3>
        <Link to="/">Back to Home</Link>
      </div>
    ),
  },
]);
