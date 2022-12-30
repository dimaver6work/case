import React from "react";
import development from "../assets/development.svg";

const Games = () => {
  return (
    <div className="gamesConteiner">
      <div className="games">
        <div className="top">
          <h2>Страница в разработке</h2>
          <img src={development} alt="development" />
        </div>
        <p>
          Мы приносим свои извинения, страница находится на этапе разработки
        </p>
        <button>Главная</button>
      </div>
    </div>
  );
};

export default Games;
