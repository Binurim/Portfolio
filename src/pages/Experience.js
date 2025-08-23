const Experience = () => {
  const experienceData = [
    {
      id: 1,
      time: '2024 - Present',
      position: 'Lead Software Engineer',
      company: 'Persistent',
      description:
        'Develop enterprise-level UI platforms using Angular, RxJS, and SCSS. Engineered a major Angular version upgrade (v11 to v17), significantly enhancing performance and long-term maintainability. Worked with complex data flows by integrating RESTful APIs and managing backend-frontend interactions with Spring Boot. Mentored junior developers.',
    },
    {
      id: 2,
      time: '2023 - 2023 Dec',
      position: 'Senior Software Engineer',
      company: 'Persistent',
      description:
        'Built and maintained shared Angular component libraries to drive modular and efficient development practices. Proficient in RxJS, Internationalization (i18n), and Progressive Web App (PWA) development. Maintained code quality by achieving unit test coverage and hands on with deployment processes by containerizing Angular applications with Docker and Nginx.',
    },
    {
      id: 3,
      time: '2021 - 2022 Dec',
      position: 'Software Engineer',
      company: 'Persistent',
      description:
        'Developed responsive and user-centric front-end features using Angular and React/Redux. Expertly integrated RESTful APIs and managed complex form validations to ensure a seamless user experience. Committed to continuous learning by actively engaging in training on emerging technologies and UI/UX best practices.',
    },
    {
      id: 4,
      time: '2019 - 2020',
      position: 'Software Engineer Intern',
      company: 'Pearson',
      description:
        'Contributed to the front-end development of an enterprise-level educational product using React/Redux. Gained hands-on experience with the full development lifecycle in an Agile environment. Explored innovative solutions in R&D projects.',
    },
  ];
  return (
    <div id="experience" className="experience">
      <h3>Experience</h3>
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
