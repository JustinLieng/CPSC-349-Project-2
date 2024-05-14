import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Projects':
        return <Projects />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="container">
      <nav>
        <button onClick={() => setCurrentPage('Home')}>Home</button>
        <button onClick={() => setCurrentPage('Projects')}>Projects</button>
        <button onClick={() => setCurrentPage('About')}>About</button>
        <button onClick={() => setCurrentPage('Contact')}>Contact</button>
      </nav>
      <main>
        {renderPage()}
      </main>
      <footer>
        <p>Justin's Portfolio Website</p>
      </footer>
    </div>
  );
}

export default App;
