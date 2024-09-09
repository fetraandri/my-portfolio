import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FaJs, FaReact, FaGithub, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/Portfolio.css';
import logoRandev from '../pages/styles/logo/logoRandev.png';
import smartelia from '../pages/styles/logo/smartelia.png'

// Compétences techniques
const skills = [
  {
    title: 'JavaScript',
    description: 'Langage de programmation essentiel pour moi, que j\'utilise pour créer des fonctionnalités interactives et dynamiques.',
    icon: <FaJs size={40} color="#f7df1e" />
  },
  {
    title: 'React',
    description: (
      <>
        Des mini-projets tels que "To Do List" et d'autres applications comme "Sentiment Detector" développées avec Next.js. Voici le lien : 
        <a href="https://github.com/SentimentDetector" target="_blank" rel="noopener noreferrer">Sentiment Detector</a>.
      </>
    ),
    icon: <FaReact size={40} color="#61dafb" />
  },
  {
    title: 'React Native',
    description: (
      <>
        Création et maintenance de l'application mobile "Passion Campagne". Voici le lien du site :
        <a href="https://www.passion-campagne.projets-omega.net/" target="_blank" rel="noopener noreferrer">Passion Campagne</a>.
      </>
    ),
    icon: <FaReact size={40} color="#61dafb" />
  },
  {
    title: 'Java Spring Boot',
    description: (
      <>
        Développement d'un projet "Gestion Employée" en utilisant Spring Boot et Thymeleaf pour la vue. Lien du projet : 
        <a href="https://github.com/fetraandri/appthymleaf" target="_blank" rel="noopener noreferrer">Gestion Employée</a>.
      </>
    ),
    icon: <SiSpringboot size={40} color="#6DB33F" />
  },
  {
    title: 'GitHub',
    description: 'Plateforme que j’utilise pour la gestion de code source, essentielle pour collaborer avec des équipes de développement.',
    icon: <FaGithub size={40} color="black" />
  },
  {
    title: 'Docker',
    description: 'Outil de conteneurisation que j’utilise pour déployer des applications de manière cohérente et portable à travers différents environnements.',
    icon: <FaDocker size={40} color="#2496ed" />
  }
];

// Expériences professionnelles
const experiences = [
  {
    company: 'SMARTELIA',
    logo: smartelia,
    tasks: 'Ma première expérience au niveau de la socièté Smartelia est de collecter et faire de la saisie de données dans Google Sheets en utilisant Google Maps.'
  },
  {
    company: 'R@NDEVTEAM',
    logo: logoRandev,
    tasks: 'STAGE : Mise à jour de l\'SDK de l\'application Android, maintenance du code de l\'application Android en React Native pendant 3 mois, et publication de l\'application sur playstore.  '
  }
];


const Portfolio = () => {
  return (
    <div className="portfolio-background">
      <div className="container mt-5">
        {/* Section Projets */}
        <div className="skills-section">
          <h1 className="text-center mb-4 portfolio-title">Projets</h1>
          <Row>
            {skills.map((skill, index) => (
              <Col md={4} key={index} className="mb-4 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card>
                  <Card.Body className="text-center">
                    <div className="icon mb-3">{skill.icon}</div>
                    <Card.Title>{skill.title}</Card.Title>
                    <Card.Text>{skill.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Section Expériences */}
        <div className="experiences-section">
          <h2 className="text-center mt-5 mb-4 experience-title">Expériences</h2>
          <Row>
            {experiences.map((experience, index) => (
              <Col md={6} key={index} className="mb-4 fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                <Card className="experience-card">
                  <Card.Img variant="top" src={experience.logo} alt={`${experience.company} logo`} />
                  <Card.Body>
                    <Card.Title>{experience.company}</Card.Title>
                    <Card.Text>{experience.tasks}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};



export default Portfolio;
