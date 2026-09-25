import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <Link to="/" className="brand" onClick={closeMenu}>
        <span className="brand-mark">GQ</span>

        <span className="brand-name">
          THE GENTLEMEN'S
          <strong>QUARTERS</strong>
        </span>
      </Link>

      <nav className="nav-links">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/barbers" onClick={closeMenu}>
          Barbers
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      <Link to="/booking" className="header-book" onClick={closeMenu}>
        Book Now
      </Link>

      <button
        className={`mobile-menu-button ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
        <Link to="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link to="/barbers" onClick={closeMenu}>
          Barbers
        </Link>
        <Link to="/contact" onClick={closeMenu}>
          Contact
        </Link>
        <Link to="/booking" className="mobile-book" onClick={closeMenu}>
          Book Now
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
