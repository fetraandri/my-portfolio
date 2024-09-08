import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import About from './pages/About'; 
import Portfolio from './pages/Portfolio';
import CvInteractif from './pages/CvInteractif';

const NotFound = () => <h2>404 Page Not Found</h2>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/cv-interactif" element={<CvInteractif />} />

      
      {/*  */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
