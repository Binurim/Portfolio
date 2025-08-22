import './App.css';
import Sidebar from './layouts/Sidebar';
import MainContent from './pages/MainContent';

function App() {
  return (
    <div className="full-screen-section">
      <div className="row mt-5">
        <div className="col-6 container">
          <header>
            <h1>Binuri Manorathna</h1>
            <h4>Front End Engineer</h4>
            <main className="main-content">
              <Sidebar />
            </main>
          </header>
        </div>
        <div className="col-6 container">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;