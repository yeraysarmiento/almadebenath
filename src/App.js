import "./App.css";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import data from "./data";

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
      <Routes>
        <Route path="/" />
        <Route
          path="/personal"
          element={<Gallery collection={data.personal} />}
        />
        <Route
          path="/location"
          element={<Gallery collection={data.location} />}
        />
      </Routes>
    </div>
  );
}

export default App;
