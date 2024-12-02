import React from 'react';
import './styles/CvInteractif.css';

function CvInteractif() {
  return (
    <div className="cv-page">
      <h1>Mon CV Interactif</h1>
      <iframe
        src="https://drive.google.com/file/d/1CvVxlhWtO0oOAr-1lqYL41eWJMHfLTqI/preview"
        title="CV de Fetra"
        width="100%"
        height="800px"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default CvInteractif;
