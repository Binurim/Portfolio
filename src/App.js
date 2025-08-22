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
      <div className="row mt-5">
        <div className="col-4 container">
          <header className="header">
            <h1>Binuri Manorathna</h1>
            <h4>Front End Engineer</h4>
            <main>
              <Sidebar onSectionChange={handleSectionChange} activeSection={activeSection} />
              <Footer />
            </main>
          </header>
        </div>
        <div className="col-8 container">
          <MainContent activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}

export default App;