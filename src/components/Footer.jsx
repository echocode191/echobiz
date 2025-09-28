import { Link } from 'react-router-dom';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1F2937',
    color: 'white',
    padding: '3rem 2rem 1.5rem',
    marginTop: '4rem'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem'
  };

  const sectionStyle = {
    marginBottom: '1.5rem'
  };

  const headingStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#F9FAFB'
  };

  const linkStyle = {
    display: 'block',
    color: '#D1D5DB',
    textDecoration: 'none',
    marginBottom: '0.5rem',
    transition: 'color 0.3s'
  };

  const copyrightStyle = {
    textAlign: 'center',
    paddingTop: '1.5rem',
    marginTop: '1.5rem',
    borderTop: '1px solid #374151',
    color: '#9CA3AF',
    fontSize: '0.875rem'
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Master App</h3>
          <p style={{ color: '#D1D5DB', lineHeight: '1.6' }}>
            Your all-in-one platform for business ideas, learning resources, and growth strategies.
          </p>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Resources</h3>
          <Link to="/business-ideas" style={linkStyle}>Business Ideas</Link>
          <Link to="/roadmaps" style={linkStyle}>Roadmaps</Link>
          <Link to="/ebooks" style={linkStyle}>eBooks</Link>
          <Link to="/storybooks" style={linkStyle}>Storybooks</Link>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Learning</h3>
          <Link to="/course-ideas" style={linkStyle}>Course Ideas</Link>
          <Link to="/toolkits" style={linkStyle}>Toolkits</Link>
          <Link to="/guides" style={linkStyle}>Guides</Link>
          <Link to="/mini-courses" style={linkStyle}>Mini-Courses</Link>
        </div>
        
        <div style={sectionStyle}>
          <h3 style={headingStyle}>Company</h3>
          <Link to="/about-contact" style={linkStyle}>About Us</Link>
          <Link to="/about-contact" style={linkStyle}>Contact</Link>
          <Link to="/community" style={linkStyle}>Community</Link>
        </div>
      </div>
      
      <div style={copyrightStyle}>
        © {new Date().getFullYear()} Master App. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;