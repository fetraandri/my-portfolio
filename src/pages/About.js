import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/About.css';
import Profilpro from '../pages/styles/profil/Profilpro.jpg';
import DownloadCV from '../components/DownloadCV';


const SkillBar = ({ skill, percentage }) => {
  const props = useSpring({
    from: { width: '0%' },
    to: { width: `${percentage}%` },
    config: { duration: 1000 }
  });

  return (
    <div className="skill">
      <h3 className="progress-title">{skill}</h3>
      <div className="progress">
        <animated.div className="progress-bar" style={props}>
          <div className="progress-value">{percentage}%</div>
        </animated.div>
      </div>
    </div>
  );
};

function About() {
  return (
    <div className="background-about">
      <div className="about-container">
        <div className="profile-section">
          <img src={Profilpro} alt="Profile" className="profile-image" />
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

      <div className="skills">
        <h2 className="skills-title">Skills</h2>
        <SkillBar skill="JavaScript" percentage={90} />
        <SkillBar skill="React" percentage={85} />
        <SkillBar skill="React Native" percentage={80} />
        <SkillBar skill="Java Spring Boot" percentage={75} />
      </div>
      <DownloadCV />
    </div>
  );
}

export default About;
