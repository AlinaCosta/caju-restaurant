import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            I breath spices and I create them from scratch.
          </p>
        </div>
        <p className="p__opensans">
          I dream every recipe, I wake up in the morning, I draw it and then I
          walk in the kitchen and cook it. This is the process of every single
          recipe from the menu. Besides my three children, the biggest
          accomplishment of my life is the ability of reinventing new and new
          recipes.
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Joseph Hadad</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.josephSign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
