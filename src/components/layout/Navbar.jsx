import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import '../../styles/layout/navbar.css';
import logo from '../../assets/logo/logo.png';

function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },   
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/atencion', label: 'Atención' },
    { path: '/gat', label: 'GAT' },
    { path: '/formaciones', label: 'Formaciones' },
    { path: '/tienda', label: 'Tienda' },
  ];

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={handleLinkClick}>
          <img src={logo} alt="Tot Teràpia logo" />
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;