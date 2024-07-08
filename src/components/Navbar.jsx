import React, { useEffect } from "react";
import "../App.css";
import Navlink from "./NavLink";

function Navbar() {
  const navLinks = [
    { name: "HOME", link: "#home" },
    { name: "SKILLS", link: "#skills" },
    { name: "CONTACT", link: "#contact" },
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.history.pushState({}, '', `#${id}`);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          window.history.pushState({}, '', `#${entry.target.id}`);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="nav-bar">
      {navLinks.map((navLink, index) => (
        <Navlink
          key={index}
          name={navLink.name}
          link={navLink.link}
          clickFn={() => handleScroll(navLink.link)}
        />
      ))}
    </div>
  );
}

export default Navbar;
