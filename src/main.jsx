import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/App.jsx';
import About from './pages/About.jsx';
import Products from './pages/Products.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
