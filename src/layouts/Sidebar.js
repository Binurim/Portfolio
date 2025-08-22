const Sidebar = ({ onSectionChange, activeSection }) => {
  
  const handleClick = (section, e) => {
    e.preventDefault();
    onSectionChange(section);
  };

  return (
    <div className="section">
      <div className="sectionHeader">
        <ul>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => handleClick('about', e)}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a 
              href="#experience" 
              className={activeSection === 'experience' ? 'active' : ''}
              onClick={(e) => handleClick('experience', e)}
            >
              EXPERIENCE
            </a>
          </li>
          <li>
            <a 
              href="#awards" 
              className={activeSection === 'awards' ? 'active' : ''}
              onClick={(e) => handleClick('awards', e)}
            >
              AWARDS | CERTIFICATION
            </a>
          </li>
          <li>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => handleClick('projects', e)}
            >
              PROJECTS
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;