import React from "react";
import chatImg from "../assets/chat.svg";
import texting from "../assets/texting.svg";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { useState } from "react";
import chatIcon from "../assets/userChatIcon.svg";
import Massage from "./Massage";

const Chat = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div onClick={openModal} className="chat">
        <img src={chatImg} alt="chat" />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="chatContent"
        overlayClassName="overlay"
        contentLabel="Example Modal"
      >
        <div onClick={closeModal} className="closeButton">
          Скрыть {">"}
        </div>
        <div className="modalConteiner">
          <div className="modalTop">
            <div>Чат игроков</div>
            <div className="right">
              <img src={chatIcon} alt="chatIcon" />
              <span>237</span>
            </div>
          </div>
          <div className="texting">
            <Massage />
          </div>
          <div className="input">
            <input type="text" placeholder="Введите ваше сообщение" />
            <img src={texting} alt="send" />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Chat;
