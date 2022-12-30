import React from "react";
import vk from "../assets/orangeVk.svg";
import telegram from "../assets/orangeTelegram.svg";
import mail from "../assets/orangeMail.svg";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contact">
        <img src={vk} alt="vk" />
        <a href="https://vk.com/karpevshop">https://vk.com/karpevshop</a>
      </div>
      <div className="contact">
        <img src={telegram} alt="telegram" />
        <a href="https://t.me/karpevshop ">https://t.me/karpevshop </a>
      </div>
      <div className="contact">
        <img src={mail} alt="mail" />
        <a href="support@karpevshop.com">support@karpevshop.com</a>
      </div>
    </div>
  );
};

export default Contacts;
