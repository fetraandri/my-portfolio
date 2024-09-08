// pages/Contact.js
import React from 'react';
import ContactForm from '../components/Contact/ContactForm';
import { SocialIcon } from 'react-social-icons';
import './styles/Contact.css';

const Contact = () => {
  return (
    <div className="backgroundContact">
      <div className="contact-page">
        <ContactForm />
        <div className="social_icon_contact">
        <SocialIcon url="https://github.com/fetraandri" target="_blank" className="mx-2" />
          <SocialIcon url="https://linkedin.com/in/Fetra_Andriamamonjy" target="_blank" className="mx-2" />
          <SocialIcon url="https://facebook.com/fetra.andriami.77" target="_blank" className="mx-2" />
          <SocialIcon url="https://instagram.com/andriamamonjy_fetrra" target="_blank" className="mx-2" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
