import { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/kaytechLogo.png";

function Navbar() {
  const [navState, setNavState] = useState('');
  const [sticky, setSticky] = useState('');

  useEffect(() =>{
    window.addEventListener('scroll', ()=> {
      setSticky(() => {
        return window.scrollY > 50 ? true : false;
      })
    })
  }, [])

  const handleNavState = () => {
    setNavState(!navState);
  };

  return (
    <div>
      <nav className={`${sticky ? "nav-dark" : ""}`}>
        <div className="nav-brand">
          <img src={logo} alt="" />
        </div>
        <ul className={`nav-links ${navState ? "open" : ""}`}>
          <li>Home</li>
          <li>Courses</li>
          <li>Contact</li>
          <li>About</li>
          <li>Gallery</li>
          <li>Testimonials</li>
        </ul>
        <div
          className={`menu-icon ${navState ? "open" : ""}`}
          onClick={handleNavState}
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
