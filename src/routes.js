import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact'; 
import About from './pages/About'; 
import Portfolio from './pages/Portfolio';
import CvInteractif from './pages/CvInteractif';
import PageWrapper from './components/PageWrapper'; 

const NotFound = () => <h2>404 Page Not Found</h2>;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/portfolio" element={<PageWrapper><Portfolio /></PageWrapper>} />
      <Route path="/cv-interactif" element={<PageWrapper><CvInteractif /></PageWrapper>} />
      
      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
