import React from "react";
import HeaderBg from "../assets/header-bg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import HeaderImg from "../assets/header-car.png";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <header>
        <div className="container">
          <img src={HeaderBg} alt="" className="header-bg" />
          <div className="header__row row">
            <div className="header__text">
              <h2 className="header__text__subtitle">Plan Your trip now!</h2>
              <h1 className="header__text__title">
                save <span className="color-primary">big</span> with our car
                rental
              </h1>
              <p className="header__text__para">
                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                flexible pickup options, and much more.
              </p>
              <div className="header__text__btns">
                <Link to="/models">
                  <button className="header__text__btn header__text__book">
                    <span className="header__text__button__span">
                      Book ride
                    </span>
                    <FontAwesomeIcon
                      className="header__text_btn__icon"
                      icon={faCircleCheck}
                    />
                  </button>
                </Link>
                <Link to="/models">
                  <button className="header__text__btn header__text__learn">
                    <span className="header__text_btn__span">Learn more </span>
                    <FontAwesomeIcon
                      className="header__text__btn__icon"
                      icon={faAngleRight}
                    />
                  </button>
                </Link>
              </div>
            </div>
            <div className="header__img__wrapper">
              <img src={HeaderImg} alt="" className="header__img" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Landing;
