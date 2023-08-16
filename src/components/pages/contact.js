export default function GraphicDesign() {
    return (
        <main className="Contact">
            <section id="contact-top">
                <h1>Get in Touch</h1>
                <div className="line-style-2"></div>

                <div id="contactcards">
                    <a className="contact-top-links" href="mailto: dawson120@live.com">
                        <div className="contactlinks">
                            <div className="contactlinks-row1">
                                <img src={process.env.PUBLIC_URL + "/images/emailicon.png"} width="100px" height="100px" alt="email icon"></img>
                            </div>
                            <div className="contactlinks-row2">
                                <h2>Email</h2>
                                <p>dawson120@live.com</p>
                            </div>
                        </div>
                    </a>
                    <a className="contact-top-links" href="tel:4257499555">
                        <div className="contactlinks">
                            <div className="contactlinks-row1">
                                <img src={process.env.PUBLIC_URL + "/images/smartphoneicon.png"} width="100px" height="100px" alt="phone icon"></img>
                            </div>
                            <div className="contactlinks-row2">
                                <h2>Phone</h2>
                                <p>425-749-9555</p>
                            </div>
                        </div>
                    </a>
                    <a class="contact-top-links" href="https://www.linkedin.com/in/dawsonbolen/">
                        <div className="contactlinks">
                            <div className="contactlinks-row1">
                                <img src={process.env.PUBLIC_URL + "/images/linkedinicon.png"} width="100px" height="100px" alt="linkedin icon"></img>
                            </div>
                            <div className="contactlinks-row2">
                                <h2>Linkedin</h2>
                                <p>Dawson Bolen</p>
                            </div>
                        </div>
                    </a>
                </div>
            </section>
            <section id="emailformbod">
                <h2 id="emailformheader">Reach Out</h2>
                <div id="email-form-body">
                    <div className="emailiconimg">
                        <img src={process.env.PUBLIC_URL + "/images/emailformicon.png"} width="270px" height="266px"></img>
                    </div>
                    <div class="containerc">
                        <form action="https://formspree.io/f/xnqyldvy" method="post">
                            <label>
                                <input type="email" name="email" placeholder="email: myemail@email.com"></input>
                            </label>
                            <label>
                                <textarea name="message" cols="30" rows="10" placeholder="write your message here"></textarea>
                                <button id="butn" type="submit">Send</button>
                            </label>
                        </form>
                    </div>
                </div>
            </section>

        </main>
    );
}