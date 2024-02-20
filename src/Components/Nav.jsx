import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NavLogo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav__container">
          <Link to="/" className="nav__img__wrapper">
            <img className="nav__img" src={NavLogo} alt="" />
          </Link>
          <div className="nav__links">
            <Link to="/" className="nav__link">
              Home
            </Link>
            <Link to="/models" className="nav__link"> 
              Vehicle Models
            </Link>
            <a href="#" className="nav__link disabled">
              Testimonials
            </a>
            <a href="#" className="nav__link disabled">
              Our team
            </a>
            <a href="#" className="nav__link disabled">
              Contact
            </a>
          </div>
          <div className="nav__btns">
            <a href="" className="nav__link disabled">
              Sign in
            </a>
            <button className="nav__btns__register disabled">Register</button>
          </div>
          <button
            className="nav__menu"
            onClick={() => {
              setMenuOpen(true);
              console.log(menuOpen);
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
      </nav>

      <nav className={`menu ${menuOpen === true && "menu-open"}`}>
        <button
          className="menu__close"
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className="menu__links">
          <Link
            to="/"
            className="menu__link"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            to="/models"
            className="menu__link"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Vehicle models
          </Link>
          <a
            href=""
            className="menu__link disabled"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Our team
          </a>
          <a
            href=""
            className="menu__link disabled"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Testimonials
          </a>
          <a
            href=""
            className="menu__link disabled"
            onClick={() => {
              setMenuOpen(false);
            }}
          >
            Contact
          </a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
