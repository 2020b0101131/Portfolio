import React, { useState } from 'react';
import pdfResume from "../images/Saransh_Chauhan_Resume.pdf"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone,faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';



const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };
  const [msg, setMsg] = useState('');
  const [data, setData] = useState(initialState);
  const [flag, setFlag] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

   const handleChange=(e)=>{
    e.preventDefault();
    const {name,value}=e.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value,
    }));
   }
  const handleSubmit = () => {
    handleOpen();
    setFlag(true);
    const scriptURL = `${process.env.REACT_APP_URL}/api/contact/detail`;
    const payLoad={
        name:data.name || "Not Mentioned",
        email:data.email || "Not Mentioned",
        phone:data.phone || "Not Mentioned",
        message:data.message ||"Not Mentioned"
    };
   

    fetch(scriptURL, { method: 'POST', headers: {
      'Content-Type': 'application/json',
    }, body:JSON.stringify(payLoad) })
      .then((response) => {
        setMsg('Message sent successfully.');
        setTimeout(() => setMsg(''), 5000);
        setData(initialState);

        setFlag(false);
        handleClose();
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact me</h1>
            <p>
              <FontAwesomeIcon
                style={{
                  color: "#FE014F",
                  fontSize: "26px",
                  marginRight: "10px",
                }}
                icon={faEnvelope}
              />{" "}
              k.saranshchauhan@gmail.com
            </p>
            <p>
              <FontAwesomeIcon
                style={{
                  color: "#FE014F",
                  fontSize: "26px",
                  marginRight: "10px",
                }}
                icon={faPhone}
              />{" "}
              8077141857
            </p>
            <div className="social-icons">
              <a href="https://linkedin.com/in/the-saransh-chauhan">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              {/* <a href="https://www.instagram.com/chauhanakash11?igsh=YzljYTk1ODg3Zg=="><FontAwesomeIcon icon={faInstagram} /></a> */}
            </div>
            <a href={pdfResume} download className="btn btn2">
              Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form style={{marginBottom:"-1.5rem"}}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={data.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={data.email}
                onChange={handleChange}
              />
              <input
                type="phone"
                name="phone"
                placeholder="Your Phone"
                required
                value={data.phone}
                onChange={handleChange}
              />
              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
                value={data.message}
                onChange={handleChange}
              ></textarea>
            </form>
            <button style={{fontSize:"1.1rem",cursor:"pointer"}} type="submit" onClick={handleSubmit} className="btn btn2" >
              {flag?("Submitting..."):("Submit")} 
            </button>
           
              {
                flag?(
                  <CircularProgress
                style={{
                  color: "white",
                  marginLeft: "2rem",
                  marginBottom: "-0.8rem",
                }}
              />
                ):null
              }
         
            <span id="msg">{msg}</span>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
        Copyright © <i className="fa-regular fa-copyright"></i> Saransh Chauhan
        </p>
      </div>
    </div>
  );
};

export default Contact;
