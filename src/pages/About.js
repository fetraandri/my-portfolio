import React from 'react';
import './styles/About.css';
import profileImage from '../pages/styles/profil/profile.jpg';

function About() {
  return (
    <div className="background-about">
      <div className="about-container">
        <div className="profile-section">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p className="profile-name">Fetra ANDRIAMAMONJY</p>
          <p className="email">hei.fetra@gmail.com</p>
        </div>
        <div className="text-section">
          <h1>À propos de moi</h1>
          <p>
            Je suis étudiant en 3ème année chez HEI, où j'ai acquis des connaissances approfondies en INFORMATIQUE. Mes études m'ont fourni une solide base en programmation, que j'ai appliquée dans ma carrière professionnelle.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
