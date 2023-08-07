import React from "react";
import "./index.css";
import images from "../../../constants/images";
import { SubHeading } from "../../ux";

const Chefs = () => {
  return (
    <div {...{ className: "chef App__wrapper section__padding" }}>
      <div
        {...{
          className: "chef__img App__wrapper-img App__wrapper-img__reverse",
        }}
      >
        <img
          {...{
            src: images.chef,
            alt: "chef img",
            className: "",
          }}
        />
      </div>
      <div {...{ className: "chef__info App__wrapper-info" }}>
        <div {...{ className: "chef__info-title" }}>
          <SubHeading {...{ title: "Chef’s Word" }} />
          <h2 {...{ className: "headtext__cormorant" }}>What we believe in</h2>
        </div>
        <div {...{ className: "chef__info-content" }}>
          <div {...{ className: "chef__info-content__quote" }}>
            <img
              {...{
                src: images.quote,
                alt: "quote img",
                className: "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chefs;
