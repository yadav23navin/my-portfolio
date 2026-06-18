import "../App.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../assets/download (1).jpg";
import {motion} from "framer-motion";

function Hero() {
  const heading = ["Hi,", "I'm", "Navin"];
  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">

        {/* Profile Image */}
        <div className="hero-image">
          <img src={profile} alt="Navin" />
        </div>

        {/* Hero Content */}
        <div className="hero-content">

          <motion.h1 className="hero-title">

  {heading.map((word, index) => (

    <motion.span
      key={index}
      initial={{
        opacity: 0,
        y: 30,
      }}

      animate={{
        opacity: 1,
        y: 0,
      }}

      transition={{
        duration: 0.5,
        delay: index * 0.4,
      }}

      style={{
        display: "inline-block",
        marginRight: "12px",
      }}

    >
      {word === "Navin" ? (
        <span className="highlight">
          {word}
        </span>
      ) : (
        word
      )}
    </motion.span>
  ))}

</motion.h1>

          <h2 className="role">
            Software Engineer Intern @ Sarv.com
          </h2>

          <p className="description">
            I build modern, responsive and interactive web applications using React.
          </p>

          {/* Buttons */}
          <div className="btn-container">

            <button
              type="button"
              className="btn primary"
              onClick={() => {
                document.getElementById("projects").scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              View Projects
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              View Resume
            </a>

          </div>

          {/* Social Icons */}
          <div className="socials">

            <a
              href="https://github.com/yadav23navin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/navin-yadav-501542290/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=yadav23navin@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;