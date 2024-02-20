import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row footer__row">
          <div className="footer__intro footer__content">
            <h4 className="footer__intro__title">CAR Rental</h4>
            <p className="footer__intro__para">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus,
              aut impedit. Velit aliquam?
            </p>
            <div className="footer__intro__links">
              <a href="#" className="footer__intro__link disabled">
                (123)-456-789
              </a>
              <a href="#" className="footer__intro__link disabled">
                carrental.gmail.com
              </a>
              <a
                href="https://xpeedstudio.com"
                target="_blank"
                className="footer__intro__link "
              >
                Design by XpeedStudio
              </a>
            </div>
          </div>
          <div className="footer__company footer__content">
            <h4 className="footer__company__title">Company</h4>

            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                New York
              </a>
            </div>
            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                Careers
              </a>
            </div>
            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                Mobile
              </a>
            </div>
            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                Blog
              </a>
            </div>
            <div className="footer__company__links">
              <a href="#" className="footer__company__link disabled">
                How we work
              </a>
            </div>
          </div>
          <div className="footer__hours footer__content">
            <h4 className="footer__hours__title">Working Hours</h4>
            <div className="footer__hours__list">
              <span className="footer__hours__time">
                Mon - Fri: 9:00AM - 9:00PM
              </span>
              <span className="footer__hours__time">Sat: 9:00AM - 5:00PM</span>
              <span className="footer__hours__time">Sun: Closed</span>
            </div>
          </div>
          <div className="footer__email footer__content">
            <h4 className="footer__email__title">Subcription</h4>
            <p className="footer__email__para">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </p>
            <form className="footer__email__form">
              <input
                type="text"
                className="footer__email__form__input"
                placeholder="Enter Email Address"
              />
              <button disabled className="footer__email__form__submit disabled">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
