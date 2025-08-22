import Footer from './Footer';

const Sidebar = () => {
  return (
    <div className="section">
      <div className="sectionHeader">
        <ul>
          <li>
            <a href="#section1">ABOUT</a>
          </li>
          <li>
            <a href="#section2">EXPERIENCE</a>
          </li>
          <li>
            <a href="#section3">AWARDS | CERTIFICATION</a>
          </li>
          <li>
            <a href="#section3">PROJECTS</a>
          </li>
          {/* <Link to="/projects" className="projectHeading">Projects</Link> */}
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
