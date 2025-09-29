import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isMenuOpen && window.innerWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const headerStyle = {
    backgroundColor: isScrolled ? 'rgba(79, 70, 229, 0.95)' : '#4F46E5',
    backdropFilter: isScrolled ? 'blur(10px)' : 'none',
    color: 'white',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    color: 'white',
    transition: 'transform 0.3s ease'
  };

  const logoHoverStyle = {
    transform: 'scale(1.05)'
  };

  const navStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem'
  };

  const navLinksStyle = {
    display: 'flex',
    alignItems: 'center',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    gap: '0.25rem'
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    padding: '0.75rem 1rem',
    borderRadius: '0.5rem',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden'
  };

  const buttonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.5rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    textDecoration: 'none',
    display: 'inline-block',
    boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)'
  };

  const buttonHoverStyle = {
    backgroundColor: '#059669',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 12px rgba(16, 185, 129, 0.4)'
  };

  // Modern Hamburger Toggler
  const TogglerButton = ({ isOpen, onClick }) => (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '0.5rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '2.5rem',
        height: '2.5rem',
        borderRadius: '0.5rem',
        transition: 'all 0.3s ease'
      }}
      className="nav-toggler"
    >
      <span
        style={{
          display: 'block',
          width: '1.5rem',
          height: '0.125rem',
          backgroundColor: 'white',
          borderRadius: '0.125rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'rotate(45deg) translate(0.375rem, 0.375rem)' : 'none',
          marginBottom: isOpen ? '0' : '0.25rem'
        }}
      />
      <span
        style={{
          display: 'block',
          width: '1.5rem',
          height: '0.125rem',
          backgroundColor: 'white',
          borderRadius: '0.125rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          opacity: isOpen ? 0 : 1,
          transform: isOpen ? 'translateX(-1rem)' : 'none'
        }}
      />
      <span
        style={{
          display: 'block',
          width: '1.5rem',
          height: '0.125rem',
          backgroundColor: 'white',
          borderRadius: '0.125rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isOpen ? 'rotate(-45deg) translate(0.375rem, -0.375rem)' : 'none',
          marginTop: isOpen ? '0' : '0.25rem'
        }}
      />
    </button>
  );

  // Mobile Menu Overlay
  const MobileMenu = ({ isOpen }) => {
    if (!isOpen) return null;

    return (
      <div
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          zIndex: 999,
          animation: 'fadeIn 0.3s ease'
        }}
        onClick={() => setIsMenuOpen(false)}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            right: '0',
            width: '80%',
            maxWidth: '300px',
            height: '100%',
            backgroundColor: '#4F46E5',
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.1)',
            animation: 'slideIn 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ padding: '2rem' }}>
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center', 
              marginBottom: '2rem' 
            }}>
              <Link 
                to="/" 
                style={{ 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  color: 'white',
                  textDecoration: 'none' 
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                🌍 Master App
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'white',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  padding: '0.5rem',
                  borderRadius: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                ✕
              </button>
            </div>
            
            <nav>
              <ul style={{ 
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {[
                  { to: '/', text: 'Home' },
                  { to: '/home', text: 'Original Home' },
                  { to: '/business-ideas', text: 'Business Ideas' },
                  { to: '/roadmaps', text: 'Roadmaps' },
                  { to: '/ebooks', text: 'eBooks' },
                  { to: '/storybooks', text: 'Storybooks' },
                  { to: '/course-ideas', text: 'Course Ideas' }, 
                  { to: '/about-contact', text: 'About' }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.to}
                      style={{
                        color: 'white',
                        textDecoration: 'none',
                        fontWeight: '500',
                        padding: '1rem',
                        borderRadius: '0.5rem',
                        display: 'block',
                        transition: 'all 0.3s ease',
                        transform: 'translateX(0)'
                      }}
                      onClick={() => setIsMenuOpen(false)}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.transform = 'translateX(0.5rem)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.transform = 'translateX(0)';
                      }}
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div style={{ 
                marginTop: '2rem', 
                paddingTop: '2rem', 
                borderTop: '1px solid rgba(255, 255, 255, 0.2)' 
              }}>
                <Link
                  to="/roadmaps"
                  style={{
                    ...buttonStyle,
                    display: 'block',
                    textAlign: 'center',
                    width: '100%'
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Best Seller
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          <Link 
            to="/" 
            style={logoStyle}
            onMouseEnter={(e) => Object.assign(e.target.style, logoHoverStyle)}
            onMouseLeave={(e) => Object.assign(e.target.style, { transform: 'scale(1)' })}
          >
            <span style={{ marginRight: '0.5rem' }}>🌍</span>
            Master App
          </Link>
          
          {/* Desktop Navigation */}
          <nav style={navStyle} className="desktop-nav">
            <ul style={navLinksStyle}>
              {[
                { to: '/', text: 'Home' },
                { to: '/home', text: 'Original Home' },
                { to: '/business-ideas', text: 'Business Ideas' },
                { to: '/roadmaps', text: 'Roadmaps' },
                { to: '/ebooks', text: 'eBooks' },
                { to: '/storybooks', text: 'Storybooks' },
                { to: '/course-ideas', text: 'Course Ideas' },
                { to: '/about-contact', text: 'About' }
              ].map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.to}
                    style={linkStyle}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                    }}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
            
            <Link 
              to="/roadmaps" 
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.target.style, buttonHoverStyle)}
              onMouseLeave={(e) => Object.assign(e.target.style, { 
                backgroundColor: '#10B981', 
                transform: 'translateY(0)',
                boxShadow: '0 4px 6px rgba(16, 185, 129, 0.3)'
              })}
            >
              Best Seller
            </Link>
            
            {/* Mobile Toggler */}
            <TogglerButton 
              isOpen={isMenuOpen} 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
            />
          </nav>
        </div>
      </header>
      
      {/* Mobile Menu */}
      <MobileMenu isOpen={isMenuOpen} />
      
      {/* Add keyframe animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          
          @keyframes slideIn {
            from { transform: translateX(100%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </>
  );
};

export default Header;