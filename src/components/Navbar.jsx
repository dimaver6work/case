import React from "react";
import logo from "../assets/logo.png";
import Profile from "./Profile";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navConteiner">
      <div className="navbar">
        <div className="navL">
          <img src={logo} alt="logo" className="logo" />
          <NavLink to="/">
            <span>Главная</span>
          </NavLink>
          <NavLink to="/games">
            <span>Игры</span>
          </NavLink>
          <NavLink to="/help">
            <span>Помощь</span>
          </NavLink>
          <NavLink to="/bonuses">
            <span>Бонусы</span>
          </NavLink>
          <NavLink to="/profile">
            <span>Профиль</span>
          </NavLink>
        </div>
        <div className="navR">
          <Profile />
          <button>Выйти</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;