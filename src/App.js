import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';
import Footer from './layouts/Footer';
import { useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="full-screen-section">
      <div className="container-fluid">
        <div className="row mt-5">
          <div className="col-lg-4 col-md-5 container">
            <header className="header p-md-4 p-4 vh-lg-100 d-flex flex-column">
              <h1>Binuri Manorathna</h1>
              <h4>Front End Engineer</h4>
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
            <main id="main-content" className="p-md-4 p-4 mt-3" tabIndex="-1">
              <MainContent activeSection={activeSection} />
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;