import React from "react";
import profile from "../assets/profileImg.png";

const Massage = () => {
  return (
    <div className="massageBlock">
      <div className="imageBorder">
        <img src={profile} alt="profileImg" />
      </div>
      <div className="massegeBlockR">
        <div className="name">bigboss777</div>
        <div className="massege">Привет!</div>
      </div>
    </div>
  );
};

export default Massage;
