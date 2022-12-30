import React from "react";
import tg from "../assets/tg.svg";
import vk from "../assets/vk.svg";

const Bonuses = () => {
  return (
    <div className="bonuses">
      <h2>
        Следите за нашей группой в Вконтакте и каналом в Телеграмм, чтобы
        получить больше бонусов.
      </h2>
      <div className="buttons">
        <div className="button">
          <img src={vk} alt="vk" />

          <a href="https:// vk.com/karpevshop">Подписаться</a>
        </div>
        <div className="button">
          <img src={tg} alt="tg" />
          <a href="">Подписаться</a>
        </div>
      </div>
    </div>
  );
};

export default Bonuses;
