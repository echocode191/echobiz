import { Link } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [counters, setCounters] = useState({
    entrepreneurs: 0,
    roadmaps: 0,
    successRate: 0,
    resources: 0
  });
  const sectionRef = useRef(null);

  // Animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Counter animation
  useEffect(() => {
    if (!visible) return;
    
    const duration = 2000; // 2 seconds
    const steps = 30;
    const interval = duration / steps;
    
    const entrepreneursTarget = 15000;
    const roadmapsTarget = 750;
    const successRateTarget = 96;
    const resourcesTarget = 5000;
    
    let step = 0;
    const counterInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        entrepreneurs: Math.floor(entrepreneursTarget * progress),
        roadmaps: Math.floor(roadmapsTarget * progress),
        successRate: Math.floor(successRateTarget * progress),
        resources: Math.floor(resourcesTarget * progress)
      });
      
      if (step >= steps) {
        clearInterval(counterInterval);
        setCounters({
          entrepreneurs: entrepreneursTarget,
          roadmaps: roadmapsTarget,
          successRate: successRateTarget,
          resources: resourcesTarget
        });
      }
    }, interval);
    
    return () => clearInterval(counterInterval);
  }, [visible]);

  // Floating animation for elements
  const FloatingElement = ({ children, delay = 0, duration = 3 }) => (
    <div 
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        display: 'inline-block'
      }}
    >
      {children}
    </div>
  );

  // Particle background
  const Particles = () => {
    const particles = Array.from({ length: 20 });
    
    return (
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: 0
      }}>
        {particles.map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              borderRadius: '50%',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
    );
  };

  const heroStyle = {
    padding: '8rem 1rem 6rem',
    textAlign: 'center',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #5b73e8 50%, #4e54c8 75%, #667eea 100%)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 15s ease infinite'
  };

  const containerStyle = {
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 1,
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 1.2s ease, transform 1.2s ease'
  };

  const headingStyle = {
    fontSize: 'clamp(2.5rem, 8vw, 4rem)',
    fontWeight: '800',
    marginBottom: '1.5rem',
    lineHeight: '1.2',
    letterSpacing: '-0.5px',
    textShadow: '0 2px 10px rgba(0,0,0,0.2)'
  };

  const subheadingStyle = {
    fontSize: 'clamp(1.1rem, 3vw, 1.4rem)',
    marginBottom: '3rem',
    opacity: 0.95,
    lineHeight: '1.6',
    maxWidth: '800px',
    margin: '0 auto 3rem'
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    flexWrap: 'wrap',
    marginBottom: '4rem'
  };

  const primaryButtonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '0.6rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(16,185,129,0.4)',
    transition: 'transform 0.3s, box-shadow 0.3s',
    outline: 'none',
    position: 'relative',
    overflow: 'hidden',
    zIndex: 1
  };

  const secondaryButtonStyle = {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '1rem 2.5rem',
    borderRadius: '0.6rem',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s',
    outline: 'none',
    position: 'relative',
    zIndex: 1
  };

  const statsContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '3rem',
    paddingTop: '3rem',
    borderTop: '1px solid rgba(255,255,255,0.2)'
  };

  const statItemStyle = {
    textAlign: 'center',
    minWidth: '150px'
  };

  const statNumberStyle = {
    fontSize: 'clamp(2rem, 5vw, 3rem)',
    fontWeight: '800',
    marginBottom: '0.5rem',
    color: '#fcd34d'
  };

  const statLabelStyle = {
    fontSize: '1.1rem',
    opacity: 0.9
  };

  const featuresContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    margin: '4rem 0',
    maxWidth: '1000px',
    margin: '4rem auto'
  };

  const featureStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    borderRadius: '0.75rem',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  };

  const featureIconStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem'
  };

  const featureTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '700',
    marginBottom: '0.5rem',
    color: '#fcd34d'
  };

  const featureDescStyle = {
    fontSize: '0.95rem',
    opacity: 0.9,
    lineHeight: '1.5'
  };

  const testimonialStyle = {
    maxWidth: '700px',
    margin: '4rem auto 0',
    padding: '1.5rem',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '1rem',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)',
    fontStyle: 'italic',
    position: 'relative'
  };

  const testimonialQuoteStyle = {
    position: 'absolute',
    top: '-20px',
    left: '20px',
    fontSize: '3rem',
    opacity: 0.3
  };

  const testimonialAuthorStyle = {
    marginTop: '1rem',
    fontWeight: '600',
    textAlign: 'right'
  };

  // Button hover effects
  const hoverInPrimary = e => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 15px 30px rgba(16,185,129,0.5)';
  };
  
  const hoverOutPrimary = e => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 25px rgba(16,185,129,0.4)';
  };

  const hoverInSecondary = e => {
    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.2)';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };
  
  const hoverOutSecondary = e => {
    e.currentTarget.style.backgroundColor = 'transparent';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const features = [
    {
      icon: '💡',
      title: 'Business Ideas',
      description: 'Daily innovative business concepts with free previews and detailed paid guides'
    },
    {
      icon: '🗺️',
      title: 'Roadmaps',
      description: 'Strategic career and business roadmaps with free previews and comprehensive paid versions'
    },
    {
      icon: '📚',
      title: 'eBooks',
      description: 'Extensive library of business knowledge with free samples and complete paid editions'
    },
    {
      icon: '📖',
      title: 'Storybooks',
      description: 'Motivational success stories with free excerpts and full inspiring narratives'
    },
    {
      icon: '🎓',
      title: 'Course Ideas',
      description: 'Trending course concepts with free outlines and complete paid curriculum plans'
    },
    {
      icon: '🛠️',
      title: 'Toolkits',
      description: 'Essential business tools and templates to streamline your entrepreneurial journey'
    },
    {
      icon: '📋',
      title: 'Guides',
      description: 'Step-by-step practical guides for business success with free and premium options'
    },
    {
      icon: '⚡',
      title: 'Mini Courses',
      description: 'Quick skill-building courses and comprehensive training programs for all levels'
    },
    {
      icon: '👥',
      title: 'Community',
      description: 'Connect with entrepreneurs and experts to grow your network and knowledge'
    }
  ];

  return (
    <div style={heroStyle} ref={sectionRef}>
      {/* Keyframe animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% {background-position:0% 50%;}
            50% {background-position:100% 50%;}
            100% {background-position:0% 50%;}
          }
          
          @keyframes float {
            0% {transform: translateY(0px) rotate(0deg);}
            50% {transform: translateY(-20px) rotate(5deg);}
            100% {transform: translateY(0px) rotate(0deg);}
          }
          
          @keyframes pulse {
            0% {box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);}
            70% {box-shadow: 0 0 0 15px rgba(16, 185, 129, 0);}
            100% {box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);}
          }
          
          .pulse-button {
            animation: pulse 2s infinite;
          }
          
          .feature-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }
        `}
      </style>

      {/* Particle background */}
      <Particles />

      <div style={containerStyle}>
        {/* Floating icon */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          fontSize: '3rem',
          opacity: 0.7,
          transform: 'rotate(15deg)'
        }}>
          <FloatingElement duration={4}>🚀</FloatingElement>
        </div>

        <h1 style={headingStyle}>
          Transform Your Business <span style={{ color: '#fcd34d' }}>Ideas into Reality</span>
        </h1>
        
        <p style={subheadingStyle}>
          The ultimate platform for entrepreneurs with business ideas, strategic roadmaps, 
          educational resources, and a supportive community to accelerate your success.
        </p>

        <div style={buttonContainerStyle}>
          <Link to="/business-ideas">
            <button
              style={{...primaryButtonStyle, animation: 'pulse 2s infinite'}}
              className="pulse-button"
              onMouseEnter={hoverInPrimary}
              onMouseLeave={hoverOutPrimary}
            >
              Explore Business Ideas
            </button>
          </Link>
          <Link to="/roadmaps">
            <button
              style={secondaryButtonStyle}
              onMouseEnter={hoverInSecondary}
              onMouseLeave={hoverOutSecondary}
            >
              View Pro Roadmaps
            </button>
          </Link>
        </div>

        {/* Features Overview */}
        <h2 style={{fontSize: 'clamp(1.8rem, 4vw, 2.2rem)', marginBottom: '2rem', color: '#fcd34d'}}>
          Everything You Need to Succeed
        </h2>
        
        <div style={featuresContainerStyle}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              style={featureStyle}
              className="feature-card"
            >
              <div style={featureIconStyle}>{feature.icon}</div>
              <h3 style={featureTitleStyle}>{feature.title}</h3>
              <p style={featureDescStyle}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats section */}
        <div style={statsContainerStyle}>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>{counters.entrepreneurs}+</div>
            <div style={statLabelStyle}>Happy Entrepreneurs</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>{counters.roadmaps}+</div>
            <div style={statLabelStyle}>Business Roadmaps</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>{counters.resources}+</div>
            <div style={statLabelStyle}>Learning Resources</div>
          </div>
          <div style={statItemStyle}>
            <div style={statNumberStyle}>{counters.successRate}%</div>
            <div style={statLabelStyle}>Success Rate</div>
          </div>
        </div>

        {/* Testimonial */}
        <div style={testimonialStyle}>
          <div style={testimonialQuoteStyle}>"</div>
          <p>
            This platform completely transformed my business trajectory. The roadmaps are invaluable and 
            the resources helped me scale from a side hustle to a six-figure business in under a year!
          </p>
          <div style={testimonialAuthorStyle}>
            — Sarah T., Founder of TechStart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;