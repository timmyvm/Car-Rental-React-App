import React from "react";
import Testimonial1 from "../assets/testimonial-1.webp";
import Testimonial2 from "../assets/testimonial-2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import TestimonialInfo from "./ui/TestimonialInfo";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="row testimonials__row">
          <h3 className="testimonials__subtitle">Reviewed by people</h3>
          <h2 className="testimonials__title">Clients Testimonials</h2>
          <p className="testimonials__para">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda
            molestias quae magnam alias debitis, blanditiis fugiat ullam
            deleniti velit odio rerum aspernatur tenetur consequatur amet sed
            laborum!
          </p>
          <div className="testimonials__list">
            <TestimonialInfo
              image={Testimonial1}
              name="Parry Hotter"
              location="New York"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae cumque animi asperiores quasi, ipsam sit. Doloribus?"
            />
            <TestimonialInfo
              image={Testimonial2}
              name="Ron Rizzly"
              location="London"
              paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Beatae cumque animi asperiores quasi, ipsam sit. Doloribus?"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
