import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';
import Footer from './layouts/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, {
      threshold: 0.2, // section must be at least 20% visible
      rootMargin: "-30% 0px -30% 0px", 
    }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="full-screen-section">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-5 container">
            <header className="header vh-lg-100 d-flex flex-column">
              <nav aria-label="Main navigation">
                <Sidebar
                  onSectionChange={handleSectionChange}
                  activeSection={activeSection}
                />
                <Footer />
              </nav>
            </header>
          </div>
          <div className="col-lg-8 col-md-7 container">
            <main id="main-content" tabIndex="-1">
              <MainContent activeSection={activeSection} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;