import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Favr from "./pages/Favr";

function App() {
  const [starships, setStarships] = useState([]);
  const [favorites, setFavorites] = React.useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      setStarships(res.data.results);
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
      setStarships(starships.map(el => {
        if(el.name === object.name) {
          return {...el, favorited: false }
        }
        return el
      }))
      
    } else {
      setFavorites((prev) => [...prev, { ...object, favorited: true }]);
      setStarships(starships.map(el => {
        if(el.name === object.name) {
          return {...el, favorited: true }
        }
        return el
      }))
    }
  };

  return (
    <div className="wrapper clear">
      <Header />

      <Route path="/" exact>
        <Home starships={starships} onAddToFavorite={onAddToFavorite} />
      </Route>

      <Route path="/favorites" exact>
        <Favr favorites={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
    </div>
  );
}

export default App;
