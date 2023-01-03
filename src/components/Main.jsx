import React from "react";
import Weapon from "./Weapon";
import Case from "./Case";

const Main = () => {
  return (
    <div className="mainConteiner">
      <div className="main">
        <div className="weapons">
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
          <Weapon />
        </div>
        <h2>Коллекция кейсов</h2>
        <div className="caseCollection">
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
          <Case />
        </div>
      </div>
    </div>
  );
};

export default Main;
