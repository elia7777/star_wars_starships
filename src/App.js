import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";

function App() {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/starships/").then((res) => {
      setStarships(res.data.results);
    });
  }, []);

  console.log(starships);

  return (
    <div className="wrapper clear">
      <Header />
      
      <Route path="/" exact>
        <Home starships={starships} />
      </Route>

      <Route path="/favorites" exact>
        <Favorites />
      </Route>
    </div>
  );
}

export default App;
