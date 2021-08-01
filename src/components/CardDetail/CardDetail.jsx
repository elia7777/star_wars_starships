import React, { useState } from "react";
import styles from "./CardDetail.module.scss";
const CardDetail = (props) => {
  const {
    cost_in_credits: price,
    manufacturer,
    imageUrl = "https://i.ebayimg.com/images/g/bmMAAOSwMc5gdhgh/s-l1600.jpg",
    favorited = true,
    cargo_capacity,
    consumables,
    crew,
    hyperdrive_rating,
    length,
    name,
    passengers,
    starship_class,
  } = props.item;

  const onAddToFavorite = props.onAddToFavorite;
  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorite(props.item);
  };


  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={103} height={82} src={imageUrl} alt="starships" />
      <h5>{manufacturer}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Стоимость:</span>
          <b>
            {price === "unknown" || price === undefined
              ? "Не продается"
              : `${price} USD`}{" "}
          </b>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
