import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';
import Footer from './layouts/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const mainContent = document.querySelector('.main-column');
    if (!mainContent) return;

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, {
      root: mainContent,
      threshold: 0.3, // section must be at least 30% visible
      rootMargin: "-20% 0px -20% 0px", 
    }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

   useEffect(() => {
     const header = document.querySelector('.header');
     const mainContent = document.querySelector('.main-column');

     if (!header || !mainContent) return;

     const handleWheel = (e) => {
       e.preventDefault();
       mainContent.scrollBy({
         top: e.deltaY,
         behavior: 'auto',
       });
     };

     header.addEventListener('wheel', handleWheel, { passive: false });

     return () => {
       header.removeEventListener('wheel', handleWheel);
     };
   }, []);

  return (
    <div className="full-screen-section">
       <div className="mobile-header">
          <div className="mobile-header-content">
            <button 
              className="hamburger-button" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
              <span className={`hamburger-line ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`} onClick={closeMobileMenu}></div>

        <div className="row">
          <div className={`col-lg-4 sidebar-wrapper ${isMobileMenuOpen ? 'open' : ''}`}>
            <header className="header">
              <div className="container">
                <Sidebar activeSection={activeSection} isMobile={true} onLinkClick={closeMobileMenu} />
                <Footer />
              </div>
            </header>
          </div>
          <div className="col-lg-8">
            <main className="main-column">
              <div className="container-custom">
                <MainContent />
              </div>
            </main>
          </div>
        </div>
      </div>
  );
}

export default App;