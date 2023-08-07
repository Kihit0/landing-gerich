import React from "react";
import "./index.css";

import images from "../../../constants/images";

const SubHeading = (props) => {
  const { title } = props;

  return (
    <div {...{ className: "subheading" }}>
      <p {...{ className: "p__cormorant" }}>{title}</p>
      <img
        {...{
          src: images.spoon,
          alt: "spoon__image",
          className: "spoon__image",
        }}
      />
    </div>
  );
};

export default SubHeading;
