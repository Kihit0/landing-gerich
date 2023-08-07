import React from "react";
import "./index.css";

const MenuItem = (props) => {
  const { title, price, tags } = props;

  return (
    <div {...{ className: "menuitem" }}>
      <div {...{ className: "menuitem-head" }}>
        <div {...{ className: "menuitem-name" }}>
          <p {...{ className: "p__cormorant", style: { color: "#DCCA87" } }}>
            {title}
          </p>
        </div>
        <div {...{ className: "menuitem-dash" }}></div>
        <div {...{ className: "menuitem-price" }}>
          <p {...{ className: "p__cormorant" }}>{price}</p>
        </div>
      </div>
      <div {...{ className: "menuitem-sub" }}>
        <p {...{ className: "p__cormorant" }}>{tags}</p>
      </div>
    </div>
  );
};

export default MenuItem;
