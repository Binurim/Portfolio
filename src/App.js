import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';
import Footer from './layouts/Footer';
import { useState, useEffect } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

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
      threshold: 0.2, // section must be at least 20% visible
      rootMargin: "-30% 0px -30% 0px", 
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
        <div className="row">
          <div className="col-lg-4">
            <header className="header">
              <div className="container">
                <Sidebar activeSection={activeSection} />
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