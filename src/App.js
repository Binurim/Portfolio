import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="/projects" className="projectHeading">Projects</Link>
      <header className="App-header">
        <p className="title">Hello there! I'm Binuri</p>
        <div>
          <a
            className="icon"
            href="https://www.linkedin.com/in/binuri-maleesha/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a
            className="icon"
            href="https://github.com/Binurim"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-github" aria-hidden="true"></i>
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/binuri_/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
          <a
            className="icon"
            href="https://www.pinterest.com/binurim_/"
            target="_blank"
            rel="noreferrer"
          >
            <i class="fa fa-pinterest" aria-hidden="true"></i>
          </a>
          <a
            className="icon"
            href="https://medium.com/@binurim"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa fa-medium" aria-hidden="true"></i>
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
