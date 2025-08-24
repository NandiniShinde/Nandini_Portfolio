import React from 'react';

import { Container, Row, Col} from 'react-bootstrap';
import { 
  SiPython, 
  SiSnowflake,   
  SiMysql, 
  SiGit 
} from 'react-icons/si';

import { 
  FaDatabase,       // For DBeaver or SSMS
  FaProjectDiagram, // For Airflow
  FaRobot,          // For AI
  FaBrain ,
  FaAws          // For Machine Learning
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const techIcons = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiSnowflake />, name: "Snowflake" },
  { icon: <FaAws />, name: "AWS" },
  { icon: <SiMysql />, name: "MySQL" },
  { icon: <SiGit />, name: "Git" },
  { icon: <FaDatabase />, name: "DBeaver / SSMS" },
  { icon: <FaProjectDiagram />, name: "Apache Airflow" },
  { icon: <FaBrain />, name: "Machine Learning" },
  { icon: <FaRobot />, name: "Artificial Intelligence" }
];

const About = () => {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <div className="about-container rounded-4 p-4 p-md-5">
          <Row className="align-items-center flex-lg-row flex-column">
            <Col lg={4} className="d-flex justify-content-center mb-4 mb-lg-0">
              <div className="about-image-container">
                <img
                  src="assets/images/Profile.jpg"
                  alt="Profile-Pic"
                  className="img-fluid border border-3"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/300x300';
                  }}
                />
              </div>
            </Col>
            <Col lg={8} className="about-text-column">
              <motion.div
                className="tech-stack d-flex gap-3 mb-4 flex-wrap"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.08
                    }
                  }
                }}
              >
                {techIcons.map((tech) => (
                  <motion.div
                    key={tech.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 }
                    }}
                    whileHover={{ scale: 1.1 }}
                    className="tech-badge"
                  >
                    <span className="tech-badge-icon">{tech.icon}</span>
                    <span className="tech-badge-text">{tech.name}</span>
                  </motion.div>
                ))}

              </motion.div>
              <h2 className="mb-2 fw-bold">About Me</h2>
              <h3 className="fs-3 mb-3">
                Building with data. Creating with heart.
              </h3>
              <p className="mb-4 text-secondary ">
                I’m a data engineer passionate about transforming messy data into meaningful insights.  
                I’ve worked with Snowflake, Airflow, and Python to design scalable pipelines, and I enjoy making data work smarter for people.  
                With a strong foundation in data warehousing, machine learning, and AI, I also explore backend development using Python Flask and modern web tools.<br/>  

                I am AWS Cloud Practitioner certified and bring one year of hands-on experience working with Large Language Models (LLMs),  
                while staying open to opportunities across Data Engineering, AI/ML, and Backend Development.<br/>  

                Currently, I’m looking for opportunities in India, the US, or Europe where I can contribute my skills and enthusiasm to innovative and impactful teams.
              </p>
              <div className="mb-3">
                <strong>Fun Facts:</strong>
                <ul>
                  <li>I run an art page called <em>Radha Resin Artworks</em>, where I create customized handmade gifts</li>
                  <li>Always curious to learn new tech tools or try creative DIY ideas</li>
                </ul>
              </div>
              {/* Resume Button */}
              <div className="d-flex gap-3">
                <a
                  href="/NandiniShindeResume.pdf"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </a>
                <button
                  className="btn btn-primary"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Let's Collaborate!
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;