import React from 'react';
import { useSpring, animated } from 'react-spring';
import './styles/About.css';
import LargeImage from '../pages/styles/profil/profilepro.png'; 
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
      <div className="about-content">
        <div className="image-section">
          <img src={LargeImage} alt="Large" className="large-image" />
          <div className="author-info">
            <h2>Fetra ANDRIAMAMONJY</h2>
            <p>hei.fetra@gmail.com</p>
          </div>
        </div>
        <div className="text-section">
          <h1>À propos de moi</h1>
          <p>
          J'ai été étudiant à l'Institut HEI (Haute École d'Informatique), où j'ai finalisé ma soutenance en spécialisation informatique, acquérant une expertise solide dans plusieurs domaines technologiques.
Mon parcours académique m'a permis de maîtriser les principes fondamentaux du développement logiciel, ainsi que d'acquérir des compétences avancées en programmation.
Grâce à des projets concrets, j'ai pu appliquer ces connaissances théoriques dans un cadre professionnel, renforçant ainsi ma capacité à résoudre des problématiques complexes.
Mon expérience inclut également une familiarité avec les technologies émergentes, notamment en développement web et mobile. Avec cette formation et ma passion pour l'innovation, je me prépare activement à relever les défis de l'industrie informatique.
          </p>
          <div className="skills">
            <h2 className="skills-title">Skills</h2>
            <SkillBar skill="JavaScript" percentage={90} />
            <SkillBar skill="React" percentage={85} />
            <SkillBar skill="React Native" percentage={80} />
            <SkillBar skill="Java Spring Boot" percentage={75} />
          </div>
          <DownloadCV />
        </div>
      </div>
    </div>
  );
}

export default About;
