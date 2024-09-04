// src/routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Ajoutez d'autres routes ici */}
    </Routes>
  );
};

export default AppRoutes;
