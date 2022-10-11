import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.C} alt="g letter" />
    </div>
    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          One of the best places to be in town!
          <br /> Good vibes, professional service & a lot of positive energy.
          <br /> The concept of CAJU by Joseph Hadad brasserie is casual dining
          with affordable tasty dishes, which can pamper all your senses. It’s
          the place where Joseph brings to table the tastes of his childhood,
          with strong North African influences.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>
      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">The Brasserie</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          The cozy place, features a very original and urban design and provides
          three areas of accommodation and a very beautiful terrace.
          <br /> The whole space is dominated by a curved wooden ceiling, each
          table featuring a chandelier above, made of a mix of ceramic and
          metal.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
