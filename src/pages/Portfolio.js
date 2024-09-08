import React from 'react';
import { Card } from 'react-bootstrap';
import { FaJs, FaReact, FaGithub, FaDocker } from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/Portfolio.css';

const skills = [
  {
    title: 'JavaScript',
    description: 'Langage de programmation essentiel pour le développement web, utilisé pour créer des fonctionnalités interactives et dynamiques.',
    icon: <FaJs size={40} color="#f7df1e" />
  },
  {
    title: 'React',
    description: 'Bibliothèque JavaScript pour construire des interfaces utilisateur dynamiques et réactives.',
    icon: <FaReact size={40} color="#61dafb" />
  },
  {
    title: 'React Native',
    description: 'Framework pour développer des applications mobiles natives en utilisant JavaScript et React.',
    icon: <FaReact size={40} color="#61dafb" />
  },
  {
    title: 'Java Spring Boot',
    description: 'Framework Java pour construire des applications backend robustes et sécurisées avec une configuration minimale.',
    icon: <SiSpringboot size={40} color="#6DB33F" />
  },
  {
    title: 'GitHub',
    description: 'Plateforme de gestion de code source utilisant Git, essentielle pour le versionnage et la collaboration en développement.',
    icon: <FaGithub size={40} color="black" />
  },
  {
    title: 'Docker',
    description: 'Outil de conteneurisation permettant de déployer des applications de manière cohérente et portable à travers différents environnements.',
    icon: <FaDocker size={40} color="#2496ed" />
  }
];

const Portfolio = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 animated-title">Skills</h1> {/* Titre stylé et animé */}
      <div className="row">
        {skills.map((skill, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card>
              <Card.Body className="text-center">
                <div className="icon mb-3">{skill.icon}</div> {/* Icône de chaque langage */}
                <Card.Title>{skill.title}</Card.Title>
                <Card.Text>{skill.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;