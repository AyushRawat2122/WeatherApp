import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Pages/Home.jsx';
import Astro from './Pages/Astro.jsx';
import Today from './Pages/Today.jsx';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <Router>
    <NextUIProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="Astrology" element={<Astro />} />
          <Route path="SportsEvent" element={<Today />} />
        </Route>
      </Routes>
    </NextUIProvider>
  </Router>
);

