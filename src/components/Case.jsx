import React from "react";
import CaseImg from "../assets/case.png";

const Case = () => {
  return (
    <div className="case">
      <img src={CaseImg} alt="CaseImg" />
      <h3>NAME</h3>
      <div className="price_conteiner">
        <div className="border_img"></div>
        <div className="price">50 P</div>
      </div>
    </div>
  );
};

export default Case;
