import React from "react";
import images from "../../../constants/images";
import "./index.css";

const About = () => {
  return (
    <div {...{ className: "about flex__center section__padding", id: "about" }}>
      <div {...{ className: "about-overlay flex__center" }}>
        <img
          {...{
            src: images.G,
            alt: "g__image",
            className: "",
          }}
        />
      </div>
      <div {...{ className: "about-content flex__center" }}>
        <div {...{ className: "about-content__aboutus" }}>
          <h2 {...{ className: "headtext__cormorant" }}>About Us</h2>
          <img
            {...{
              src: images.spoon,
              alt: "spoon__about",
              className: "spoon__img",
            }}
          />
          <p {...{ className: "p__opensans" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button {...{ type: "button", className: "custom__button" }}>
            Know More
          </button>
        </div>
        <div {...{ className: "about-content__knife flex__center" }}>
          <img
            {...{
              src: images.knife,
              alt: "knife__image",
            }}
          />
        </div>
        <div {...{ className: "about-content__history" }}>
          <h2 {...{ className: "headtext__cormorant" }}>Our History</h2>
          <img
            {...{
              src: images.spoon,
              alt: "spoon__about",
              className: "spoon__img",
            }}
          />
          <p {...{ className: "p__opensans" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <button {...{ type: "button", className: "custom__button" }}>
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
