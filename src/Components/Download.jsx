import React from "react";
import GooglePlay from "../assets/google-play.svg"
import AppStore from "../assets/app-store.svg"



const Download = () => {
  return (
    <section id="download">
      <div className="container">
        <div className="row download__row">
          <div className="download__text">
            <h2 className="download__text__title">
              Download our app to get the most of it
            </h2>
            <p className="download__text__para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
              tempore illo, fugiat soluta quia odio, dolores inventore corporis
              recusandae, facilis tenetur id vel?
            </p>
            <div className="download__text__links">
              <a href="" className="download__text__link">
                <img src={GooglePlay} alt="" className="download__text__img" />
              </a>
              <a href={AppStore} className="download__text__link">
                <img src={AppStore} alt="" className="download__text__img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
