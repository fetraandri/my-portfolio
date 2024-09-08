import React from 'react';
import './styles/CvInteractif.css';

function CvInteractif() {
  return (
    <div className="cv-page">
      <h1>Mon CV Interactif</h1>
      <iframe
        src="https://drive.google.com/file/d/12Qfr7of9UKfu-KQt-oMHYHaSe-Rs8siU/preview"
        title="CV de Fetra"
        width="100%"
        height="800px"
        allow="autoplay"
      ></iframe>
    </div>
  );
}

export default CvInteractif;
