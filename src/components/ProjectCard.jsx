import React from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest, SiPython, SiApacheairflow, SiSnowflake, SiMysql, SiFlask, SiSqlalchemy, SiOpencv, SiScikitlearn } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const ProjectCard = ({ project }) => {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");
    let maxHeight = 0;
    cards.forEach(card => {
      card.style.height = "auto"; // reset first
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
    cards.forEach(card => (card.style.height = `${maxHeight}px`));
  }, []);

  const getTechIcon = (tech) => {
    const iconMap = {
      'react': SiReact,
      'nodejs': SiNodedotjs,
      'javascript': SiJavascript,
      'typescript': SiTypescript,
      'bootstrap': SiBootstrap,
      'express': SiExpress,
      'mongodb': SiMongodb,
      'nextjs': SiNextdotjs,
      'html': SiHtml5,
      'sass': SiSass,
      'cypress': SiCypress,
      'jest': SiJest,
      'python': SiPython,
      'airflow': SiApacheairflow,
      'snowflake': SiSnowflake,
      'sql': SiMysql,
      'flask': SiFlask,
      'sqlalchemy': SiSqlalchemy,
      'opencv': SiOpencv,
      'sklearn': SiScikitlearn
    };

    const Icon = iconMap[tech];
    return Icon ? <Icon className="tech-icon" /> : null;
  };

  return (
    <Card className="project-card shadow-sm border-0 d-flex flex-column"
      style={{ 
      transition: 'transform 0.2s, box-shadow 0.2s',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'none'}
    >
     

      <Card.Body className="d-flex flex-column">
        <div className="d-flex justify-content-center mb-2 flex-wrap">
          {project.technologies.map((tech, index) => (
            <OverlayTrigger
              key={index}
              placement="top"
              overlay={<Tooltip>{tech}</Tooltip>}
            >
              <span className="mx-1" style={{ transition: 'transform 0.2s' }}>
                {getTechIcon(tech)}
              </span>
            </OverlayTrigger>
          ))}
        </div>
        
        <Card.Title className="text-center fw-bold mb-2 text-primary">{project.title}</Card.Title>
        
        <div className="text-center mb-2">
          <span className="project-date text-secondary">{project.date}</span>
        </div>
        
        <Card.Text className="text-center flex-grow-1 text-secondary">
          {project.description}
        </Card.Text>

        <p className="text-center mb-2 project-role">
          <strong>Roles and Responsibilities:</strong> {project.role}
        </p>

        {project.achievements && (
          <ul className="text-start small text-secondary">
            {project.achievements.map((ach, i) => (
              <li key={i}>{ach}</li>
            ))}
          </ul>
        )}

        {(project.demo || project.github) && (
          <div className="d-flex justify-content-center gap-2 mt-2">
            {project.demo && (
              <Button
                variant="outline-primary"
                size="sm"
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaExternalLinkAlt className="me-1" /> Live Demo
              </Button>
            )}
            {project.github && (
              <div className="text-center mt-2">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: "green", fontWeight: "500", textDecoration: "none" }}
                  onMouseOver={(e) => e.currentTarget.style.textDecoration = "underline"}
                  onMouseOut={(e) => e.currentTarget.style.textDecoration = "none"}
                >
                  🔗 Project Link
                </a>
              </div>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;