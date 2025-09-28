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

  const sectionStyle = { padding: '2rem', maxWidth: '1200px', margin: '0 auto' };
  const headingStyle = { fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937', textAlign: 'center' };
  const subheadingStyle = { textAlign: 'center', fontSize: '1.125rem', color: '#4B5563', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' };
  const containerStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' };
  const aboutStyle = { backgroundColor: 'white', borderRadius: '0.5rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB' };
  const aboutHeadingStyle = { fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937' };
  const aboutTextStyle = { color: '#4B5563', lineHeight: '1.6', marginBottom: '1.5rem' };
  const teamContainerStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' };
  const teamMemberStyle = { textAlign: 'center' };
  const avatarStyle = { width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#4F46E5', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', margin: '0 auto 1rem' };
  const nameStyle = { fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '0.5rem' };
  const roleStyle = { color: '#4F46E5', marginBottom: '0.5rem' };
  const bioStyle = { color: '#4B5563', fontSize: '0.875rem', lineHeight: '1.5' };
  const contactStyle = { backgroundColor: 'white', borderRadius: '0.5rem', padding: '2rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)', border: '1px solid #E5E7EB' };
  const contactHeadingStyle = { fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937' };
  const formStyle = { marginBottom: '2rem' };
  const formGroupStyle = { marginBottom: '1.5rem' };
  const labelStyle = { display: 'block', marginBottom: '0.5rem', fontWeight: '500', color: '#374151' };
  const inputStyle = { width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', fontSize: '1rem' };
  const textareaStyle = { width: '100%', padding: '0.75rem', border: '1px solid #D1D5DB', borderRadius: '0.375rem', fontSize: '1rem', minHeight: '120px', resize: 'vertical' };
  const buttonStyle = { backgroundColor: '#4F46E5', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', fontWeight: '600', cursor: 'pointer', fontSize: '1rem', transition: 'background-color 0.3s' };
  const infoStyle = { marginTop: '2rem' };
  const infoItemStyle = { display: 'flex', alignItems: 'center', marginBottom: '1rem' };
  const infoIconStyle = { fontSize: '1.5rem', marginRight: '1rem', color: '#4F46E5' };
  const infoTextStyle = { color: '#4B5563' };
  const whatsappButtonStyle = { backgroundColor: '#25D366', color: 'white', border: 'none', padding: '0.75rem 1.5rem', borderRadius: '0.375rem', fontWeight: '600', cursor: 'pointer', fontSize: '1rem', marginTop: '1rem', transition: 'background-color 0.3s', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' };

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
          
          <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937' }}>Our Team</h3>
          
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
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} required style={textareaStyle}></textarea>
            </div>
            <button type="submit" style={buttonStyle}>Send Message</button>
          </form>
          
          <div style={infoStyle}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1F2937' }}>Get in Touch</h3>
            
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
    </div>
  );
};

export default AboutContactPage;
