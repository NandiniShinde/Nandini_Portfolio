import React from 'react';
import { Card, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { SiReact, SiNodedotjs, SiJavascript, SiTypescript, SiBootstrap, SiExpress, SiMongodb, SiNextdotjs, SiHtml5, SiSass, SiCypress, SiJest, SiPython, SiApacheairflow, SiSnowflake, SiMysql, SiFlask, SiSqlalchemy, SiOpencv, SiScikitlearn } from 'react-icons/si';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
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
    <Card className="project-card h-100 d-flex flex-column shadow-sm border-0"
      style={{ 
      transition: 'transform 0.2s, box-shadow 0.2s',
      minHeight: "380px",
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

        <p className="text-center mb-2"><strong>Role:</strong> {project.role}</p>

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
              <Button
                variant="outline-dark"
                size="sm"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="d-flex align-items-center"
              >
                <FaGithub className="me-1" /> GitHub
              </Button>
            )}
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;