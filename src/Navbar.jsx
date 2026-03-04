import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const services = [
    'Embroidery',
    'Sequins',
    'Cording',
    'DTF',
    'Screen Printing',
    'Laser Cutting'
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img 
            src="https://github.com/randr2405/ImagesforPOS/blob/main/Screenshot%202025-11-23%20140447.png?raw=true" 
            alt="Distinct Embroidery Logo" 
            className="logo-image"
          />
        </a>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
          </li>
          
          <li className="navbar-item">
            <a href="/about" className="navbar-link">About Us</a>
          </li>
          
          <li 
            className="navbar-item dropdown"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="navbar-link dropdown-toggle">
              Services
              <svg 
                className={`dropdown-icon ${servicesOpen ? 'rotate' : ''}`}
                width="12" 
                height="12" 
                viewBox="0 0 12 12" 
                fill="none"
              >
                <path 
                  d="M2 4L6 8L10 4" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
              </svg>
            </button>
            
            <ul className={`dropdown-menu ${servicesOpen ? 'show' : ''}`}>
              {services.map((service, index) => (
                <li key={index} className="dropdown-item">
                  <a 
                    href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                    className="dropdown-link"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          
          <li className="navbar-item">
            <a href="/contact" className="navbar-link navbar-link-cta">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;