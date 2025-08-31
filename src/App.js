import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';
import Footer from './layouts/Footer';
import { useState, useEffect, useRef } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const sidebarRef = useRef(null);
  const mainRef = useRef(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    const sidebar = sidebarRef.current;
    const main = mainRef.current;
    if (!sidebar || !main) return;

    const onWheel = (e) => {
      // Forward wheel scroll to main content
      main.scrollBy({ top: e.deltaY, behavior: "auto" });
    };

    sidebar.addEventListener("wheel", onWheel, { passive: true });
    return () => sidebar.removeEventListener("wheel", onWheel);
  }, []);
  
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
        <div className="row">
          <div className="col-lg-4 col-md-5 container">
            <header className="header vh-lg-100 d-flex flex-column" ref={sidebarRef}>
              <nav aria-label="Main navigation">
                <Sidebar
                  onSectionChange={handleSectionChange}
                  activeSection={activeSection}
                />
                <Footer />
              </nav>
            </header>
          </div>
          <div className="col-lg-8 col-md-7 container main-column" ref={mainRef}>
            <main id="main-content" tabIndex="-1" className="main-column">
              <MainContent activeSection={activeSection} />
            </main>
          </div>
        </div>
    </div>
  );
}

export default App;