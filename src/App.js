import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import data from "./assets/data";
import Detail from "./components/Detail/Detail";

function App() {
  const categories = {
    personal: [
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
      "arch",
    ],
    locations: ["drone", "exterior", "interior", "car", "nature"],
  };

  return (
    <div className="app">
      <Menu categoriesList={categories} />
      <Gallery collection={data.personal} />
      <Detail picture={data.personal.pictures[0]} />
      <Routes>
        <Route path="/" element={<Navigate to="/personal" />} />{" "}
      </Routes>
    </div>
  );
}

export default App;
