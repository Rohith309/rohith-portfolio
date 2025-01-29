import { useEffect, useState } from 'react';
import '../styles/Terminal.css';

const Terminal = ({ onComplete }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [isDone, setIsDone] = useState(false);
  
  const line1 = '> INITIALIZING SYSTEM...';
  const line2 = '> HELLO WORLD';
  const line3 = '> I\'M ROHITH REDDY';
  const line4 = '> FULLSTACK MOBILE DEVELOPER | UI/UX DESIGNER';

  useEffect(() => {
    if (isDone) return;

    const timeout1 = setTimeout(() => {
      typeWriter(line1, setText1, 0);
    }, 500);

    const timeout2 = setTimeout(() => {
      typeWriter(line2, setText2, 0);
    }, 1500);

    const timeout3 = setTimeout(() => {
      typeWriter(line3, setText3, 0);
    }, 2500);

    const timeout4 = setTimeout(() => {
      typeWriter(line4, setText4, 0);
      setIsDone(true);
      onComplete(); // Signal completion
    }, 3500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
      clearTimeout(timeout4);
    };
  }, [isDone, onComplete]);

  const typeWriter = (text, setText, index) => {
    if (index < text.length) {
      setText(prev => prev + text.charAt(index));
      setTimeout(() => typeWriter(text, setText, index + 1), 30);
    }
  };

  return (
    <div id="terminal" className="terminal">
      <div className="terminal-header">
        <div className="terminal-buttons">
          <span className="terminal-button red"></span>
          <span className="terminal-button yellow"></span>
          <span className="terminal-button green"></span>
        </div>
      </div>
      <div className="terminal-content">
        <p className="terminal-text">{text1}</p>
        <p className="terminal-text">{text2}</p>
        <p className="terminal-text">{text3}</p>
        <p className="terminal-text">{text4}</p>
        <div className="terminal-cursor"></div>
      </div>
    </div>
  );
};

export default Terminal; 