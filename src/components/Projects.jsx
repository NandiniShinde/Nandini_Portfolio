import React from 'react';
import { FaArrowRight, FaArrowUp } from 'react-icons/fa';
import { Container, Row, Col, Button } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const projects = [
    {
      id: 1,
      title: 'Enterprise Data Pipeline Modernization',
      description: 'Built scalable ETL workflows using Airflow and Snowflake to process Optum’s healthcare claims data. Optimized SQL and stored procedures for faster insights.',
      date: 'Mar 2025 – July 2025',
      technologies: ['airflow', 'snowflake', 'ssms', 'dbeaver', 'python'],
      achievements: [
        'Optimized SQL queries to cut processing time by 40%',
        'Independently led all data engineering deliverables for the UI team, ensuring seamless data access.',
        'Collaborated with cross-functional teams on healthcare compliance',
        'Automated ETL jobs with Apache Airflow, improving reliability and reducing manual intervention.'
      ],
      // github: "https://github.com/NandiniShinde" 
    },
    {
      id: 2,
      title: 'Prompt Engineering for LLM Optimization',
      description: 'Compared the model responses for model training, optimized prompts for large language models (LLMs) to improve response accuracy, reduce hallucinations, and align outputs with client requirements during my tenure at Green Rider Technology.',
      date: 'Mar 2024 – Jan 2025',
      technologies: ['prompt engineering', 'llm', 'nlp', 'python'],
      achievements: [
        'Engineered prompts that boosted LLM response accuracy by ~25%',
        'Worked on more that 6+ different tech projects, each with unique requirements and judged more than 10,000+ responses.'
      ],
      // github: "https://github.com/NandiniShinde/nominator-webapp" 
    },
    {
      id: 3,
      title: 'Sanskrit Chat-bot using Rule-Based NLP',
      description: 'Developed a rule-based NLP chatbot that converses in Sanskrit and completes verses. Enhanced interaction using custom grammar rules.',
      date: 'Dec 2023 – Jan 2024',
      technologies: ['python', 'nlp', 'machine learning'],
      achievements: [
      'Worked with a team of 3 to build a Sanskrit chatbot',
      'Presented project at university hackathon'
      ],
      github: "https://github.com/NandiniShinde/MajorProject-Sanskrit-Chatbot" 
    },
    {
      id: 4,
      title: 'Nominator – AI Candidate Shortlisting',
      description: 'Built a web app to help recruiters shortlist candidates using NLP-based assessments. Role: Full-Stack Developer.',
      date: 'Aug – Oct 2023',
      image: 'assets/images/nominator.png',
      technologies: ['python', 'flask', 'sqlalchemy', 'html', 'css', 'bootstrap'],
      achievements:['Role: Full-Stack Developer',
        'Developed backend APIs using Flask and SQLAlchemy',
        'Design responsive UI with Bootstrap'],
      github: "https://github.com/shantanavKapse/MinorProject" 
    },
    {
      id: 5,
      title: 'Hand Gesture Volume Controller',
      description: 'Created a system using OpenCV that adjusts system volume based on hand gestures and finger distances.',
      date: 'Jun 2023',
      image: 'assets/images/gesture-volume.png',
      technologies: ['python', 'opencv'],
      achievements:['Implemented real-time hand tracking using OpenCV with >90% accuracy in gesture detection.',
        'Strengthened knowledge in computer vision & human–computer interaction.'],
      github: "https://github.com/NandiniShinde/Controlling-Volume-hand-Gestures" 
    },
    {
      id: 6,
      title: 'Restaurant Review Sentiment Analyzer',
      description: 'Built a sentiment analysis tool using Random Forest and NLTK to classify customer reviews into positive or negative feedback.',
      date: 'May 2023',
      image: 'assets/images/sentiment-analysis.png',
      technologies: ['python', 'nltk', 'sklearn', 'random forest algorithm'],
      achievements:['Processed and cleaned 5,000+ restaurant reviews for text classification.',
        'Achieved 85% accuracy in using Random Forest with NLTK preprocessing.',
        'Demonstrated ability to translate unstructured text into actionable business insights.'],
      // github: "https://github.com/NandiniShinde/nominator-webapp" 
    }
];
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center fs-2 fw-bold mb-2"> Projects Achievements and impact</h2>
          <p className="text-center text-secondary mb-5">
            A curated selection of projects that reflect my journey and my achievements <br />
            Each one helped me grow and sharpen my skills.
          </p>
        </motion.div>
        <Row className="g-4">
          {visibleProjects.map((project, idx) => (
            <Col key={project.id} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            </Col>
          ))}
        </Row>
        <motion.div
          className="text-center mt-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
        <div className="d-flex justify-content-center mt-3">
          <Button 
            className="custom-btn d-flex align-items-center"
            style={{ minWidth: 180 }}
            onClick={() => setShowAll(!showAll)}
          >
            <span className="me-2">{showAll ? 'Show Less' : 'Show More'}</span>
            {showAll ? <FaArrowUp /> : <FaArrowRight />}
          </Button>
        </div>

        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;