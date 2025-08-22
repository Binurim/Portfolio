import About from './About';
import Awards from './Awards';
import Experience from './Experience';
import Projects from './Projects';
import { projectList } from '../shared/ProjectsList';

const MainContent = ({ activeSection }) => {

  const renderSection = () => {
    switch(activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'awards':
        return <Awards />;
      case 'projects':
        return <Projects props={projectList}/>;
      default:
        return (
          <div>
            Coming Soon{' '}
            <span>
              <div
                className="spinner-grow spinner-grow-sm text-info"
                role="status"
                style={{ width: '0.7rem', height: '0.7rem' }}
              ></div>
            </span>
          </div>
        );
    }
  };

  return (
    <div className="main-content">
      {renderSection()}
    </div>
  );
};

export default MainContent;