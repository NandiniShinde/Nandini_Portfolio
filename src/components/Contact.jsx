import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaArrowRight } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);

  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 5000);
      return () => clearTimeout(timer); // Cleanup
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!'); // Test if form submission works
    setStatus('loading');
    console.log({ name, email, message });
    
    // Debug: Check environment variables
    console.log('Environment Variables:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    });

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are loaded
    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are missing!');
      setStatus('error');
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Nandini',
      message: message,
    }

    //To send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey).then((response) => {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    })
    .catch((error) => {
      setStatus('error');
    });
  }


  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <motion.div
          className="contact-container rounded-4 p-4 p-md-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Row>
            <Col lg={5} className="mb-5 mb-lg-0">
              <div className="text-center text-lg-start">
                <motion.div
                  className="profile-picture-container mb-4"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <img 
                    src="assets/images/Profile.jpg" 
                    alt="Profile" 
                    className="profile-picture"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/160x160';
                    }}
                  />
                </motion.div>
                <h2 className="fs-2 mb-2 text-center">Enjoyed my work? Interested in collaborating? Let's connect!</h2>
                <p className="mb-4 text-center">
                  I'm always up for a chat.<br />
                  <a href="mailto:nanshinde.197324@gmail.com" className="text-primary fw-bold">nanshinde.197324@gmail.com</a>
                </p>
                <motion.div
                  className="social-links d-flex justify-content-center gap-3"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: { transition: { staggerChildren: 0.1 } }
                  }}
                >
                  {[
                    { href: "https://github.com/NandiniShinde", icon: <FaGithub className="fs-4" />, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/nandini-shinde-b7b694208/", icon: <FaLinkedin className="fs-4" />, label: "LinkedIn" }
                    
                  ].map((item, idx) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      className="social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.label}
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 }
                      }}
                    >
                      {item.icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </Col>
            <Col lg={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="contactName">
                  <Form.Control 
                    type="text" 
                    placeholder="Name" 
                    className="form-input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactEmail">
                  <Form.Control 
                    type="email" 
                    placeholder="E-mail" 
                    className="form-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="contactMessage">
                  <Form.Control 
                    as="textarea" 
                    rows={5}
                    placeholder="Your message" 
                    className="form-input"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                  />
                </Form.Group>
                <div className="text-end">
                  <Button variant="primary" type="submit" className="custom-btn d-inline-flex align-items-center" disabled={status === 'loading'}>
                    <span className="me-2">{status === 'loading' ? 'Sending...' : 'Send me a message'}</span>
                    <FaArrowRight />
                  </Button>
                </div>
                {status === 'success' && <div className="alert alert-success mt-3">Email sent successfully! 🎉</div>}
                {status === 'error' && <div className="alert alert-danger mt-3">Error sending email. Please try again.</div>}
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default Contact;