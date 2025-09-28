import { useState } from 'react';

const Community = () => {
  const [posts, setPosts] = useState([
    { id: 1, user: "Alex Johnson", content: "Just launched my first product! Thanks for all the support from this community.", likes: 24, comments: 8, time: "2 hours ago" },
    { id: 2, user: "Sarah Williams", content: "Looking for feedback on my new business idea. Who's interested in a quick call?", likes: 12, comments: 5, time: "5 hours ago" },
    { id: 3, user: "Mike Chen", content: "Free webinar tomorrow at 3 PM EST: '10 Marketing Hacks for Startups'. Join me!", likes: 42, comments: 15, time: "1 day ago" }
  ]);

  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost.trim() !== '') {
      const newPostObj = {
        id: posts.length + 1,
        user: "You",
        content: newPost,
        likes: 0,
        comments: 0,
        time: "Just now"
      };
      setPosts([newPostObj, ...posts]);
      setNewPost('');
    }
  };

  const likePost = (id) => {
    setPosts(posts.map(post => 
      post.id === id ? { ...post, likes: post.likes + 1 } : post
    ));
  };

  const sectionStyle = {
    padding: '4rem 2rem',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const headingStyle = {
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937'
  };

  const subheadingStyle = {
    textAlign: 'center',
    fontSize: '1.125rem',
    color: '#4B5563',
    marginBottom: '3rem',
    maxWidth: '700px',
    margin: '0 auto 3rem'
  };

  const containerStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    gap: '2rem'
  };

  const postsContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem'
  };

  const postStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB'
  };

  const postHeaderStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem'
  };

  const userStyle = {
    fontWeight: 'bold',
    color: '#1F2937'
  };

  const timeStyle = {
    fontSize: '0.875rem',
    color: '#6B7280'
  };

  const contentStyle = {
    color: '#4B5563',
    marginBottom: '1rem',
    lineHeight: '1.6'
  };

  const postActionsStyle = {
    display: 'flex',
    gap: '1rem'
  };

  const actionButtonStyle = {
    background: 'none',
    border: 'none',
    color: '#6B7280',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
    fontSize: '0.875rem',
    transition: 'color 0.3s'
  };

  const sidebarStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    height: 'fit-content'
  };

  const sidebarHeadingStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1F2937'
  };

  const memberStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '0.75rem'
  };

  const avatarStyle = {
    width: '2rem',
    height: '2rem',
    borderRadius: '50%',
    backgroundColor: '#4F46E5',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '0.75rem',
    fontWeight: 'bold'
  };

  const memberNameStyle = {
    fontWeight: '500',
    color: '#1F2937'
  };

  const newPostContainerStyle = {
    backgroundColor: 'white',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    border: '1px solid #E5E7EB',
    marginBottom: '1.5rem'
  };

  const textareaStyle = {
    width: '100%',
    border: '1px solid #D1D5DB',
    borderRadius: '0.375rem',
    padding: '0.75rem',
    marginBottom: '1rem',
    resize: 'vertical',
    minHeight: '100px'
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

  const whatsappGroupStyle = {
    backgroundColor: '#EEF2FF',
    borderRadius: '0.5rem',
    padding: '1.5rem',
    marginTop: '1.5rem',
    textAlign: 'center'
  };

  const whatsappButtonStyle = {
    backgroundColor: '#25D366',
    color: 'white',
    border: 'none',
    padding: '0.75rem 1.5rem',
    borderRadius: '0.375rem',
    fontWeight: '600',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '1rem',
    transition: 'background-color 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem'
  };

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Community</h2>
      <p style={subheadingStyle}>
        Connect with like-minded entrepreneurs, share ideas, and grow together.
      </p>
      
      <div style={containerStyle}>
        <div>
          <div style={newPostContainerStyle}>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              placeholder="Share your thoughts with the community..."
              style={textareaStyle}
            />
            <button style={buttonStyle} onClick={addPost}>Post</button>
          </div>
          
          <div style={postsContainerStyle}>
            {posts.map(post => (
              <div key={post.id} style={postStyle}>
                <div style={postHeaderStyle}>
                  <span style={userStyle}>{post.user}</span>
                  <span style={timeStyle}>{post.time}</span>
                </div>
                <p style={contentStyle}>{post.content}</p>
                <div style={postActionsStyle}>
                  <button 
                    style={actionButtonStyle}
                    onClick={() => likePost(post.id)}
                  >
                    👍 {post.likes}
                  </button>
                  <button style={actionButtonStyle}>
                    💬 {post.comments}
                  </button>
                  <button style={actionButtonStyle}>
                    🔄 Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div style={sidebarStyle}>
          <h3 style={sidebarHeadingStyle}>Active Members</h3>
          <div style={memberStyle}>
            <div style={avatarStyle}>AJ</div>
            <span style={memberNameStyle}>Alex Johnson</span>
          </div>
          <div style={memberStyle}>
            <div style={avatarStyle}>SW</div>
            <span style={memberNameStyle}>Sarah Williams</span>
          </div>
          <div style={memberStyle}>
            <div style={avatarStyle}>MC</div>
            <span style={memberNameStyle}>Mike Chen</span>
          </div>
          <div style={memberStyle}>
            <div style={avatarStyle}>JD</div>
            <span style={memberNameStyle}>Jessica Davis</span>
          </div>
          <div style={memberStyle}>
            <div style={avatarStyle}>RT</div>
            <span style={memberNameStyle}>Robert Taylor</span>
          </div>
          
          <div style={whatsappGroupStyle}>
            <h4 style={{ fontSize: '1.125rem', marginBottom: '0.5rem', color: '#1F2937' }}>Join Our WhatsApp Group</h4>
            <p style={{ color: '#4B5563', fontSize: '0.875rem' }}>
              Connect with entrepreneurs and get real-time advice
            </p>
            <a 
              href="https://wa.me/1234567890?text=Hi%20I%20want%20to%20join%20the%20Master%20App%20community" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button style={whatsappButtonStyle}>
                📱 Join WhatsApp Group
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;