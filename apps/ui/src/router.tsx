import React, { lazy } from 'react';
import { createBrowserRouter, Link } from 'react-router-dom';

const Button = lazy(() => import('./components/Button'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div
        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1em', paddingBottom: '2rem' }}
        data-boundary-page="checkout">
        <h1>UI Remote - Tractor Sample 2.0</h1>
        <h2>Exported Components</h2>
        <div style={{display: "flex", gap: '1rem'}}>
          <Button variant="primary">
            add to basket
          </Button>
          <Button variant="secondary">
            add to basket
          </Button>
          <Button variant="primary" disabled>
            Place order
          </Button>
        </div>
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
