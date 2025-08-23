const Sidebar = ({ onSectionChange, activeSection }) => {

   const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'awards', label: 'AWARDS | CERTIFICATION' },
    // { id: 'projects', label: 'PROJECTS' },
];

  return (
    <div className="section">
      <div className="sectionHeader">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                className={activeSection === section.id ? 'active' : ''}
                onClick={() => onSectionChange(section.id)}
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