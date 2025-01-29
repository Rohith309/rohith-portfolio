import { useState } from 'react';
import NavBar from './components/NavBar'
import Terminal from './components/Terminal'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <NavBar />
      <Terminal onComplete={() => setShowContent(true)} />
      {showContent && (
        <>
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </>
      )}
    </>
  )
}

export default App
