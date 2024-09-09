import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // 

const PageWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return <Loader />; 
  }

  return <>{children}</>; 
};

export default PageWrapper;
