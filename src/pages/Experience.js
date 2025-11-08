const Experience = () => {
  const experienceData = [
     {
      id: 0,
      time: '2025 Oct - Present',
      position: 'Senior Software Engineer',
      company: 'Qoria',
      description: ''
    },
    // {
    //   id: 1,
    //   time: '2025 Jan - 2025 Aug',
    //   position: 'Engineering Lead',
    //   company: 'Persistent',
    //   description: '',
    // },
    {
      id: 2,
      time: '2024 Jan - 2025 Aug',
      position: 'Lead Software Engineer',
      company: 'Persistent',
      description:
        'Develop enterprise-level UI platforms using Angular, RxJS, and SCSS. Engineered a major Angular version upgrade (v11 to v17), significantly enhancing performance and long-term maintainability. Worked with complex data flows by integrating RESTful APIs and managing backend-frontend interactions with Spring Boot. Mentored junior developers.',
    },
    {
      id: 3,
      time: '2023 Jan - 2023 Dec',
      position: 'Senior Software Engineer',
      company: 'Persistent',
      description:
        'Built and maintained shared Angular component libraries to drive modular and efficient development practices. Proficient in RxJS, Internationalization (i18n), and Progressive Web App (PWA) development. Maintained code quality by achieving unit test coverage and hands on with deployment processes by containerizing Angular applications with Docker and Nginx.',
    },
    {
      id: 4,
      time: '2021 May - 2022 Dec',
      position: 'Software Engineer',
      company: 'Persistent',
      description:
        'Developed responsive and user-centric front-end features using Angular and React/Redux. Expertly integrated RESTful APIs and managed complex form validations to ensure a seamless user experience. Committed to continuous learning by actively engaging in training on emerging technologies and UI/UX best practices.',
    },
    {
      id: 5,
      time: '2019 Aug - 2020 Feb',
      position: 'Software Engineer Intern',
      company: 'Pearson',
      description:
        'Contributed to the front-end development of an enterprise-level educational product using React/Redux. Gained hands-on experience with the full development lifecycle in an Agile environment. Explored innovative solutions in R&D projects.',
    },
  ];
  return (
    <div id="experience" className="section">
      <div className="sectionHeader">
        <h2 className="sectionTitle">Experience</h2>
      </div>
      {experienceData.map((exp, index) => (
        <div key={exp.id}>
          <div className="card glass-card">
            <div className="card-body">
              <div className="row mt-3">
                <div className="col-md-4 time">{exp.time}</div>
                <div className="col-md-8">
                  <h6 className="card-title">
                    {' '}
                    {exp.position} | {exp.company}
                  </h6>
                  <p className="card-text"> {exp.description}</p>
                </div>
              </div>
            </div>
          </div>
          &nbsp;
        </div>
      ))}
    </div>
  );
};

export default Experience;
