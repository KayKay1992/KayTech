import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/kaytechLogo.png";

function Navbar() {
  const [navState, setNavState] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavState = () => {
    setNavState(!navState);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setNavState(false); // Close mobile menu after clicking
    }
  };

  return (
    <div>
      <nav className={`${sticky ? "nav-dark" : ""}`}>
        <div className="nav-brand">
          <img src={logo} alt="KayTech Logo" />
        </div>
        <ul className={`nav-links ${navState ? "open" : ""}`}>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('courses')}>Courses</li>
          <li onClick={() => scrollToSection('contact')}>Contact</li>
          <li onClick={() => scrollToSection('about')}>About</li>
          <li onClick={() => scrollToSection('gallery')}>Gallery</li>
          <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
          <li onClick={() => scrollToSection('registration')}>Course Registration</li>
        </ul>
        <div
          className={`menu-icon ${navState ? "open" : ""}`}
          onClick={handleNavState}
          aria-label={navState ? "Close menu" : "Open menu"}
          role="button"
          tabIndex={0}
        >
          <div className="menu-icons">
            <span className="icon"></span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

