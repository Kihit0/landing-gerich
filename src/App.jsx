import React from "react";
import { Header, About, Menu, Chef } from "./components/containers/index";
import { Navbar } from "./components/ux";
import "./app.css";

const App = () => {
  return (
    <div {...{ className: "App App__bg" }}>
      <div {...{ className: "App__wrapper" }}>
        <div {...{ className: "App__header" }}>
          <Header>
            <div {...{ className: "App__navbar" }}>
              <Navbar />
            </div>
          </Header>
        </div>
        <div {...{ className: "App__about" }}>
          <About />
        </div>
        <div {...{ className: "App__menu" }}>
          <Menu />
        </div>
        <div {...{className: "App__chef"}}>
          <Chef />
        </div>
      </div>
    </div>
  );
};

export default App;
