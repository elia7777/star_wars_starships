import React from "react";

const RowTable = (props) => {
  const {
    name,
    manufacturer,
    cargo_capacity,
    consumables,
    passengers,
    length,
    cost_in_credits: price,
  } = props.item;

  const onAddToFavorite = props.onAddToFavorite;
  const onClickDelete = () => {
    onAddToFavorite(props.item)
  }

  return (
    <tr>
      <td>{name}</td>
      <td>{manufacturer}</td>
      <td>{cargo_capacity}</td>
      <td>{consumables}</td>
      <td>{passengers === "n/a" ? "-" : passengers}</td>
      <td>{length}</td>
      <td>{price === "unknown" ? "-" : price}</td>
      <td >
        <div className="d-flex justify-center delete" onClick={onClickDelete}>
          <img src="img/delete.svg" alt="delete" width={22} />
        </div>
      </td>
    </tr>
  );
};

export default RowTable;
