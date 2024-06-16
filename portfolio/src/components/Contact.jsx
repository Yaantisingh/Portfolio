import React from 'react';
import './css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-info">
        <p><strong>Email:</strong> <a href="mailto:singhyaanti@gmail.com">singhyaanti@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+917296899643">7296899643</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/yaanti-singh-bb787719b" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/yaanti-singh-bb787719b</a></p>
        <p><strong>Github:</strong> <a href="https://github.com/Yaantisingh" target="_blank" rel="noopener noreferrer">Yaantisingh</a></p>
      </div>
    </div>
  );
};

export default Contact;
