import React from "react";
import NavBar from "./navBar";
import MobileNav from "./mobileNav";

const Navigation = () => {
    const screenWidthChange = 992;
    const isMobile = window.innerWidth <= screenWidthChange;
    return (
        <div>
            {!isMobile ? (
                <NavBar />
            ) : <MobileNav />}

        </div>
    )
}

export default Navigation