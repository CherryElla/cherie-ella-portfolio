import React, { useState } from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function PortfolioMain() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Check the value of `currentPage` is and return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  // Rendering the main container which will hold the passed in 'currentPage' from state, and the function to update it.
  return (
    <div>
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}