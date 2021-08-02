import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Favr from "./pages/Favr";
import AppContext from "./context";

function App() {
  const [starships, setStarships] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      setTimeout(() => {
        setStarships(res.data.results);
        setIsLoading(false);
      }, 1200);
    });
  }, []);

  const onAddToFavorite = (object) => {
    let isAlreadyFavorite = favorites.find(
      (favObj) => favObj?.name === object.name
    );

    if (isAlreadyFavorite) {
      const updateFavorites = favorites.filter(
        (favObj) => favObj?.name !== object.name
      );
      setFavorites(updateFavorites);
      setStarships(
        starships.map((el) => {
          if (el.name === object.name) {
            return { ...el, favorited: false };
          }
          return el;
        })
      );
    } else {
      setFavorites((prev) => [...prev, { ...object, favorited: true }]);
      setStarships(
        starships.map((el) => {
          if (el.name === object.name) {
            return { ...el, favorited: true };
          }
          return el;
        })
      );
    }
  };

  return (
    <AppContext.Provider value={{ favorites, onAddToFavorite }}>
      <div className="wrapper clear">
        <Header />

        <Route path="/" exact>
          <Home
            starships={starships}
            isLoading={isLoading}
          />
        </Route>

        <Route path="/favorites" exact>
          <Favr />
        </Route>
      </div>
    </AppContext.Provider >
  );
}

export default App;
