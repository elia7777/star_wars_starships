import React from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={80} height={80} src="/img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">Starships</h3>
            <p className="opacity-5">Коллекция звездолетов</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li className="mr-40 cu-p">
          <Link to="/favorites" className="d-flex align-center">
            <img width={18} height={18} src="/img/heart.svg" alt="Закладки" />
            <span>Закладки</span>
          </Link>
        </li>
        <li className="d-flex align-center">
          <img width={18} height={18} src="/img/user.svg" alt="Пользователь" />
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
