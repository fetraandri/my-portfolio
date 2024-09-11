import React from 'react';
import './styles/Footer.css'; // Ajoute le fichier de style

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contactez-moi</h4>
          <p>Email: hei.fetra@gmail.com</p>
          <p>Téléphone: +261 38 26 612 72<br/>
                        +261 32 40 788 33
          </p>
        </div>

        <div className="footer-section">
          <h4>Suivez-moi</h4>
          <div className="social-icon">
            <a href="https://github.com/fetra-tanjona" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/fetra-tanjona" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://facebook.com/fetra.tanjona" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://instagram.com/fetra_tanjona" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Localisation</h4>
          <p>Antananarivo, Madagascar , </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Fetra Tanjona. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
