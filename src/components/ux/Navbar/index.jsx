import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from '../../../constants/images';
import "./index.css";

const Navbar = () => {

  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav {...{ className: "navbar" }}>
      <div {...{ className: "navbar__wrapper" }}>
        <div {...{ className: "navbar-logo" }}>
          <img src={images.gerich} alt="logo" />
        </div>
        <ul {...{ className: "navbar-links" }}>
          <li {...{ className: "p__opensans" }}><a href="#home">Home</a></li>
          <li {...{ className: "p__opensans" }}><a href="#about">About</a></li>
          <li {...{ className: "p__opensans" }}><a href="#Menu">Menu</a></li>
          <li {...{ className: "p__opensans" }}><a href="#awards">Awards</a></li>
          <li {...{ className: "p__opensans" }}><a href="#contanct">Contancts</a></li>
        </ul>
        <div {...{className: 'navbar-login'}}>
          <a {...{ href: '#login', className: 'p__opensans' }}>Log In / Register</a>
          <div></div>
          <a {...{href: '/', className: 'p__opensans'}}>Book Table</a>
        </div>
        <div {...{className: 'navbar-smallscreen'}}>
          <GiHamburgerMenu 
            {...{color: 'fff', fontSize: 27, onClick: () => setToggleMenu(toggle => !toggle) }} />
            {toggleMenu && <div {...{className: 'navbar-links__overlay flex__center slide-bottom'}}>
              <MdOutlineRestaurantMenu
                {...{className: 'overlay__close', fontSize: 27, onClick: () => setToggleMenu(toggle => !toggle)}} />
                <ul {...{ className: "navbar-smallscreen-links" }}>
                  <li {...{ className: "p__opensans" }}><a href="#home">Home</a></li>
                  <li {...{ className: "p__opensans" }}><a href="#about">About</a></li>
                  <li {...{ className: "p__opensans" }}><a href="#Menu">Menu</a></li>
                  <li {...{ className: "p__opensans" }}><a href="#awards">Awards</a></li>
                  <li {...{ className: "p__opensans" }}><a href="#contanct">Contancts</a></li>
                </ul>
            </div>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
