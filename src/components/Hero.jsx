import { Link } from 'react-router-dom';

const Hero = () => {
  const heroStyle = {
    padding: '5rem 2rem',
    textAlign: 'center',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    borderRadius: '0 0 2rem 2rem'
  };

  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto'
  };

  const headingStyle = {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1.5rem',
    lineHeight: '1.2'
  };

  const subheadingStyle = {
    fontSize: '1.25rem',
    marginBottom: '2rem',
    opacity: 0.9,
    lineHeight: '1.6'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
    flexWrap: 'wrap'
  };

  const primaryButtonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.2s'
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '0.75rem 2rem',
    borderRadius: '0.5rem',
    fontSize: '1.125rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s'
  };

  return (
    <div style={heroStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Master Your Business & Learning Journey</h1>
        <p style={subheadingStyle}>
          Access business ideas, roadmaps, courses, and resources to accelerate your growth and success.
        </p>
        <div style={buttonContainerStyle}>
          <Link to="/business-ideas"><button style={primaryButtonStyle}>Explore Ideas</button></Link>
          <Link to="/roadmaps"><button style={secondaryButtonStyle}>Best Seller Roadmaps</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;