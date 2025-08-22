const Projects = (props) => {
  const sortedProjects = props.props.sort((a, b) => b.year - a.year);
  return (
     <div className="projects">
      <h2>Projects</h2>  
      <br />
      <div className="row">
        {sortedProjects.map((project, index) => {
          return (
            <div key={index}
              className="card"
              style={{
                width: '18rem',
                marginLeft: '50px',
                marginBottom: '15px',
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  Technologies:
                  {project.technologies.map((technology, i, row) =>
                    i + 1 === row.length
                      ? ' ' + technology
                      : ' ' + technology + ' | '
                  )}
                </p>
                {project.projectLink !== '#' ? (
                  <a
                    href={project.projectLink}
                    target="_blank"
                    className="btn btn-primary"
                    rel="noreferrer"
                  >
                    Explore Project
                  </a>
                ) : undefined}
                <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                  <i
                    className="fa fa-lg fa-github iconProject"
                    aria-hidden="true"
                  ></i>
                </a>
                <p className="project-year mt-2">Year: {project.year}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
