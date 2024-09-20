import React from 'react';
// import myImage from '../images/my_image_2.png'; 
import myImage from '../images/side_right21.jpg'; 

const About = () => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src={myImage} alt="Saransh Chauhan" />
          </div>
          <div className="about-col-2" >
            <h1 style={{marginBottom:"1.3rem"}}className="sub-title">About Me</h1>
            <p style={{lineHeight:"1.6rem",textAlign:'justify'}}> 
I'm a passionate Full Stack Developer with over 6 months of experience at KPMG India, specializing in both frontend and backend development. Certified by HackerRank in React, Node.js, REST APIs, and SQL, I also hold a Full Stack Development certification from GeeksforGeeks. My experience includes a 2-month AICTE internship and 6 months of research, where I refined my problem-solving skills. Committed to impactful tech projects, I hold a 4-star rating on HackerRank.</p>
            <div className="tab-titles" style={{marginTop:"-0.01px"}}>
              <p className="tab-links" >Education</p>
            </div>
            <div className="tab-contents">
              <ul>
                <li style={{lineHeight:"1.6rem",textAlign:'justify'}}><span>ABES Engineering College , Ghaziabad , Uttar Pradesh (2020-2024)<br/></span> B.Tech in CSE<br /> CGPA : 8.16 / 10</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
