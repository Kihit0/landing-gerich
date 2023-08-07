import React from "react";
import "./index.css";
import images from "../../../constants/images";
import { SubHeading } from "../../ux";

const Header = ({ children }) => {
  return (
    <div {...{ className: "header App__wrapper", id: "home" }}>
      <div {...{ className: "header__navbar" }}>{children}</div>
      <div {...{ className: "header__wrapper section__padding" }}>
        <div {...{ className: "App__wrapper-info" }}>
          <SubHeading {...{ title: "Chase the new flavour" }} />
          <h1 {...{ className: "header__h1" }}>The Key to Fine Dining</h1>
          <p {...{ className: "p__opensans", style: { margin: "2rem 0" } }}>
            Sit tellus lobortis sed senectus vivamus molestie. Condimentum
            volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
            aliquam amet tellus
          </p>
          <button {...{ type: "button", className: "custom__button" }}>
            Explore Menu
          </button>
        </div>
        <div {...{ className: "App__wrapper-img" }}>
          <img
            {...{
              src: images.welcome,
              alt: "header__image",
              className: "",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
