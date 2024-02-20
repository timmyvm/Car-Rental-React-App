import React from "react";
import Feature1 from "../assets/feature-1.png";
import Feature2 from "../assets/feature-2.png";
import Feature3 from "../assets/feature-3.png";
import Feature from "./ui/Feature";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row features__row">
          <h3 className="features__subtitle">Plan your trip now</h3>
          <h2 className="features__title">Quick and easy car rental</h2>
          <div className="features__list">
            <Feature
              image={Feature1}
              title="Select car"
              paragraph=" We offer a big range of vechiles for all your driving needs. We
                have the perfect car to meet your needs"
            />
            <Feature
              image={Feature2}
              title="Contact Operator"
              paragraph=" Our knowledgable and friendly operators are always ready to help
              with any questions or concerns."
            />
            <Feature
              image={Feature3}
              title="Let's Drive"
              paragraph=" Whether your hiting the open road, or going site seeing. We've
              got the perfect car for you with our wide range."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
