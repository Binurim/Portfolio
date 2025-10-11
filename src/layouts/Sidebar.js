const Sidebar = ({ activeSection }) => {

   const sections = [
    { id: 'about', label: 'ABOUT' },
    { id: 'experience', label: 'EXPERIENCE' },
    { id: 'education', label: 'EDUCATION' },
    { id: 'awards', label: 'AWARDS | CERTIFICATION' },
    // { id: 'projects', label: 'PROJECTS' },
];

 const handleClick = (sectionId) => {
   const sectionEl = document.getElementById(sectionId);
   if (sectionEl) {
     sectionEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
   }
 };

  return (
    <div className="sidebar">
      <div className="mb-5">
        <h1 className="mb-2">Binuri Manorathna</h1>
        <h4>Front End Engineer</h4>
      </div>
      <nav className="sidebar__nav">
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
      </nav>
    </div>
  );
};

export default Sidebar;