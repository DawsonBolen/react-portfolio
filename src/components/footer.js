import React from 'react';

export default function Footer() {
    return (
        <footer>

            <a class="footer-link" href="mailto: dawson120@live.com">
                <div class="footer-contact">
                    <img src="images/emailicon.png" width="25px" height="25px" alt="email"></img>
                    <p class="footerpar">dawson120@live.com</p>
                </div>
            </a>
            <a class="footer-link" href="tel:4257499555">
                <div class="footer-contact">
                    <img src="images/phoneicon.png" width="25px" height="25px" alt="phone"></img>
                    <p class="footerpar">425-749-9555</p>
                </div>
            </a>
            <a class="footer-link" href="https://www.linkedin.com/in/dawsonbolen/">
                <div class="footer-contact">
                    <img src="images/linkedinicon.png" width="25px" height="25px" alt="linkedin"></img>
                    <p class="footerpar">Dawson Bolen</p>
                </div>
            </a>

        </footer>
    );
}
