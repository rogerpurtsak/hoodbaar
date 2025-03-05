import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  // sulge navbar kui vajutad eemale sellest
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" onClick={() => setIsOpen(false)}>
        <img src="hood_logo.png" alt="Logo" />
        </Link>
      </div>
      <nav className="navbar" ref={menuRef}>
        <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <ul className={`navbar-list ${isOpen ? "open" : ""}`}>
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About us</Link></li>
          <li><Link to="/contacts" onClick={() => setIsOpen(false)}>Contacts</Link></li>
          <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/location" onClick={() => setIsOpen(false)}>Location</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
