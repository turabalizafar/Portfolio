import React, { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // Show loading spinner first
    const loadingSpinner = document.getElementById("loading-spinner");
    const mainContent = document.getElementById("main-content");

    setTimeout(() => {
      // Hide spinner and show main content
      if (loadingSpinner) loadingSpinner.style.display = "none";
      if (mainContent) mainContent.style.display = "block";
    }); 
  }, []);

  return (
    <>
    
    <header><img src="" alt="" />
    <i className="fa fa-bars"></i>
    </header>
     <div class="App">
      <div id="loading-spinner" className="loading-spinner">
      </div>

     </div>

      {/* Main Content */}
      <div id="main-content" className="main-content" style={{ display: "none" }}>
        <div className="sidebar">
          <div className="profile-section">
            <img src={reactLogo} alt="Profile pic" className="profile-pic" />
            <h3>Ghulam Abubaker</h3>
          
           <div className="social-icons">
              <a href="https://wa.me/+923447066974" target="_blank">
                <i className="fab fa-whatsapp"></i>
              </a>
              <a href="https://www.linkedin.com/in/yourprofile" target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/yourprofile" target="_blank">
                <i className="fab fa-instagram"></i>
              </a>
           </div>
          </div>
          <nav>
           <div className="icon-styling">
           <ul className="nav-links">
              <li>
                <i className="fas fa-home"></i>
                <a href="#">Home</a>
              </li>
              <li>
                <i className="fas fa-user-circle"></i>
                <a href="#">About</a>
              </li>
              <li>
                <i className="fas fa-concierge-bell"></i>
                <a href="#">Services</a>
              </li>
              <li>
              <i class="fas fa-file-alt"></i>
                <a href="#">Resume</a>
              </li>
              <li>
              <i class="fas fa-envelope"></i>
                <a href="#">Contact</a>
              </li>
            </ul>
           </div>
          </nav>
        </div>
        <div className="main-content-body">
          <div className="intro">
            <p>
              Hello I'm Ghulam AbuBaker, a Quantity Serveyour Engineer in KEO
              International Consultant in Saudia Arabia.
            </p>
            <p>
              I am a fully qualified Quantity Surveyour with over 15 years of
              professional experience.
            </p>
          </div>
          <div>
            <h3>Education</h3>
            <p>
              MSC Quantity Surveyour <br />
              Bachelor of Technology (B-Tech Hons) Civil Engineering University,
              Islamabad, Pakistan, 2013 <br />
              Diploma of Associate Engineer (Civil Technology) Punjab, Pakistan,
              2007 <br />
              Secondary School Certificate Punjab, Pakistan 2004
            </p>
          </div>
          <div>
            <h3>Profession</h3>
            <p>Civil Engineer/Quantity Surveyour</p>
            <h3>Nationality</h3>
            <p>Pakistani</p>
          </div>
          <div>
            <h3>Membership</h3>
            <p>
              Pakistan National Technology Council (NTC) <br />
              Saudi Council of Engineers (SEC) <br />
              Quantity Survey Association of Pakistan (QSAP)
            </p>
          </div>
          <h3>Skills</h3>
          <p>
            Microsoft Office <br />
            AutoCAD 2D, 3D & Civil 3D <br />
            Autodesk Revit <br />
            Photoshop
          </p>
          <div className="contact">
            <h3>Contact</h3>
            <h5>Email Us</h5>
            <div className="circle">
              <i className="fab fa-github"></i>
              <a href="mailto:turabali2007@yahoo.com" target="_blank" className="transform">
                turabali2007@yahoo.com
              </a>
              <br />
              <i className="fab fa-whatsapp"></i>
              <a href="https://wa.me/+923447066974" target="_blank" className="transform">
                +92-344-7066974
              </a>
            </div>
          </div>
        </div>
        <div>

        </div>
        <footer>
          <map name=""></map>
        </footer>
        <footer className="footer1">
          &copy; <b>Ghulam Abubaker</b> {new Date().getFullYear()} All rights reserved.
        </footer>
      </div>
    </>
  );
}

export default App;

