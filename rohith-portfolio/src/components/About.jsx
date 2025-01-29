import { useInView } from 'react-intersection-observer';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import profileImage from '../assets/rohith.jpg';
import '../styles/About.css';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [text, setText] = useState('');
  const fullText = "I am a Full Stack and Android Developer skilled in building responsive web and mobile applications. With expertise in both backend/frontend development and UI/UX design, I create user-friendly solutions. I also use Figma to craft intuitive, visually appealing interfaces";

  useEffect(() => {
    if (inView) {
      let index = 0;
      const typeSpeed = 20; // Faster typing speed

      const typeWriter = () => {
        if (index < fullText.length) {
          setText(fullText.slice(0, index + 1));
          index++;
          setTimeout(typeWriter, typeSpeed);
        }
      };

      typeWriter();
    }
  }, [inView]);

  return (
    <section id="about" className="about-section" ref={ref}>
      <div className={`about-container ${inView ? 'animate' : ''}`}>
        <div className="about-content">
          <h1 className="about-title">[ABOUT::ME]</h1>
          <p className="about-text">
            {text}
            <span className="cursor"></span>
          </p>
          <div className="social-links">
            <a href="https://github.com/Rohith309" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaGithub /> GITHUB
            </a>
            <a href="https://www.linkedin.com/in/rohith-reddy4" target="_blank" rel="noopener noreferrer" className="social-link">
              <FaLinkedin /> LINKEDIN
            </a>
          </div>
        </div>
        <div className="about-image">
          <div className="image-container">
            <img src={profileImage} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 