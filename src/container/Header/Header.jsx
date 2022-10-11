import React from "react";
import { SubHeading } from "../../components";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding id='home' ">
    <div className="app__wrapper_info">
      {/* <SubHeading title="Chase the new flavour" /> */}
      <SubHeading title="You just have to #lovecaju" />
      {/* <h1 className="app__header-h1">The Key to Fine Dining</h1> */}
      <h1 className="app__header-h1">
        THE BRASSERIE ULTIMATE DINING EXPERIENCE
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        The concept of CAJU by Joseph Hadad brasserie is casual dining with
        affordable tasty dishes, which can pamper all your senses.
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
