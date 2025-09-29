import { useState } from 'react';

const AboutContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  // Responsive styles
  const sectionStyle = { 
    padding: '2rem 1rem', 
    maxWidth: '1200px', 
    margin: '0 auto',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  };
  
  const headingStyle = { 
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)', 
    fontWeight: '700', 
    marginBottom: '1rem', 
    color: '#1F2937', 
    textAlign: 'center',
    lineHeight: '1.2'
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
  
  const containerStyle = { 
    display: 'grid', 
    gridTemplateColumns: '1fr', 
    gap: '3rem',
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr'
    }
  };
  
  const aboutStyle = { 
    backgroundColor: 'white', 
    borderRadius: '0.75rem', 
    padding: '2rem', 
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', 
    border: '1px solid #E5E7EB',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '@media (min-width: 768px)': {
      padding: '2.5rem'
    }
  };
  
  const aboutHeadingStyle = { 
    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)', 
    fontWeight: '700', 
    marginBottom: '1.5rem', 
    color: '#1F2937',
    position: 'relative',
    paddingBottom: '0.75rem'
  };
  
  const aboutTextStyle = { 
    color: '#4B5563', 
    lineHeight: '1.7', 
    marginBottom: '1.5rem',
    fontSize: 'clamp(0.95rem, 1.8vw, 1rem)'
  };
  
  const teamContainerStyle = { 
    display: 'grid', 
    gridTemplateColumns: '1fr', 
    gap: '2rem', 
    marginTop: '2.5rem',
    '@media (min-width: 640px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  };
  
  const teamMemberStyle = { 
    textAlign: 'center',
    padding: '1.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#F9FAFB',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    border: '1px solid #E5E7EB'
  };
  
  const avatarStyle = { 
    width: '100px', 
    height: '100px', 
    borderRadius: '50%', 
    backgroundColor: '#4F46E5', 
    color: 'white', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    fontSize: '2.5rem', 
    margin: '0 auto 1rem',
    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.2)'
  };
  
  const nameStyle = { 
    fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
    fontWeight: '700', 
    marginBottom: '0.5rem',
    color: '#1F2937'
  };
  
  const roleStyle = { 
    color: '#4F46E5', 
    marginBottom: '0.75rem',
    fontWeight: '600',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
  };
  
  const bioStyle = { 
    color: '#4B5563', 
    fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)', 
    lineHeight: '1.6',
    marginBottom: '1.25rem'
  };
  
  const contactStyle = { 
    backgroundColor: 'white', 
    borderRadius: '0.75rem', 
    padding: '2rem', 
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)', 
    border: '1px solid #E5E7EB',
    '@media (min-width: 768px)': {
      padding: '2.5rem'
    }
  };
  
  const contactHeadingStyle = { 
    fontSize: 'clamp(1.5rem, 3vw, 1.75rem)', 
    fontWeight: '700', 
    marginBottom: '1.5rem', 
    color: '#1F2937',
    position: 'relative',
    paddingBottom: '0.75rem'
  };
  
  const formStyle = { 
    marginBottom: '2.5rem' 
  };
  
  const formGroupStyle = { 
    marginBottom: '1.5rem' 
  };
  
  const labelStyle = { 
    display: 'block', 
    marginBottom: '0.5rem', 
    fontWeight: '600', 
    color: '#374151',
    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)'
  };
  
  const inputStyle = { 
    width: '100%', 
    padding: '0.875rem 1rem', 
    border: '1px solid #D1D5DB', 
    borderRadius: '0.5rem', 
    fontSize: '1rem',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    backgroundColor: '#F9FAFB',
    ':focus': {
      outline: 'none',
      borderColor: '#4F46E5',
      boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)'
    }
  };
  
  const textareaStyle = { 
    width: '100%', 
    padding: '0.875rem 1rem', 
    border: '1px solid #D1D5DB', 
    borderRadius: '0.5rem', 
    fontSize: '1rem', 
    minHeight: '140px', 
    resize: 'vertical',
    transition: 'border-color 0.3s, box-shadow 0.3s',
    backgroundColor: '#F9FAFB',
    ':focus': {
      outline: 'none',
      borderColor: '#4F46E5',
      boxShadow: '0 0 0 3px rgba(79, 70, 229, 0.1)'
    }
  };
  
  const buttonStyle = { 
    backgroundColor: '#4F46E5', 
    color: 'white', 
    border: 'none', 
    padding: '0.875rem 1.75rem', 
    borderRadius: '0.5rem', 
    fontWeight: '600', 
    cursor: 'pointer', 
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 10px rgba(79, 70, 229, 0.3)',
    ':hover': {
      backgroundColor: '#4338CA',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(79, 70, 229, 0.4)'
    },
    ':active': {
      transform: 'translateY(0)'
    }
  };
  
  const infoStyle = { 
    marginTop: '2.5rem',
    padding: '1.5rem',
    backgroundColor: '#F9FAFB',
    borderRadius: '0.75rem',
    border: '1px solid #E5E7EB'
  };
  
  const infoItemStyle = { 
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: '1.25rem',
    padding: '0.75rem',
    borderRadius: '0.5rem',
    transition: 'background-color 0.3s',
    ':hover': {
      backgroundColor: '#F3F4F6'
    }
  };
  
  const infoIconStyle = { 
    fontSize: '1.5rem', 
    marginRight: '1rem', 
    color: '#4F46E5',
    minWidth: '30px'
  };
  
  const infoTextStyle = { 
    color: '#4B5563',
    fontSize: 'clamp(0.95rem, 1.8vw, 1rem)',
    lineHeight: '1.5'
  };
  
  const whatsappButtonStyle = { 
    backgroundColor: '#25D366', 
    color: 'white', 
    border: 'none', 
    padding: '0.875rem 1.5rem', 
    borderRadius: '0.5rem', 
    fontWeight: '600', 
    cursor: 'pointer', 
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)',
    ':hover': {
      backgroundColor: '#128C7E',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 15px rgba(37, 211, 102, 0.4)'
    },
    ':active': {
      transform: 'translateY(0)'
    }
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>About & Contact</h1>
      <p style={subheadingStyle}>Learn more about our mission and get in touch with our team.</p>
      
      <div style={containerStyle}>
        <div style={aboutStyle}>
          <h2 style={aboutHeadingStyle}>About Master App</h2>
          <p style={aboutTextStyle}>
            Master App is your all-in-one platform for business ideas, learning resources, and growth strategies. 
            We're dedicated to providing entrepreneurs and learners with the tools they need to succeed.
          </p>
          <p style={aboutTextStyle}>
            Our mission is to empower individuals with knowledge and resources that transform ideas into reality. 
            We believe in the power of education and community to drive innovation and success.
          </p>
          
          <h3 style={{ 
            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
            fontWeight: '700', 
            marginBottom: '1.5rem', 
            color: '#1F2937',
            position: 'relative',
            paddingBottom: '0.75rem',
            ':after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              left: '0',
              width: '50px',
              height: '3px',
              backgroundColor: '#4F46E5',
              borderRadius: '2px'
            }
          }}>Our Team</h3>
          
          <div style={teamContainerStyle}>
            <div style={teamMemberStyle}>
              <div style={avatarStyle}>👨‍💼</div>
              <h4 style={nameStyle}>Gibson</h4>
              <p style={roleStyle}>Co-Founder</p>
              <p style={bioStyle}>Visionary and strategist behind Zoka Digital.</p>
              <a href="https://wa.me/254721635810" target="_blank" rel="noopener noreferrer">
                <button style={whatsappButtonStyle}>💬 WhatsApp Me</button>
              </a>
            </div>
            
            <div style={teamMemberStyle}>
              <div style={avatarStyle}>👨‍💼</div>
              <h4 style={nameStyle}>Javen Festus</h4>
              <p style={roleStyle}>Co-Founder</p>
              <p style={bioStyle}>Tech enthusiast and growth partner at Zoka Digital.</p>
              <a href="https://wa.me/254704506403" target="_blank" rel="noopener noreferrer">
                <button style={whatsappButtonStyle}>💬 WhatsApp Me</button>
              </a>
            </div>
          </div>
        </div>
        
        <div style={contactStyle}>
          <h2 style={contactHeadingStyle}>Contact Us</h2>
          
          <form onSubmit={handleSubmit} style={formStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                style={inputStyle} 
                placeholder="Your full name"
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
                style={inputStyle} 
                placeholder="your.email@example.com"
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
                style={inputStyle} 
                placeholder="What's this about?"
              />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required 
                style={textareaStyle}
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
          
          <div style={infoStyle}>
            <h3 style={{ 
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', 
              fontWeight: '700', 
              marginBottom: '1.5rem', 
              color: '#1F2937',
              position: 'relative',
              paddingBottom: '0.75rem',
              ':after': {
                content: '""',
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '50px',
                height: '3px',
                backgroundColor: '#4F46E5',
                borderRadius: '2px'
              }
            }}>Get in Touch</h3>
            
            <div style={infoItemStyle}>
              <div style={infoIconStyle}>📧</div>
              <div style={infoTextStyle}>
                <strong>Email:</strong> streetzoka@gmail.com
              </div>
            </div>
            
            <div style={infoItemStyle}>
              <div style={infoIconStyle}>📱</div>
              <div style={infoTextStyle}>
                <strong>WhatsApp:</strong> 0721635810 / +254 704 506403
              </div>
            </div>
            
            <a href="https://wa.me/254721635810" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button style={whatsappButtonStyle}>📱 Chat on WhatsApp</button>
            </a>
          </div>
        </div>
      </div>
      
      {/* Add CSS for responsive design and animations */}
      <style jsx>{`
        @media (min-width: 768px) {
          .container {
            grid-template-columns: 1fr 1fr;
          }
          
          .about-section, .contact-section {
            padding: 2.5rem;
          }
        }
        
        @media (min-width: 640px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        
        .team-member:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        input:focus, textarea:focus {
          outline: none;
          border-color: #4F46E5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }
        
        .info-item:hover {
          background-color: #F3F4F6;
        }
        
        h2:after, h3:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 50px;
          height: 3px;
          background-color: #4F46E5;
          border-radius: 2px;
        }
      `}</style>
    </div>
  );
};

export default AboutContactPage;