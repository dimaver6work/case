import React from "react";
import gun from "../assets/img_gun.svg";

const Weapon = () => {
  return (
    <div className="weapon">
      <div className="text">
        <h3>Name</h3>
        <p>description</p>
      </div>
      <div className="weapon_image">
        <img src={gun} alt="gun" />
        <div className="background_weapon"></div>
      </div>
    </div>
  );
};

export default Weapon;
