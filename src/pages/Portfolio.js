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
    description: 'Des mini projets comme "To Do list" , et autres application avec next.js comme"Sentiment Detector" ',
    icon: <FaReact size={40} color="#61dafb" />
  },
  {
    title: 'React Native',
    description: 'Creation et maintenance de code :application "Passion Campagne" du site : "https://www.passion-campagne.projets-omega.net/',
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
    <div className="portfolio-background">
      <div className="container mt-5">
        <h1 className="text-center mb-4 portfolio-title">Skills</h1>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-4 mb-4 fade-in" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
              <Card>
                <Card.Body className="text-center">
                  <div className="icon mb-3">{skill.icon}</div>
                  <Card.Title>{skill.title}</Card.Title>
                  <Card.Text>{skill.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;