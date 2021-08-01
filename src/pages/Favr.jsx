import React from "react";
import RowTable from "../components/RowTable/RowTable";

const Favr = ({ favorites, onAddToFavorite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>Мои закладки</h1>
      </div>

      {favorites.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Manufacturer</th>
              <th>Cargo Oapacity</th>
              <th>Consumables</th>
              <th>Passengers</th>
              <th>Length</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {favorites.map((item) => (
              <RowTable
                key={item.name}
                item={item}
                onAddToFavorite={onAddToFavorite}
              />
            ))}
          </tbody>
        </table>
      ) : (
        <span>Еще нет закладок...</span>
      )}
    </div>
  );
};

export default Favr;
