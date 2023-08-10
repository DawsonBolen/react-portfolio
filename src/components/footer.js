import React from 'react';

export default function Footer() {
    return (
        <footer>

            <a className="footer-link" href="mailto: dawson120@live.com">
                <div className="footer-contact">
                    <img src={process.env.PUBLIC_URL + "/images/emailicon.png"} width="25px" height="25px" alt="email"></img>
                    <p className="footerpar">dawson120@live.com</p>
                </div>
            </a>
            <a className="footer-link" href="tel:4257499555">
                <div className="footer-contact">
                    <img src={process.env.PUBLIC_URL + "/images/phoneicon.png"} width="25px" height="25px" alt="phone"></img>
                    <p className="footerpar">425-749-9555</p>
                </div>
            </a>
            <a className="footer-link" href="https://www.linkedin.com/in/dawsonbolen/">
                <div className="footer-contact">
                    <img src={process.env.PUBLIC_URL + "/images/linkedinicon.png"} width="25px" height="25px" alt="linkedin"></img>
                    <p className="footerpar">Dawson Bolen</p>
                </div>
            </a>

        </footer>
    );
}
