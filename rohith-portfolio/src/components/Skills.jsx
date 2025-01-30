import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  DiJavascript1, 
  DiPython, 
  DiJava, 
  DiReact, 
  DiDjango, 
  DiAndroid, 
  DiMysql 
} from 'react-icons/di';
import { TbApi } from 'react-icons/tb';
import { BiData } from 'react-icons/bi';
import '../styles/Skills.css';

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const skills = [
    { name: 'JavaScript', icon: <DiJavascript1 />, progress: 70 },
    { name: 'Python', icon: <DiPython />, progress: 85 },
    { name: 'Java', icon: <DiJava />, progress: 60 },
    { name: 'React', icon: <DiReact />, progress: 75 },
    { name: 'Django', icon: <DiDjango />, progress: 85 },
    { name: 'Android Studio', icon: <DiAndroid />, progress: 60 },
    { name: 'REST API', icon: <TbApi />, progress: 80 },
    { name: 'MySQL', icon: <DiMysql />, progress: 85 },
    { name: 'SQLite', icon: <BiData />, progress: 80 },
  ];

  return (
    <section id="skills" className="skills-section" ref={ref}>
      <div className="skills-container">
        <h1 className="skills-title">[SKILL::MATRIX]</h1>
        
        <div className={`skills-grid ${inView ? 'animate' : ''}`}>
          {skills.map((skill, index) => (
            <div 
              className="skill-card" 
              key={skill.name}
              style={{ '--skill-index': index, '--progress-value': `${skill.progress}%` }}
            >
              <div className="skill-icon">
                <div className="icon-text">{skill.icon}</div>
                <div className="icon-glow"></div>
                <div className="matrix-rain"></div>
              </div>
              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <div className="skill-bar">
                  <div className="skill-progress">
                    <div className="progress-glow"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 