const WhatsAppButton = ({ itemName, price }) => {
  const buttonStyle = {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '0.375rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    fontSize: '0.875rem'
  };

  const message = `Hi, I'm interested in purchasing: ${itemName} (${price}). Please provide more information.`;
  
  return (
    <a 
      href={`https://wa.me/+254721635810?text=${encodeURIComponent(message)}`} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ textDecoration: 'none' }}
    >
      <button style={buttonStyle}>
        📱 Order via WhatsApp
      </button>
    </a>
  );
};

export default WhatsAppButton;