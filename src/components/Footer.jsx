import React from 'react';
import { FaArrowUp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  // Define your brand accent color globally here
  const accentColor = 'rgb(34,197,94)';

  // Dynamic styles based on theme
  const bgStyle = {
    background: darkMode ? 'rgba(30,32,36,0.97)' : 'rgba(245,247,250,0.95)',
    borderTop: darkMode ? '1px solid #222' : '1px solid #eaeaea'
  };

  const taglineColor = accentColor; // replaced yellow with brand accent color
  const textColor = darkMode ? '#bbb' : '#555';
  const iconColors = {
    github: darkMode ? '#fff' : '#333',
    linkedin: '#0a66c2',
    arrow: accentColor // replaced yellow with brand accent color
  };

  return (
    <motion.footer
      className="footer-section py-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      style={bgStyle}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-3 mb-md-0 text-center text-md-start">
            <p className="mb-1 fw-bold" style={{ fontFamily: 'cursive', color: taglineColor }}>
              {darkMode
                ? "Create with clarity. Build with purpose."
                : "Innovate in silence. Deliver with impact."}
            </p>
            <p className="mb-0" style={{ color: textColor, fontSize: '0.95rem' }}>
              © Nandini {new Date().getFullYear()}
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="footer-links d-flex justify-content-center justify-content-md-end gap-3 align-items-center">
              <a href="https://github.com/NandiniShinde" target="_blank" rel="noopener noreferrer" title="GitHub">
                <FaGithub size={22} style={{ color: iconColors.github }} />
              </a>
              <a href="https://www.linkedin.com/in/nandini-shinde-b7b694208/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                <FaLinkedin size={22} style={{ color: iconColors.linkedin }} />
              </a>
              <motion.a
                href="#home"
                title="Back to Top"
                whileHover={{ y: -5, scale: 1.2 }}
                onClick={e => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                style={{ color: iconColors.arrow, fontSize: '1.3rem', marginLeft: '0.5rem', cursor: 'pointer' }}
              >
                <FaArrowUp />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
