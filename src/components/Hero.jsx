import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section id="home" className="hero-section py-5">
      <Container className="d-flex flex-column justify-content-center align-items-center text-center">
            <h1>
              <span className="terminal-prompt">$</span> Hello, I'm 
              <span className="text-primary"> Nandini</span>
            </h1>



            <span className="fs-5 mb-3 d-block text-primary">
              <Typewriter
                words={[
                  'Data Engineer',
                  'ETL & Machine Learning Enthusiast',
                  'SQL + Python = 🚀',
                  'Always Learning'
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1200}
              />
            </span>
            <p className="text-secondary mb-4">
            I transform complex datasets into clear, actionable insights and efficient data workflows.<br />
            With hands-on experience in Python, SQL, Airflow, and Snowflake. <br /> I enjoy designing systems that make data more accessible and impactful.<br /><br />
            Exploring modern data tools and always excited to collaborate on meaningful tech solutions.
            </p>
            <div className="d-flex gap-3 mb-6">
              <Button variant="primary" className="custom-btn d-flex align-items-center"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                <span className="me-2">Let's Connect!</span>
                <FaArrowRight />
              </Button>
              <Button
                as="a"
                href="/NandiniShindeResume.pdf"
                download="Nandini_Shinde_Resume.pdf"
                className="custom-btn me-2"
              >
                Download Resume
              </Button>
            </div>
      </Container>
    </section>
  );
};

export default Hero;