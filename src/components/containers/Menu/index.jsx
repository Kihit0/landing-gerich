import React from "react";
import "./index.css";
import { SubHeading, MenuItem } from "../../ux/index";
import json from "../../../constants/index";

const Menu = () => {
  return (
    <div {...{ className: "menu flex__center section__padding" }}>
      <div {...{ className: "menu-title" }}>
        <SubHeading
          {...{
            title: "Menu that fits you palatte",
          }}
        />
        <h2 {...{ className: "headtext__cormorant" }}>Today’s Special</h2>
      </div>
      <div {...{ className: "menu-items" }}>
        <div {...{ className: "menu-items-wine" }}>
          <p {...{ className: "menu-items-heading" }}>Wine & Beer</p>
          <div {...{ className: "menu-items-list" }}>
            {json.data.wines.map((wine, index) => {
              return (
                <MenuItem
                  {...{
                    title: wine.title,
                    price: wine.price,
                    tags: wine.tags,
                    key: index,
                  }}
                />
              );
            })}
          </div>
        </div>
        <div {...{ className: "menu-items-img" }}>
          <img
            {...{
              src: json.images.mixer,
              alt: "menu__mixer",
              className: "",
            }}
          />
        </div>
        <div {...{ className: "menu-items-cocktails" }}>
          <p {...{ className: "menu-items-heading" }}>Cocktails</p>
          <div {...{ className: "menu-items-list" }}>
            {json.data.cocktails.map((cocktails, index) => {
              return (
                <MenuItem
                  {...{
                    title: cocktails.title,
                    price: cocktails.price,
                    tags: cocktails.tags,
                    key: index,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div {...{ style: { marginTop: "15px" } }}>
        <button {...{ className: "custom__button", type: "button" }}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Menu;
