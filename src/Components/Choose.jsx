import React from "react";
import ChooseCar from "../assets/choose-car.png";
import Choose1 from "../assets/choose-1.png";
import Choose2 from "../assets/choose-2.png";
import Choose3 from "../assets/choose-3.png";
import ChooseFeature from "./ui/ChooseFeature";
import { Link } from "react-router-dom";

const Choose = () => {
  return (
    <section id="choose">
      <div className="container">
        <div className="row choose__row">
          <figure className="choose__img__wrapper">
            <img src={ChooseCar} alt="" className="choose__img" />
          </figure>
          <div className="choose__content">
            <div className="choose__text">
              <h3 className="choose__text__subtitle">Why choose us?</h3>
              <h2 className="choose__text__title">
                Best valued deals you will ever find
              </h2>
              <p className="choose__text__para">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit sunt unde aperiam quisquam dolore illo, minima ipsum
                quae repellat nihil obcaecati eaque, tempore voluptates?
                Corrupti sequi quidem aspernatur animi vel cupiditate nemo,
                suscipit adipisci. Cupiditate dignissimos itaque impedit ut
                harum.
              </p>
              <Link to="/models">
                <button className="choose__text__btn">Find details</button>
              </Link>
            </div>
            <div className="choose__features">
              <ChooseFeature
                image={Choose1}
                title="Cross Country Drive"
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor veniam perspiciatis minus dignissimos aliquid quia?"
              />
              <ChooseFeature
                image={Choose2}
                title="All Inclusive Pricing"
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor veniam perspiciatis minus dignissimos aliquid quia?"
              />
              <ChooseFeature
                image={Choose3}
                title="No Hidden Charges"
                paragraph="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Dolor veniam perspiciatis minus dignissimos aliquid quia?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;
