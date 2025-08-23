import About from './About';
import Awards from './Awards';
import Experience from './Experience';
// import Projects from './Projects';
import Education from './Education';
// import { projectList } from '../shared/ProjectsList';

const MainContent = () => {
  return (
    <section className="main-content">
      <section id="about" className="section">
        <About />
      </section>

      <section id="experience" className="section">
        <Experience />
      </section>

      <section id="education" className="section">
        <Education />
      </section>

      <section id="awards" className="section">
        <Awards />
      </section>

      {/* <section id="projects" className="section">
        <Projects props={projectList} />
      </section> */}
    </section>
  );
};

export default MainContent;
