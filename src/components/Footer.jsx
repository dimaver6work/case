import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    // <div className="footerConteiner">
    <div className="Footer">
      <div className="footerRefs">
        <NavLink to="/contacts">
          <span>Контакты</span>
        </NavLink>
        <NavLink to="/agreement">
          <span>Соглашение</span>
        </NavLink>
        <NavLink to="/reviews">
          <span>Отзывы</span>
        </NavLink>
        <NavLink to="/help">
          <span>F.A.Q</span>
        </NavLink>
      </div>
      <div className="footerBot">
        <span>©2023</span>
        <span>KarpevShop</span>
        <span>Все права защищены</span>
      </div>
    </div>
    // </div>
  );
};

export default Footer;
