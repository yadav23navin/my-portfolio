{/*import { motion } from "framer-motion";

function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{
        y: -60,
        opacity: 0,
      }}

      animate={{
        y: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.8,
      }}
    >
      <ul className="navbar-links">
        {navItems.map((item, index) => (
          <motion.li
            key={item.name}

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 0.2 + index * 0.1,
            }}

            whileHover={{
              y: -3,
            }}

          >

            <a href={item.link}>
              {item.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Navbar; */}

import { motion } from "framer-motion";

function Navbar() {

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Skills", link: "#skills" },
    { name: "Certifications", link: "#certifications" },
    { name: "Contact", link: "#contact" },
  ];

  return (

    <motion.nav

      className="navbar"

      initial={{ y: -60, opacity: 0 }}

      animate={{ y: 0, opacity: 1 }}

      transition={{ duration: 0.8 }}

    >

      {/* LEFT SIDE */}

      <div className="portfolio-logo">

        Navin<span>.Portfolio</span>

      </div>

      {/* RIGHT SIDE */}

      <ul className="navbar-links">

        {navItems.map((item, index) => (

          <motion.li

            key={item.name}

            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{

              delay: 0.2 + index * 0.1,

            }}

            whileHover={{ y: -3 }}

          >

            <a href={item.link}>

              {item.name}

            </a>

          </motion.li>

        ))}

      </ul>

    </motion.nav>

  );
}

export default Navbar;