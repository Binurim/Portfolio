const Education = () => {
  const EducationData = [
    {
      id: 1,
      title: 'Bachelor of Science(Hons) in Information Systems',
      description:
        'University of Colombo School of Computing - First Class - 3.50 GPA',
    },
    {
      id: 2,
      title: 'Certificate in Business English',
      description: 'University of Colombo',
    },
    {
      id: 3,
      title: 'GCE Advanced Level - Physical Science Stream',
      description: 'Sanghamitta Balika Vidyalaya - Galle',
    },
  ];

  return (
    <div id="education" className="section">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Education</h2>
      </div>
      {EducationData.map((education) => (
        <div key={education.id}>
          <div className="card glass-card">
            <div className="card-body">
              <h5 className="card-title">{education.title}</h5>
              <p className="card-text">{education.description}</p>
            </div>
          </div>
          <br />
        </div>
      ))}
    </div>
  );
};

export default Education;
