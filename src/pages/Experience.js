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
      <h2>Experience</h2>
      {experienceData.map((exp, index) => (
        <div>
          <div className="card glass-card">
            <div className="card-body">
              <div className="row mt-3" key={exp.id}>
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

{
  /* <li>Developed and maintained web applications using React.js, ensuring high performance and responsiveness across various devices.</li>
          <li>Collaborated with cross-functional teams to define, design, and ship new features, enhancing user experience and functionality.</li>
          <li>Implemented responsive design principles to ensure seamless user experiences on both desktop and mobile platforms.</li>
          <li>Optimized application performance by identifying and addressing bottlenecks, resulting in a 20% reduction in load times.</li>
          <li>Participated in code reviews and provided constructive feedback to team members, fostering a culture of continuous improvement.</li>
           */
}
