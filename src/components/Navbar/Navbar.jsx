import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setClick(false); // Cierra el menú después de hacer clic en un enlace
    }
  };

  return (
    <div className="header">
      <div className="container">
        <h1 className="Text-nav">Crypto's</h1>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <a href="#home" onClick={() => scrollToSection('Home')}>
              Inicio
            </a>
          </li>
          <li>
            <a href="#values" onClick={() => scrollToSection('Values')}>
              Valores
            </a>
          </li>
          <li>
            <a href="#crypto" onClick={() => scrollToSection('Crypto')}>
              Crypto
            </a>
          </li>
          <li>
            <a href="#contacto" onClick={() => scrollToSection('Contacto')}>
              Contacto
            </a>
          </li>
        </ul>

        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={20} style={{ color: '#333333' }} />
          ) : (
            <FaBars size={20} style={{ color: '#333333' }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;