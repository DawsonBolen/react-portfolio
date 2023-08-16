import React, { useState } from 'react';
import Navigation from './navigation';
import Footer from './footer';
import Home from './pages/homePage';
import About from './pages/about';
import GraphicDesign from './pages/graphicDesign';
import Contact from './pages/contact';
import WebDev from './pages/webDev';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'WebDev') {
            return <WebDev />;
        }
        if (currentPage === 'GraphicDesign') {
            return <GraphicDesign />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}