import { miniCourses } from '../data/miniCoursesData';

const MiniCourses = () => {
  const sectionStyle = {
    padding: '4rem 2rem',
    backgroundColor: '#F9FAFB',
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
    flexDirection: 'column'
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    color: '#1F2937'
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

  const buttonStyle = {
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
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Mini-Courses</h2>
      <p style={subheadingStyle}>
        Free course previews to help you learn new skills quickly.
      </p>
      
      <div style={gridStyle}>
        {miniCourses.map(course => (
          <div key={course.id} style={cardStyle}>
            <h3 style={titleStyle}>{course.title}</h3>
            <p style={descriptionStyle}>{course.description}</p>
            <p style={contentStyle}>{course.content}</p>
            <div style={metaStyle}>
              <span style={categoryStyle}>{course.category}</span>
            </div>
            <button style={buttonStyle}>Start Free Course</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MiniCourses;