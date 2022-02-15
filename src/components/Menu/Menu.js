import { useState } from "react";
import "./Menu.scss";

function Menu() {
  const [open, setOpen] = useState(false);
  const [onSelected, setOnSelected] = useState(false);

  const onToggle = () => {
    setOpen(!open);
  };

  const categoriesList = [
    "copilot",
    "desert",
    "facades",
    "la familie",
    "on a rock",
    "polish",
    "rouge",
    "stairs",
    "essentials",
    "places",
    "wallpapers",
  ];

  const onSwitch = () => {
    setOnSelected(!onSelected);
  };

  return (
    <>
      <header>
        <div className="title">
          <h1>almadebenath</h1>
          <div className={"title__line" + (open ? " menu--open" : "")}></div>
        </div>

        <div className="burger" onClick={onToggle}>
          <div
            className={"burger__layer" + (open ? " burger__layer--top" : "")}
          ></div>
          <div
            className={"burger__layer" + (open ? " burger__layer--bottom" : "")}
          ></div>
        </div>
      </header>
      <section
        className={"menu-container" + (open ? " menu-container--open" : "")}
      >
        <ul className="menu">
          {categoriesList.map((categorie, index) => (
            <li className="menu__element" key={index}>
              {categorie.toUpperCase()}
              <span className="menu__line" />
            </li>
          ))}
        </ul>
        <h2 className="menu__element menu__element--about">about</h2>
        <div className="switch-container">
          <label className="switch" onChange={onSwitch}>
            <input type="checkbox" />
            <span className="slider">
              <span className="action"></span>
              <p className={onSelected ? "" : "selected"}>personal</p>
              <p className={onSelected ? "selected" : ""}>location</p>
            </span>
          </label>
        </div>
      </section>
    </>
  );
}

export default Menu;
