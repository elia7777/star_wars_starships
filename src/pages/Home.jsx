import React from "react";
import Card from "../components/Card/Card";

const Home = ({ starships, isLoading }) => {
  const renderItems = () => {
    return (isLoading ? [...Array(10)] : starships).map((item, idx) => (
      <Card
        key={idx}
        {...item}
        item={item}
        loading={isLoading}
      />
    ));
  };
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Все звездолеты</h1>
      </div>

      <div className="d-flex flex-wrap ">{renderItems()}</div>
    </div>
  );
};

export default Home;
