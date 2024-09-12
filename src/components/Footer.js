import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contactez-moi</h4>
          <p><FontAwesomeIcon icon={faEnvelope} /> Email: hei.fetra@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> Téléphone: +261 38 26 612 72<br />
                        +261 32 40 788 33</p>
        </div>

        <div className="footer-section">
          <h4>Suivez-moi: <br /></h4>
          <div className="social-icon">
            <a href="https://github.com/fetraandri" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://linkedin.com/in/fetra-tanjona" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/fetra.andriami.77" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com/andriamamonjy_fetrra" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Localisation</h4>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Antananarivo, Madagascar</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Fetra Tanjona. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
