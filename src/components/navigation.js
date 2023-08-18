import React, { useState, useEffect } from "react";
import NavBar from "./navBar";
import MobileNav from "./mobileNav";

function Navigation({ currentPage, handlePageChange }) {
    const screenWidthChange = 992;
    const [isMobile, setIsMobile] = useState(window.innerWidth <= screenWidthChange);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= screenWidthChange);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {!isMobile ? (
                <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
            ) : <MobileNav currentPage={currentPage} handlePageChange={handlePageChange} />}

        </div>
    )
}

export default Navigation;