// /workspaces/echobiz/src/pages/StorybooksPage.jsx
import { useState } from 'react';
import { storybooks } from '../data/storybooksData';
import LockIcon from '../components/LockIcon';
import WhatsAppButton from '../components/WhatsAppButton';

const StorybooksPage = () => {
  const [expandedId, setExpandedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [fullViewItem, setFullViewItem] = useState(null);

  const sectionStyle = {
    padding: '1rem',
    maxWidth: '1200px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
    borderRadius: '1rem',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.05)',
    minHeight: '80vh'
  };

  const headingStyle = {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937',
    textAlign: 'center',
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

  const getBookStyle = (book, isHovered) => ({
    backgroundColor: 'white',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    boxShadow: isHovered
      ? '0 10px 20px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255,255,255,0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    border: '1px solid #E5E7EB',
    transition: 'transform 0.3s, box-shadow 0.3s',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transform: isHovered
      ? 'translateY(-5px) rotateX(5deg)'
      : 'translateY(0) rotateX(0)',
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
    paddingLeft: '12px',
    backgroundColor: '#f9fafb',
    padding: '8px',
    borderRadius: '0.25rem',
    borderLeft: '2px solid #4F46E5', // ✅ fixed quoting
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

  const pagesStyle = {
    fontSize: '0.75rem',
    color: '#6B7280'
  };

  const priceStyle = {
    fontSize: '0.75rem',
    fontWeight: 'bold',
    color: '#10B981'
  };

  const freeButtonStyle = {
    backgroundColor: '#10B981',
    color: 'white',
    border: 'none',
    padding: '0.25rem 0.5rem',
    borderRadius: '0.25rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontSize: '0.75rem',
    boxShadow: '0 1px 2px rgba(16, 185, 129, 0.3)',
    width: '100%',
    textAlign: 'center'
  };

  const viewNowButtonStyle = {
    ...freeButtonStyle,
    marginTop: '0.25rem',
    backgroundColor: '#4F46E5'
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
    position: 'relative'
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

  const toggleDetails = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const openFullView = (book) => {
    setFullViewItem(book);
  };

  const closeFullView = () => {
    setFullViewItem(null);
  };

  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>Storybooks</h1>
      <p style={subheadingStyle}>
        Free short motivational stories and paid full storybooks for inspiration and learning.
      </p>

      <div style={gridStyle}>
        {storybooks.map((book) => (
          <div
            key={book.id}
            style={getBookStyle(book, hoveredId === book.id)}
            onMouseEnter={() => setHoveredId(book.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={bookSpineStyle(book.color)}></div>
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
            <p style={descriptionStyle} title={book.description}>
              {book.description}
            </p>
            <p style={contentStyle} title={book.content}>
              {book.content}
            </p>

            {expandedId === book.id && !book.isPaid && (
              <div style={detailsStyle}>
                <h4
                  style={{
                    marginBottom: '0.5rem',
                    fontWeight: 'bold',
                    fontSize: '0.875rem'
                  }}
                >
                  Stories Include:
                </h4>
                <ul style={{ paddingLeft: '1rem', margin: 0 }}>
                  {book.details.map((detail, index) => (
                    <li
                      key={index}
                      style={{ marginBottom: '0.25rem', fontSize: '0.75rem' }}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div style={metaStyle}>
              <span style={categoryStyle} title={book.category}>
                {book.category}
              </span>
              <span style={pagesStyle}>{book.pages} pages</span>
            </div>

            {book.isPaid ? (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '0.5rem'
                }}
              >
                <span style={priceStyle}>{book.price}</span>
                <WhatsAppButton itemName={book.title} price={book.price} />
              </div>
            ) : (
              <>
                <button
                  style={freeButtonStyle}
                  onClick={() => toggleDetails(book.id)}
                >
                  {expandedId === book.id ? 'Hide' : 'Free'}
                </button>
                <button
                  style={viewNowButtonStyle}
                  onClick={() => openFullView(book)}
                >
                  Read Now
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Full View Modal */}
      {fullViewItem && (
        <div style={fullViewOverlayStyle} onClick={closeFullView}>
          <div
            style={fullViewContentStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button style={closeButtonStyle} onClick={closeFullView}>
              ×
            </button>
            <div
              style={{
                display: 'flex',
                marginBottom: '1.5rem',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <img
                src={fullViewItem.coverImage}
                alt={`${fullViewItem.title} cover`}
                style={{
                  width: '150px',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '0.5rem',
                  marginBottom: '1rem'
                }}
              />
              <div style={{ textAlign: 'center' }}>
                <h2
                  style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.5rem',
                    color: '#1F2937'
                  }}
                >
                  {fullViewItem.title}
                </h2>
                <p
                  style={{
                    fontSize: '1rem',
                    color: '#4B5563',
                    marginBottom: '1rem'
                  }}
                >
                  {fullViewItem.description}
                </p>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: '1rem'
                  }}
                >
                  <span
                    style={{
                      ...categoryStyle,
                      marginRight: '1rem',
                      fontSize: '0.875rem'
                    }}
                  >
                    {fullViewItem.category}
                  </span>
                  <span
                    style={{
                      ...pagesStyle,
                      backgroundColor: '#f3f4f6',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '9999px',
                      fontSize: '0.875rem'
                    }}
                  >
                    {fullViewItem.pages} pages
                  </span>
                  {!fullViewItem.isPaid && (
                    <span
                      style={{
                        ...priceStyle,
                        backgroundColor: '#D1FAE5',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem'
                      }}
                    >
                      FREE
                    </span>
                  )}
                  {fullViewItem.isPaid && (
                    <span
                      style={{
                        ...priceStyle,
                        backgroundColor: '#D1FAE5',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem'
                      }}
                    >
                      {fullViewItem.price}
                    </span>
                  )}
                </div>
                <p style={{ color: '#6B7280', fontStyle: 'italic' }}>
                  {fullViewItem.content}
                </p>
              </div>
            </div>

            <div
              style={{
                backgroundColor: '#f9fafb',
                padding: '1rem',
                borderRadius: '0.5rem',
                borderLeft: '4px solid #4F46E5' // ✅ fixed quoting
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: '#1F2937'
                }}
              >
                Stories Include:
              </h3>
              <ul style={{ paddingLeft: '1.5rem' }}>
                {fullViewItem.details.map((detail, index) => (
                  <li
                    key={index}
                    style={{
                      marginBottom: '0.75rem',
                      fontSize: '1rem',
                      lineHeight: '1.5'
                    }}
                  >
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
              <button
                style={{
                  ...freeButtonStyle,
                  padding: '0.5rem 1.5rem',
                  fontSize: '1rem'
                }}
                onClick={closeFullView}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StorybooksPage;
