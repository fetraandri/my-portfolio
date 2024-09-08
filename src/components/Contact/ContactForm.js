import React, { useState } from 'react';
import '../../components/styles/ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_b22gwap';
    const templateID = 'template_tc5dfhb';
    const userID = 'iXEoJwv95GqkcnECZ';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
      }, (error) => {
        console.error('FAILED...', error);
      });
  };

  return (
    <div className="contact-form-container">
      <h2>Contactez-moi</h2>
      {submitted ? (
        <p>Merci pour votre message, je vous répondrai bientôt.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-control"
              placeholder="Nom..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-control"
              placeholder='Email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-control"
              rows="5"
              placeholder="message..."
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;