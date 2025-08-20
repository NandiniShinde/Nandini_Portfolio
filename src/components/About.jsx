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
              <p className="mb-4 text-secondary">
                I'm a data engineer who enjoys transforming complex data into meaningful solutions. I’ve worked with tools like Snowflake, Airflow, and Python to build scalable pipelines, and I love making data work smarter for people.<br />
                I'm enthusiastic about transforming messy data into meaningful insights, and have a strong foundation in data warehousing and machine learning.<br /><br />
                Currently, I'm now on the lookout for opportunities in tech company in India, United States or Europe to  bring my skills and enthusiasm in innovative and impactful teams. <br /><br />
                Always learning. Always building. Always improving.
              </p>
              <div className="mb-3">
                <strong>Fun Facts:</strong>
                <ul>
                  <li>I run an art page called <em>Radha Resin Artworks</em>, where I create customized handmade gifts</li>
                  <li>Always curious to learn new tech tools or try creative DIY ideas</li>
                </ul>
              </div>
              {/* <a variant="primary" className="custom-btn me-2"
                onClick={() => window.open('/NandiniShindeResume.pdf', 'download', '_blank', 'noopener,noreferrer')}>
                My Resume
              </a> */}
              {/* <Button
                as="a"
                href="/NandiniShindeResume.pdf"
                className="custom-btn me-2"
                target = "_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </Button>

              <Button variant="outline-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Let's Collaborate!
              </Button> */}
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default About;