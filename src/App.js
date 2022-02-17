import "./App.css";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import Menu from "./components/Menu/Menu";
import data from "./data";
import { useEffect } from "react";

function App() {
  const { pathname } = useLocation();

  const getCategories = () => {
    const categories = {
      personal: [],
      location: [],
    };

    for (const categorie in data.personal) {
      categories.personal.push(categorie);
    }

    for (const categorie in data.location) {
      categories.location.push(categorie);
    }

    return categories;
  };

  const categoriesList = getCategories();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app">
      <Menu categoriesList={categoriesList} />
      <Routes>
        <Route path="/" element={<Navigate to="/personal/essential" />} />
        <Route path="/personal" element={<Gallery theme={data.personal} />} />
        <Route path="/location" element={<Gallery theme={data.location} />} />
        <Route
          path="/personal/:collection"
          element={<Gallery theme={data.personal} />}
        />
        <Route
          path="/location/:collection"
          element={<Gallery theme={data.location} />}
        />
        <Route path="*" element={<Navigate to="/personal/essential" />} />
      </Routes>
    </div>
  );
}

export default App;
