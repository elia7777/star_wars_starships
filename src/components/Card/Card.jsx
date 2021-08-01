import React, { useState } from "react";
import styles from "./Card.module.scss";

const Card = (props) => {
  const {
    name,
    cost_in_credits: price,
    manufacturer,
    imageUrl = "https://i.ebayimg.com/images/g/bmMAAOSwMc5gdhgh/s-l1600.jpg",
    favorited = false,
  } = props;

  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? "/img/liked.svg" : "/img/unliked.svg"}
          alt="Unliked"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="starships" />
      <h5>{manufacturer}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Стоимость:</span>
          <b>{price === "unknown" ? "Не продается" : `${price} USD`} </b>
        </div>
      </div>
    </div>
  );
};

export default Card;
