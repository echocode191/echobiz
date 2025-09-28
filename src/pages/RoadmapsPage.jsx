import { roadmaps } from '../data/roadmapsData';
import LockIcon from '../components/LockIcon';
import WhatsAppButton from '../components/WhatsAppButton';

const RoadmapsPage = () => {
  const sectionStyle = {
    padding: '2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headingStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    textAlign: 'center'
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: '1.125rem',
    color: '#4B5563',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '0 auto 3rem'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1.5rem'
  };

  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    transition: 'transform 0.3s, box-shadow 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    overflow: 'hidden'
  };

  const bestSellerBadgeStyle = {
    position: 'absolute',
    top: '0',
    right: '0',
    backgroundColor: '#F59E0B',
    color: 'white',
    padding: '0.25rem 1rem',
    fontSize: '0.75rem',
    fontWeight: 'bold'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1F2937',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

  const descriptionStyle = {
    color: '#4B5563',
    marginBottom: '1rem',
    flexGrow: 1
  };

  const contentStyle = {
    color: '#6B7280',
    fontSize: '0.875rem',
    marginBottom: '1rem',
    fontStyle: 'italic'
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const categoryStyle = {
    backgroundColor: '#EEF2FF',
    color: '#4F46E5',
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: '500'
  };

  const stepsStyle = {
    fontSize: '0.875rem',
    color: '#6B7280'
  };

  const priceStyle = {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#10B981'
  };

  const buttonStyle = {
    backgroundColor: '#4F46E5',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  const freeButtonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Roadmaps ⭐ BEST SELLER</h1>
      <p style={subheadingStyle}>
        Free short roadmap previews and paid detailed roadmaps for career and business success.
      </p>
      
      <div style={gridStyle}>
        {roadmaps.map(roadmap => (
          <div key={roadmap.id} style={cardStyle}>
            {roadmap.isPaid && <div style={bestSellerBadgeStyle}>BEST SELLER</div>}
            <h3 style={titleStyle}>
              {roadmap.title}
              {roadmap.isPaid && <LockIcon />}
            </h3>
            <p style={descriptionStyle}>{roadmap.description}</p>
            <p style={contentStyle}>{roadmap.content}</p>
            <div style={metaStyle}>
              <span style={categoryStyle}>{roadmap.category}</span>
              <span style={stepsStyle}>{roadmap.steps} steps</span>
            </div>
            {roadmap.isPaid ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={priceStyle}>{roadmap.price}</span>
                <WhatsAppButton itemName={roadmap.title} price={roadmap.price} />
              </div>
            ) : (
              <button style={freeButtonStyle}>View Free</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapsPage;