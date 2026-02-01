import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark navbar-custom fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          KYBA
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/') ? 'active' : ''}`} 
                to="/"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/menu') ? 'active' : ''}`} 
                to="/menu"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`} 
                to="/contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link ${isActive('/reservation') ? 'active' : ''}`} 
                to="/reservation"
                onClick={() => setIsOpen(false)}
              >
                <button className="btn btn-primary-custom btn-sm">
                  Book a Table
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
