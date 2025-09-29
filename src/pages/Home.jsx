// /workspaces/echobiz/src/pages/Home.jsx
import { useEffect, useState } from 'react';
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
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    textAlign: 'center',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: '1.125rem',
    color: '#4B5563',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '0 auto 3rem'
  };

  const ctaSectionStyle = {
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '1rem',
    padding: '4rem 2rem',
    textAlign: 'center',
    marginTop: '4rem'
  };

  const ctaHeadingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937'
  };

  const ctaSubheadingStyle = {
    fontSize: '1.125rem',
    color: '#4B5563',
    marginBottom: '2rem',
    maxWidth: '700px',
    margin: '0 auto 2rem'
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
    display: 'inline-block'
  };

  return (
    <div>
      <Hero />
      
      {/* Business Ideas Section */}
      <div 
        id="business-ideas-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['business-ideas-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Business Ideas</h2>
        <p style={subheadingStyle}>
          Daily/Weekly "Business Idea of the Day" - Free short versions and detailed paid guides.
        </p>
        <BusinessIdeas />
      </div>

      {/* Roadmaps Section */}
      <div 
        id="roadmaps-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['roadmaps-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Roadmaps ⭐ BEST SELLER</h2>
        <p style={subheadingStyle}>
          Free short roadmap previews and paid detailed roadmaps for career and business success.
        </p>
        <Roadmaps />
      </div>

      {/* Ebooks Section */}
      <div 
        id="ebooks-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['ebooks-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>eBooks</h2>
        <p style={subheadingStyle}>
          Free sample chapters and mini PDFs, plus complete paid ebooks on business, finance, and more.
        </p>
        <Ebooks />
      </div>

      {/* Storybooks Section */}
      <div 
        id="storybooks-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['storybooks-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Storybooks</h2>
        <p style={subheadingStyle}>
          Free short motivational stories and paid full storybooks for inspiration and learning.
        </p>
        <Storybooks />
      </div>

      {/* Course Ideas Section */}
      <div 
        id="course-ideas-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['course-ideas-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Course Ideas</h2>
        <p style={subheadingStyle}>
          Free trending course ideas and paid complete course outlines with syllabus and lesson plans.
        </p>
        <CourseIdeas />
      </div>

      {/* Toolkits Section */}
      <div 
        id="toolkits-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['toolkits-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Toolkits</h2>
        <p style={subheadingStyle}>
          Free essential tools and templates for entrepreneurs and business owners.
        </p>
        <Toolkits />
      </div>

      {/* Guides Section */}
      <div 
        id="guides-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['guides-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Guides</h2>
        <p style={subheadingStyle}>
          Free practical guides and step-by-step instructions for business success.
        </p>
        <Guides />
      </div>

      {/* Mini Courses Section */}
      <div 
        id="mini-courses-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['mini-courses-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Mini Courses</h2>
        <p style={subheadingStyle}>
          Free quick courses and paid comprehensive training programs.
        </p>
        <MiniCourses />
      </div>

      {/* Community Section */}
      <div 
        id="community-section" 
        data-animate
        style={{...sectionStyle, ...(visibleSections['community-section'] ? sectionVisibleStyle : {})}}
      >
        <h2 style={headingStyle}>Community</h2>
        <p style={subheadingStyle}>
          Connect with fellow entrepreneurs and business experts in our community.
        </p>
        <Community />
      </div>

      {/* CTA Section */}
      <div style={ctaSectionStyle}>
        <h2 style={ctaHeadingStyle}>Ready to Transform Your Business?</h2>
        <p style={ctaSubheadingStyle}>
          Join thousands of entrepreneurs who are already growing their businesses with Echobiz Pro.
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
        `}
      </style>
    </div>
  );
};

export default Home;