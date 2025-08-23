const Sidebar = ({ activeSection }) => {

   const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'awards', label: 'AWARDS | CERTIFICATION' },
    // { id: 'projects', label: 'PROJECTS' },
];

 const handleClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="section">
      <h1>Binuri Manorathna</h1>
      <h4>Front End Engineer</h4>
      <div className="sectionHeader">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => handleClick(section.id)}
                id={`tab-${section.id}`}
                href={`#${section.id}`}
                role="tab"
                aria-selected={activeSection === section.id ? 'true' : 'false'}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;