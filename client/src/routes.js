import { createBrowserRouter, Navigate, createRoutesFromElements, Route } from 'react-router-dom';
import Dashboard from 'scenes/dashboard';
import Layout from 'scenes/layout';
import Products from 'scenes/products';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index={true} element={<Navigate to='/dashboard' replace />} />
      <Route path='dashboard' element={<Dashboard />} />
      <Route path='products' element={<Products />} />
    </Route>
  )
);

export default router;
