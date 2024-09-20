import React from 'react';
// import logo from '../images/logo2.png'; 

const Header = () => {
  return (
    <div id="header">
      <div className="container">
        <nav>
          {/* <img src={logo} alt="Website logo" className="logo" style={{ height: '2.2rem' }} /> */}
          <h1 style={{ height: '2.2rem',fontSize:"2.1rem"}} ><span style={{color:"red"}}>S</span>aransh.</h1>
          <ul id="sidemenu">
            <li><a href="#header">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="header-text">
          <p>Full Stack Developer</p>
          <h1>Hi, I'm <span>Saransh</span> <br /> Chauhan From India</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
