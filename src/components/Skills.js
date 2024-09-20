import React from 'react';
import logo1 from "../images/githublogo.png";
import logo2 from "../images/hackerrank.png";
import logo3 from "../images/gfg.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faCode, faGlobe,faBrain } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <div id="skills">
      <div className="container">
        <h1 className="sub-title">Skills</h1>
        <div className="skills-list">
          <div>
            <FontAwesomeIcon style={{fontSize:"50px",marginBottom:"1rem"}} icon={faCode} />
            <h2 style={{fontWeight:"bold"}}>DSA</h2>
            <ul className="sl">
            <li style={{marginBottom:"0.5rem"}}><a href="https://auth.geeksforgeeks.org/user/ksaranshchauhan"><img src={logo3} alt="GeeksforGeeks Logo" /><span style={{marginLeft:"2.3rem",display:'flex',flexDirection:"row",marginTop:"-2.4rem"}}>GeeksforGeeks</span></a></li>
              <li style={{marginBottom:"0.7rem"}}><a href="https://github.com/2020b0101131"><img src={logo1} alt="GitHub Logo" />  <span style={{marginLeft:"2.3rem",display:'flex',flexDirection:"row",marginTop:"-2.4rem"}}>GitHub</span></a></li>
              <li><a href="https://www.hackerrank.com/profile/2020B0101131"><img src={logo2} alt="HackerRank Logo" /><span style={{marginLeft:"2.3rem",display:'flex',flexDirection:"row",marginTop:"-2.4rem"}}>HackerRank</span></a></li>
             
            </ul>
          </div>
          <div>
          <FontAwesomeIcon style={{fontSize:"50px",marginBottom:"1rem"}} icon={faGlobe} />
            <h2 style={{fontWeight:"bold"}}>Full Stack Development</h2>
            <ul>
              <li>HTML</li>
              <li>CSS & Frameworks</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Node</li>
              <li>Postgress</li>
              <li>Deployment & Hosting</li>
            </ul>
          </div>
          <div>
            <FontAwesomeIcon style={{fontSize:"50px",marginBottom:"1rem"}} icon={faBrain} />
            <h2 style={{fontWeight:"bold"}}>Publications</h2>
            <ul style={{lineHeight:"2.5rem"}}>
              <li><a href="https://ieeexplore.ieee.org/document/10486272">Rapid Plant Disease Detection </a></li>
              <li><a href="https://dl.acm.org/doi/abs/10.1145/3549206.3549292">Block Chain Application</a></li>
              <li><a href="https://link.springer.com/chapter/10.1007/978-981-19-6068-0_26">Quantification of Homa Effect</a></li>
              <li><a href="https://www.igi-global.com/article/examining-vedic-yajnas-effects-on-the-aqi-of-india-in-the-second-wave-of-the-covid-19-pandemic/303605">Examining Vedic Yajna's Effects</a></li>
              <li><a href="https://www.igi-global.com/article/surveillance-of-air-quality-and-measuring-effect-of-homa-activity-at-delhi-india/305451">Surveillance of Air Quality</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
