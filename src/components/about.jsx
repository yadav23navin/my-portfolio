import profile from "../assets/download (2).jpg";

function About() {
  return (
    <section
      id="about"
      className="about"
      style={{
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      <h2>About Me</h2>

      <img
        src={profile}
        alt="Navin"
        style={{
          width: "180px",
          height: "180px",
          borderRadius: "50%",
          objectFit: "cover",
          marginTop: "20px",
        }}
      />

      <p
        style={{
          maxWidth: "700px",
          margin: "20px auto",
          lineHeight: "1.6",
        }}
      >
        Hi, I'm Navin, a passionate frontend developer who enjoys building
        clean, responsive and user-friendly web applications. I focus on
        writing efficient code and creating smooth user experiences.
      </p>

      <p className="about-text">
        Currently, I'm improving my skills in React, JavaScript, and modern web
        technologies while working on real-world projects.
      </p>
    </section>
  );
}

export default About;