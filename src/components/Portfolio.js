import React from "react";
import portfolioThumbnail from "../images/interview.avif";
import natraj from "../images/natraj.webp";
import pdd from "../images/pdd.avif";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";
const Portfolio = () => {
  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>

        <div className="work-list">
          <div className="work">
            <img
              style={{ height: "19.4rem" }}
              src={portfolioThumbnail}
              alt="InterviewG-image"
            />
            <div className="layer">
              <h2 style={{ fontWeight: "bold", marginBottom: "0.9rem" }}>
                <u>InterviewG</u>
              </h2>
              <p style={{ textAlign: "center", lineHeight: "1.3rem" }}>
                A web application to facilitate interviewers by creating
                candidate logs, scheduling interviews, and setting up
                domain-specific questions.
              </p>
              <br />
              <h5>React, Node, CSS, Bootstrap, PostgreSQL, GitHub</h5>
              <a href="https://interviewg.netlify.app/">
                <OpenInNewIcon sx={{ mt: "1.1rem" }} />
              </a>
            </div>
          </div>

          {/* ===========Second Project=================== */}
          <div className="work">
            <img
              style={{ height: "19.4rem" }}
              src={natraj}
              alt="Krishna Dance Academy-image"
            />
            <div className="layer">
              <h2 style={{ fontWeight: "bold", marginBottom: "0.9rem" }}>
                <u>Krishna Dance Academy</u>
              </h2>
              <p style={{ textAlign: "center", lineHeight: "1.3rem" }}>
                Website providing comprehensive information about the dance
                academy, including class schedules, types of dances, pricing,
                and contact information.
              </p>
              <br />
              <h5>Node, Pug, CSS, MEDIA QUERY, MongoDB, GitHub</h5>
              <a href="https://kda.onrender.com/">
                <OpenInNewIcon sx={{ mt: "1.1rem" }} />
              </a>
            </div>
          </div>
          {/* ===============Third Project================== */}
          <div className="work">
            <img
              style={{ height: "19.4rem" }}
              src={pdd}
              alt="plant disease detection-image"
            />
            <div className="layer">
              <h2 style={{ fontWeight: "bold", marginBottom: "0.9rem" ,textAlign:"center"}}>
                <u>Plant Disease Detection</u>
                <u> & Treatment</u>
              </h2>
              <p style={{ textAlign: "center", lineHeight: "1.3rem" }}>
              An application that diagnoses plant diseases and recommends treatment options.

              </p>
              <br />
              <h5>HTML, CSS, MEDIA QUERY, JavaScript, Flask, GitHub</h5>
              <a href="https://saransh-vaishnai-tribhuvan.onrender.com/">
                <OpenInNewIcon sx={{ mt: "1.1rem" }} />
              </a>
            </div>
          </div>

         

          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
