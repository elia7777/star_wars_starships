import React from "react";
import Card from "../components/Card/Card";

const Home = ({ starships }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все звездолеты</h1>
      </div>

      <div className="d-flex flex-wrap ">
        {starships.map((item, index) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
