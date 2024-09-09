// components/Loader.js
import React from 'react';
import ReactLoading from 'react-loading';
import './styles/Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <ReactLoading type="spinningBubbles" color="#3498db" height={100} width={100} />
      <p>Chargement en cours...</p>
    </div>
  );
};

export default Loader;
