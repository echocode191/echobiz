import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import BusinessIdeas from '../components/BusinessIdeas';
import Roadmaps from '../components/Roadmaps';
import Ebooks from '../components/Ebooks';
import Storybooks from '../components/Storybooks';
import CourseIdeas from '../components/CourseIdeas';
import Toolkits from '../components/Toolkits';
import Guides from '../components/Guides';
import MiniCourses from '../components/MiniCourses';
import Community from '../components/Community';

const Home = () => {
  const [visibleSections, setVisibleSections] = useState({});
  
  useEffect(() => {
    // Set up intersection observer to animate sections as they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => ({
            ...prev,
            [entry.target.id]: true
          }));
        }
      });
    }, { threshold: 0.1 });

    // Observe all sections
    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  const sectionStyle = {
    padding: '4rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease'
  };

  const sectionVisibleStyle = {
    opacity: 1,
    transform: 'translateY(0)'
  };

  const headingStyle = {
    fontSize: 'clamp(2rem, 5vw, 2.5rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '0.75rem'
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: '#4B5563',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '0 auto 3rem',
    lineHeight: '1.6'
  };

  const ctaSectionStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '1rem',
    padding: '4rem 2rem',
    textAlign: 'center',
    marginTop: '4rem',
    position: 'relative',
    overflow: 'hidden'
  };

  const ctaHeadingStyle = {
    fontSize: 'clamp(1.8rem, 4vw, 2.2rem)',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    position: 'relative',
    zIndex: 2
  };

  const ctaSubheadingStyle = {
    fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
    color: '#4B5563',
    marginBottom: '2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem',
    lineHeight: '1.6',
    position: 'relative',
    zIndex: 2
  };

  const ctaButtonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '1rem 2.5rem',
    borderRadius: '0.5rem',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 10px 25px rgba(16,185,129,0.4)',
    transition: 'all 0.3s ease',
    display: 'inline-block',
    position: 'relative',
    zIndex: 2
  };

  const sectionHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '0.5rem'
  };

  const sectionIconStyle = {
    fontSize: '1.75rem',
    marginRight: '0.75rem'
  };

  return (
    <div>
      <Hero />
      
      {/* Introduction Section */}
      <div 
        id="intro-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['intro-section'] ? sectionVisibleStyle : {}), backgroundColor: '#f9fafb', borderRadius: '1rem', margin: '3rem auto'}}
      >
        <h2 style={{...headingStyle, color: '#4F46E5'}}>Your Complete Entrepreneurial Toolkit</h2>
        <p style={subheadingStyle}>
          Master App provides everything you need to transform your business ideas into successful ventures. 
          From inspiration to implementation, we've got you covered with comprehensive resources and expert guidance.
        </p>
      </div>

      {/* Business Ideas Section */}
      <div 
        id="business-ideas-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['business-ideas-section'] ? sectionVisibleStyle : {})}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>💡</span>
          <h2 style={headingStyle}>Business Ideas</h2>
        </div>
        <p style={subheadingStyle}>
          Discover innovative business concepts with our daily "Business Idea of the Day" feature. 
          Get free previews of trending opportunities and access detailed paid guides with implementation strategies.
        </p>
        <BusinessIdeas />
      </div>

      {/* Roadmaps Section */}
      <div 
        id="roadmaps-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['roadmaps-section'] ? sectionVisibleStyle : {}), backgroundColor: '#f0f9ff'}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>🗺️</span>
          <h2 style={headingStyle}>Roadmaps ⭐ BEST SELLER</h2>
        </div>
        <p style={subheadingStyle}>
          Navigate your entrepreneurial journey with our strategic roadmaps. Access free previews of career 
          and business paths, then unlock comprehensive paid roadmaps with detailed milestones and action plans.
        </p>
        <Roadmaps />
      </div>

      {/* Ebooks Section */}
      <div 
        id="ebooks-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['ebooks-section'] ? sectionVisibleStyle : {})}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>📚</span>
          <h2 style={headingStyle}>eBooks</h2>
        </div>
        <p style={subheadingStyle}>
          Expand your knowledge with our extensive ebook library. Sample free chapters and mini PDFs, 
          then dive into complete paid ebooks covering business strategies, financial management, and growth techniques.
        </p>
        <Ebooks />
      </div>

      {/* Storybooks Section */}
      <div 
        id="storybooks-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['storybooks-section'] ? sectionVisibleStyle : {}), backgroundColor: '#f0fdf4'}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>📖</span>
          <h2 style={headingStyle}>Storybooks</h2>
        </div>
        <p style={subheadingStyle}>
          Get inspired by real entrepreneurial journeys. Read free short motivational stories and access 
          full paid storybooks detailing how successful entrepreneurs overcame challenges and achieved their dreams.
        </p>
        <Storybooks />
      </div>

      {/* Course Ideas Section */}
      <div 
        id="course-ideas-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['course-ideas-section'] ? sectionVisibleStyle : {})}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>🎓</span>
          <h2 style={headingStyle}>Course Ideas</h2>
        </div>
        <p style={subheadingStyle}>
          Stay ahead with trending course concepts. Explore free course ideas and unlock complete paid outlines 
          with detailed syllabi, lesson plans, and learning resources for your educational journey.
        </p>
        <CourseIdeas />
      </div>

      {/* Toolkits Section */}
      <div 
        id="toolkits-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['toolkits-section'] ? sectionVisibleStyle : {}), backgroundColor: '#fef2f2'}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>🛠️</span>
          <h2 style={headingStyle}>Toolkits</h2>
        </div>
        <p style={subheadingStyle}>
          Streamline your workflow with essential business tools and templates. Access free resources for 
          planning, tracking, and managing your business operations with our practical toolkits.
        </p>
        <Toolkits />
      </div>

      {/* Guides Section */}
      <div 
        id="guides-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['guides-section'] ? sectionVisibleStyle : {})}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>📋</span>
          <h2 style={headingStyle}>Guides</h2>
        </div>
        <p style={subheadingStyle}>
          Master essential business skills with our step-by-step guides. Get practical instructions for 
          everything from market research to scaling your business, with both free and premium options.
        </p>
        <Guides />
      </div>

      {/* Mini Courses Section */}
      <div 
        id="mini-courses-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['mini-courses-section'] ? sectionVisibleStyle : {}), backgroundColor: '#f0f9ff'}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>⚡</span>
          <h2 style={headingStyle}>Mini Courses</h2>
        </div>
        <p style={subheadingStyle}>
          Build skills quickly with our focused mini courses. Access free quick lessons and comprehensive 
          paid training programs designed to accelerate your learning and business growth.
        </p>
        <MiniCourses />
      </div>

      {/* Community Section */}
      <div 
        id="community-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['community-section'] ? sectionVisibleStyle : {})}}
      >
        <div style={sectionHeaderStyle}>
          <span style={sectionIconStyle}>👥</span>
          <h2 style={headingStyle}>Community</h2>
        </div>
        <p style={subheadingStyle}>
          Connect with a network of entrepreneurs and business experts. Share experiences, get advice, 
          and collaborate with like-minded individuals on your entrepreneurial journey.
        </p>
        <Community />
      </div>

      {/* CTA Section */}
      <div style={ctaSectionStyle}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: 'rgba(16, 185, 129, 0.1)',
          zIndex: 1
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '-70px',
          left: '-30px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'rgba(79, 70, 229, 0.1)',
          zIndex: 1
        }}></div>
        
        <h2 style={ctaHeadingStyle}>Ready to Transform Your Business?</h2>
        <p style={ctaSubheadingStyle}>
          Join thousands of entrepreneurs who are already growing their businesses with Master App. 
          Get access to all our resources and start your journey to success today.
        </p>
        <Link to="/roadmaps">
          <button style={ctaButtonStyle}>
            Get Started Today
          </button>
        </Link>
      </div>

      {/* Add keyframes for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          h2:after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 3px;
            background-color: #4F46E5;
            border-radius: 2px;
          }
          
          .section-icon {
            animation: pulse 2s infinite;
          }
          
          @keyframes pulse {
            0% {transform: scale(1);}
            50% {transform: scale(1.1);}
            100% {transform: scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default Home;