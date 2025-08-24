import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCode } from 'react-icons/fa';

const Timeline = () => {
  const timelineData = [
  {
    id: 1,
    type: "work",
    title: "Software Developer",
    organization: "The Rapid Hire Pvt. Ltd.",
    location: "Indore, MP",
    duration: "March 2025 – Present",
    logo: "assets/images/rapid-hire.png", // Update logo if you have one
    responsibilities: [
      "Optimized 50+ complex SQL queries and Snowflake models, improving performance by 30%.",
      "Developed and deployed Apache Airflow DAGs for automated ETL pipelines.",
      "Collaborated with Optum’s teams to enhance data workflows using Airflow and Python scripting.",
      "Monitored and troubleshot production workflows."
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Software Engineer",
    organization: "Green Rider Technology",
    location: "Indore, MP",
    duration: "Feb 2024 – Jan 2025",
    logo: "assets/images/greenrider.png", // Update if available
    responsibilities: [
      "Engineered advanced prompts for LLMs using RLHF to boost chatbot accuracy by 60%.",
      "Tested and optimized scalable ML code for model training pipelines.",
      "Worked on prompt engineering and ML model tuning."
    ]
  },
  {
    id: 3,
    type: "work",
    title: "IT Intern",
    organization: "Indore Municipal Corporation",
    location: "Indore, MP",
    duration: "Apr 2023 – Jun 2023",
    logo: "assets/images/indore-municipal.png", // Update if available
    responsibilities: [
      "Developed an intern attendance system using Flask and SQLAlchemy.",
      "Reduced manual tracking efforts and automated reporting.",
      "Explored operational technologies used in the corporation’s IT cell."
    ]
  },
  {
    id: 4,
    type: "work",
    title: "Summer Intern",
    organization: "Persistent Systems",
    location: "Remote / India",
    duration: "Jun 2023 – Aug 2023",
    logo: "assets/images/persistent.png", // Update if available
    responsibilities: [
      "Worked on data pipelines and SQL-based automation tasks.",
      "Assisted in dashboarding and API integration.",
      "Learned about software lifecycle and documentation."
    ]
  },
  {
    id: 5,
    type: "education",
    title: "B.Tech in Computer Science (AI & ML)",
    organization: "Acropolis Institute of Technology and Research Indore",
    location: "Indore, MP",
    duration: "July 2020 – June 2024",
    logo: "assets/images/acropolis.png", // Update if available
    gpa: "CGPA: 8.20/10",
    activities: [
      {
        title: "Major Project: Sanskrit Chatbot using Rule-Based NLP",
        description: "Built a chatbot that responds and completes Sanskrit verses using Python.",
        duration: "Jan 2024 – May 2024"
      },
      {
        title: "Minor Project: Nominator – AI Candidate Shortlisting",
        description: "Developed a full-stack app to assess candidates using customized NLP tests.",
        duration: "Aug 2023 – Dec 2023"
      }
    ]
  },
  {
    id: 6,
    type: "education",
    title: "12th Grade – Computer Science",
    organization: "Kendriya Vidyalaya No. 1 Indore",
    location: "Indore, MP",
    duration: "Mar 2018",
    logo: "assets/images/kv-logo.png",
    gpa: "86.2%",
    activities: [
      {
        title: "Technologies Learned",
        description: "SQL, HTML, Django, NumPy, Python, Machine Learning",
        duration: "2017 – 2018"
      }
    ]
  },
  {
    id: 7,
    type: "education",
    title: "10th Grade",
    organization: "Kendriya Vidyalaya No. 1 Indore",
    location: "Indore, MP",
    duration: "Mar 2016",
    logo: "assets/images/kv-logo.png",
    gpa: "81.2%"
  }
];


  // const getIcon = (type) => {
  //   switch (type) {
  //     case 'education':
  //       return <FaGraduationCap className="text-primary" />;
  //     case 'work':
  //       return <FaBriefcase className="text-primary" />;
  //     default:
  //       return <FaCode className="text-primary" />;
  //   }
  // };

  return (
    <section id="timeline" className="timeline-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-5"
        >
          <h2 className="fs-2 fw-bold mb-2">My Journey</h2>
          <p className="text-secondary">
          "From solving textbook problems to architecting enterprise solutions - here's my evolution from a CS student to a data engineer who turns complex challenges into elegant solutions"
          </p>
        </motion.div>

        <div className="timeline-container position-relative">
          {/* Vertical line */}
          <div 
            className="timeline-line position-absolute"
            style={{
              left: '50%',
              transform: 'translateX(-50%)',
              width: '2px',
              height: '100%',
              background: 'var(--primary-color)',
              opacity: 0.3
            }}
          />

          {timelineData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="timeline-item position-relative mb-5"
            >
              {/* Timeline dot */}
              <div 
                className="timeline-dot position-absolute rounded-circle"
                style={{
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: 'var(--primary-color)',
                  border: '4px solid var(--component-bg)',
                  zIndex: 1
                }}
              />

              <div className="row">
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-end' : 'text-md-start order-md-2'}`}>
                  <div 
                    className="timeline-content p-4 rounded-4"
                    style={{
                      background: 'var(--component-bg)',
                      border: '1px solid var(--border-color)',
                      marginRight: idx % 2 === 0 ? '2rem' : '0',
                      marginLeft: idx % 2 === 0 ? '0' : '2rem',
                      textAlign: 'left'
                    }}
                  >
                    <div className="d-flex align-items-center mb-3 justify-content-between">
                      <div>
                        <h3 className="fs-4 fw-bold mb-1">{item.title}</h3>
                        <p className="text-secondary mb-0">{item.organization}</p>
                      </div>
                      <div className="organization-logo ms-3" style={{ width: '60px', height: '60px' }}>
                        <img 
                          src={item.logo} 
                          alt={`${item.organization} logo`}
                          className="img-fluid rounded"
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = 'https://via.placeholder.com/60x60';
                          }}
                        />
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="mb-1">
                        <span className="text-secondary">Location:</span> {item.location}
                      </p>
                      <p className="mb-1">
                        <span className="text-secondary">Duration:</span> {item.duration}
                      </p>
                      {item.gpa && (
                        <p className="mb-1">
                          <span className="text-secondary">CGPA:</span> {item.gpa}
                        </p>
                      )}
                    </div>

                    {item.activities && (
                      <div>
                         <h4 className="fs-5 fw-bold mb-2 d-flex align-items-center">
                           <span>Campus Activities</span>
                           <FaBriefcase className="text-primary ms-2" />
                         </h4>
                        <div className="activities-list">
                          {item.activities.map((activity, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="activity-item mb-3"
                            >
                              <h5 className="fs-6 fw-bold mb-1">{activity.title}</h5>
                              <p className="text-secondary mb-1 small">{activity.description}</p>
                              <p className="text-secondary mb-0 small">
                                <span className="text-primary">Duration:</span> {activity.duration}
                              </p>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.responsibilities && (
                      <div>
                        <h4 className="fs-5 fw-bold mb-2 d-flex align-items-center">
                           <span>Key Responsibilities</span>
                           <FaCode className="text-primary ms-2" />
                        </h4>
                        <ul className="list-unstyled mb-0">
                          {item.responsibilities.map((responsibility, index) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                              viewport={{ once: true }}
                              className="mb-2 d-flex align-items-center"
                            >
                              <span className="text-primary me-2">•</span>
                              {responsibility}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`col-md-6 ${idx % 2 === 0 ? 'text-md-start' : 'text-md-end order-md-1'}`}>
                  <div className="timeline-date d-none d-md-block">
                    <span className="badge bg-primary rounded-pill px-3 py-2">
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Timeline;