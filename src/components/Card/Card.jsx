import React, { useState } from "react";
import styles from "./Card.module.scss";
import MyLoader from "../MyLoader/MyLoader";
import AppContext from "../../context";
import { useContext } from "react";

const Card = (props) => {
  const {
    cost_in_credits: price,
    manufacturer,
    imageUrl = "https://i.ebayimg.com/images/g/bmMAAOSwMc5gdhgh/s-l1600.jpg",
    favorited = false,
  } = props;

  const loading = props.loading;
  const {onAddToFavorite} = useContext(AppContext)
  

  const [isFavorite, setIsFavorite] = useState(favorited);

  const onClickFavorite = () => {
    setIsFavorite(!isFavorite);
    onAddToFavorite(props.item);
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <MyLoader />
      ) : (
        <>
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
              <b>
                {price === "unknown" || price === undefined
                  ? "Не продается"
                  : `${price} USD`}{" "}
              </b>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
