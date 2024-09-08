import React from 'react';
import './styles/DownloadCV.css';

function DownloadCV() {
  const handleDownload = () => {
    window.open('https://drive.google.com/uc?export=download&id=12Qfr7of9UKfu-KQt-oMHYHaSe-Rs8siU', '_blank');
  };

  return (
    <div className="cv-section">
      <h3>Intéressé par mon profil ?</h3>
      <p>Vous pouvez télécharger mon CV ou accéder à une version interactive en ligne.</p>
      <div className="cv-buttons">
        <button onClick={handleDownload} className="cv-button">
          Télécharger le CV
        </button>
        <a href="/cv-interactif" className="cv-button-link">
          CV Interactif
        </a>
      </div>
    </div>
  );
}

export default DownloadCV;
