import { Link } from "react-router-dom";

const Projects = (props) => {
  return (
    <div className="projectPage">
      <div>
        <Link to="/" className="homeHeading">
          Home
        </Link>
      </div>
      <br />
      <div className="row">
        {props.props.map((project) => {
          return (
            <div
              className="card"
              style={{
                width: "18rem",
                marginLeft: "50px",
                marginBottom: "15px",
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">
                  Technologies:
                  {project.technologies.map((technology, i, row) =>
                    i + 1 === row.length
                      ? " " + technology
                      : " " + technology + " | "
                  )}
                </p>
                <a
                  href={project.projectLink}
                  target="_blank"
                  className="btn btn-primary"
                  rel="noreferrer"
                >
                  View Project
                </a>
                <a href={project.gitHubLink} target="_blank" rel="noreferrer">
                  <i
                    className="fa fa-lg fa-github iconProject"
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
