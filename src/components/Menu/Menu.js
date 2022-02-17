import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.scss";

function Menu({ categoriesList }) {
  const [open, setOpen] = useState(false);
  const [onSelected, setOnSelected] = useState(false);
  const [categories, setCategories] = useState(categoriesList.personal);
  const [theme, setTheme] = useState("personal");
  const navigate = useNavigate();

  const onToggle = () => {
    setOpen(!open);
  };

  const onSwitch = () => {
    setOnSelected(!onSelected);
    setTheme(theme === "personal" ? "location" : "personal");

    categories === categoriesList.personal
      ? setCategories(categoriesList.location)
      : setCategories(categoriesList.personal);
  };

  const onNavigate = (categorie) => {
    navigate(`${theme}/${categorie}`);
    setOpen(false);
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
        style={
          !onSelected ? { background: "#dfc576" } : { background: "#7C8979" }
        }
      >
        <ul className="menu">
          {categories.map((categorie, index) => (
            <li
              className="menu__element"
              key={index}
              onClick={() => onNavigate(categorie)}
            >
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
              <span
                className="action"
                style={
                  !onSelected
                    ? { background: "#dfc576" }
                    : { background: "#5C6D57" }
                }
              ></span>
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
