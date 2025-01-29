import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        [DEV::ROHITH]
      </div>
      <div className="nav-links">
        <a href="#home">./ home</a>
        <a href="#projects">./ projects</a>
        <a href="#skills">./ skills</a>
        <a href="#about">./ about</a>
        <a href="#contact">./ contact</a>
      </div>
    </nav>
  );
};

export default NavBar; 