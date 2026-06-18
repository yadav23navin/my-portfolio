import "../App.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications">
      <h2 className="section-title">Certifications & Achievements</h2>

      <div className="cert-container">

       
        <div className="cert-card">
          <h3>AWS Academy</h3>
          <p>AI/ML Virtual Internship</p>
        </div>

      
        <div className="cert-card">
          <h3>Celonis ML Foundations</h3>
          <p>Process Mining & Automation Internship</p>
        </div>

       
        <div className="cert-card">
          <h3>Cisco Cybersecurity</h3>
          <p>Cybersecurity Essentials & Threat Landscape (LinkedIn)</p>
        </div>

       
        <div className="cert-card">
          <h3>Hackathons</h3>
          <ul>
            <li>1st Position – Hackerfest 2022</li>
            <li>Semi-finalist – Dexterix 3.0</li>
            <li>Finalist – Pitch Me</li>
            <li>Finalist – Dexterix 4.0</li>
          </ul>
        </div>

       
        <div className="cert-card">
          <h3>Research Paper</h3>
          <p>
            Face Recognition-Based Attendance System accepted at PICET Conference
          </p>
        </div>

      </div>
    </section>
  );
}

export default Certifications;