import { useState, useEffect } from 'react';
import { storybooks } from '../data/storybooksData';
import LockIcon from './LockIcon';
import WhatsAppButton from './WhatsAppButton';

const Storybooks = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [fullViewItem, setFullViewItem] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // simple fade-in when component mounts
    const timer = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const sectionStyle = {
    padding: '2rem 1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    opacity: loaded ? 1 : 0,
    transform: loaded ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease'
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: '1rem',
    color: '#4B5563',
    marginBottom: '2rem',
    maxWidth: '700px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '1rem',
    perspective: '1000px'
  };

  const getBookStyle = (isHovered) => ({
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '0.75rem',
    boxShadow: isHovered
      ? '0 12px 25px rgba(0,0,0,0.18)'
      : '0 6px 12px rgba(0,0,0,0.1)',
    border: '1px solid #E5E7EB',
    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transform: isHovered
      ? 'translateY(-6px) rotateX(6deg) scale(1.03)'
      : 'translateY(0) rotateX(0) scale(1)',
    position: 'relative',
    overflow: 'hidden',
    transformStyle: 'preserve-3d'
  });

  const bookCoverStyle = {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    borderRadius: '0.25rem',
    marginBottom: '0.5rem'
  };

  const bookSpineStyle = (color) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: color,
    borderRadius: '0.375rem 0 0 0.375rem',
    boxShadow: 'inset -1px 0 2px rgba(0,0,0,0.1)'
  });

  const titleStyle = {
    fontSize: '0.875rem',
    fontWeight: 'bold',
    marginBottom: '0.25rem',
    color: '#1F2937',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: '8px',
    lineHeight: '1.2',
    height: '2.4em',
    overflow: 'hidden'
  };

  const descriptionStyle = {
    color: '#4B5563',
    marginBottom: '0.5rem',
    flexGrow: 1,
    fontSize: '0.75rem',
    paddingLeft: '8px',
    lineHeight: '1.3',
    height: '3.9em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical'
  };

  const contentStyle = {
    color: '#6B7280',
    fontSize: '0.7rem',
    marginBottom: '0.5rem',
    fontStyle: 'italic',
    paddingLeft: '8px',
    lineHeight: '1.2',
    height: '2.4em',
    overflow: 'hidden',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical'
  };

  const detailsStyle = {
    color: '#4B5563',
    fontSize: '0.75rem',
    marginBottom: '0.75rem',
    padding: '8px',
    backgroundColor: '#f9fafb',
    borderRadius: '0.25rem',
    borderLeft: '2px solid #4F46E5',
    maxHeight: '150px',
    overflowY: 'auto'
  };

  const metaStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '0.5rem',
    paddingLeft: '8px'
  };

  const categoryStyle = {
    backgroundColor: '#EEF2FF',
    color: '#4F46E5',
    padding: '0.125rem 0.375rem',
    borderRadius: '9999px',
    fontSize: '0.625rem',
    fontWeight: '500',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '60%'
  };

  const pagesStyle = { fontSize: '0.75rem', color: '#6B7280' };
  const priceStyle = { fontSize: '0.75rem', fontWeight: 'bold', color: '#10B981' };

  const buttonBase = {
    border: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '0.75rem',
    width: '100%',
    textAlign: 'center'
  };

  const freeButtonStyle = {
    ...buttonBase,
    backgroundColor: '#10B981',
    color: 'white',
    boxShadow: '0 1px 2px rgba(16,185,129,0.3)'
  };

  const viewNowButtonStyle = {
    ...buttonBase,
    backgroundColor: '#4F46E5',
    color: 'white',
    marginTop: '0.25rem',
    boxShadow: '0 1px 2px rgba(79,70,229,0.3)'
  };

  const fullViewOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    padding: '1rem'
  };

  const fullViewContentStyle = {
    backgroundColor: 'white',
    borderRadius: '1rem',
    maxWidth: '800px',
    width: '100%',
    maxHeight: '90vh',
    overflowY: 'auto',
    padding: '1.5rem',
    position: 'relative',
    boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
    animation: 'fadeIn 0.4s ease'
  };

  const closeButtonStyle = {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    backgroundColor: '#EF4444',
    color: 'white',
    border: 'none',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1.25rem',
    fontWeight: 'bold'
  };

  const toggleDetails = (id) => setExpandedId(expandedId === id ? null : id);
  const openFullView = (book) => setFullViewItem(book);
  const closeFullView = () => setFullViewItem(null);

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Storybooks</h2>
      <p style={subheadingStyle}>
        Free short motivational stories and premium storybooks for deep inspiration and learning.
      </p>

      <div style={gridStyle}>
        {storybooks.map((book) => (
          <div
            key={book.id}
            style={getBookStyle(hoveredId === book.id)}
            onMouseEnter={() => setHoveredId(book.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={bookSpineStyle(book.color)} />
            <img
              src={book.coverImage}
              alt={`${book.title} cover`}
              style={bookCoverStyle}
              loading="lazy"
            />
            <h3 style={titleStyle} title={book.title}>
              {book.title}
              {book.isPaid && <LockIcon />}
            </h3>
            <p style={descriptionStyle}>{book.description}</p>
            <p style={contentStyle}>{book.content}</p>

            {expandedId === book.id && !book.isPaid && (
              <div style={detailsStyle}>
                <h4 style={{ marginBottom: '0.5rem', fontWeight: 'bold', fontSize: '0.875rem' }}>
                  Stories Include:
                </h4>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                  {book.details.map((detail, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem', fontSize: '0.75rem' }}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={metaStyle}>
              <span style={categoryStyle}>{book.category}</span>
              <span style={pagesStyle}>{book.pages} pages</span>
            </div>

            {book.isPaid ? (
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                <span style={priceStyle}>{book.price}</span>
                <WhatsAppButton itemName={book.title} price={book.price} />
              </div>
            ) : (
              <>
                <button style={freeButtonStyle} onClick={() => toggleDetails(book.id)}>
                  {expandedId === book.id ? 'Hide' : 'Free'}
                </button>
                <button style={viewNowButtonStyle} onClick={() => openFullView(book)}>
                  Read Now
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {fullViewItem && (
        <div style={fullViewOverlayStyle} onClick={closeFullView}>
          <div style={fullViewContentStyle} onClick={(e) => e.stopPropagation()}>
            <button style={closeButtonStyle} onClick={closeFullView}>×</button>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '1.5rem' }}>
              <img
                src={fullViewItem.coverImage}
                alt={`${fullViewItem.title} cover`}
                style={{ width: '150px', height: '200px', objectFit: 'cover', borderRadius: '0.5rem', marginBottom: '1rem' }}
              />
              <div style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#1F2937' }}>{fullViewItem.title}</h2>
                <p style={{ fontSize: '1rem', color: '#4B5563', marginBottom: '1rem' }}>{fullViewItem.description}</p>
              </div>
            </div>

            <div style={{ backgroundColor: '#f9fafb', padding: '1rem', borderRadius: '0.5rem', borderLeft: '4px solid #4F46E5' }}>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: '#1F2937' }}>Stories Include:</h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {fullViewItem.details.map((d, i) => (
                  <li key={i} style={{ marginBottom: '0.75rem', fontSize: '1rem', lineHeight: '1.5' }}>{d}</li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button
                style={{ ...freeButtonStyle, padding: '0.5rem 1.5rem', fontSize: '1rem' }}
                onClick={closeFullView}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Storybooks;
