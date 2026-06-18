import "../App.css";
import{motion} from "framer-motion";

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="projetcs-title">Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Job Application Management App</h3>
          <p>
            Developed a secure web application for managing job applications with authentication and role-based access.
          </p>
          <ul>
            <li>Authentication & role-based access</li>
            <li>Firebase + SQL integration</li>
            <li>Real-time + relational database handling</li>
            <li>Performance optimization & security</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Face Recognition Attendance System</h3>
          <p>
            Built an automated attendance system using real-time face detection.
          </p>
          <ul>
            <li>Real-time face detection</li>
            <li>Frontend + backend integration</li>
            <li>Achieved 85% accuracy</li>
          </ul>
        </div>

        <div className="project-card">
          <h3>Face Emotion Detection System</h3>
          <p>
            Developed a machine learning model to classify human emotions.
          </p>
          <ul>
            <li>Image & video emotion detection</li>
            <li>Preprocessing & feature extraction</li>
            <li>Achieved 85% accuracy</li>
            <li>Tech: Python, OpenCV, DeepFace</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Projects;

