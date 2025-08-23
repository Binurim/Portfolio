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
    <div id="education" className="education">
      <h2>Education</h2>
      {EducationData.map((education) => (
        <>
          <div className="card glass-card" key={education.id}>
            <div className="card-body">
              <h5 className="card-title">{education.title}</h5>
              <p className="card-text">{education.description}</p>
            </div>
          </div>
          <br />
        </>
      ))}
    </div>
  );
};

export default Education;
