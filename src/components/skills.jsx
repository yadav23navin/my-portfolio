import "../App.css";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-container">

       
        <div className="skill-card">
          <h3>Programming & Tools</h3>
          <p>Java, Python, C++, C, JavaScript</p>
        </div>

       
        <div className="skill-card">
          <h3>Frontend</h3>
          <p>HTML, CSS, JavaScript, React.js, Responsive Design, UI/UX Optimization</p>
        </div>

        
        <div className="skill-card">
          <h3>Backend</h3>
          <p>Node.js, REST APIs, Firebase Authentication</p>
        </div>

      
        <div className="skill-card">
          <h3>Database</h3>
          <p>SQL, MySQL, Firebase (Realtime & Structured Data)</p>
        </div>

       
        <div className="skill-card">
          <h3>Core Concepts</h3>
          <p>DSA, OOP, DBMS, Operating Systems, Computer Networks</p>
        </div>

      
        <div className="skill-card">
          <h3>Tools & Technologies</h3>
          <p>Git, GitHub, Jupyter Notebook, SDLC</p>
        </div>

      </div>
    </section>
  );
}

export default Skills;