import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import data from "./assets/data";

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
    </div>
  );
}

export default App;
