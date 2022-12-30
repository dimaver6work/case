import React from "react";
import tg from "../assets/tg.svg";
import vk from "../assets/vk.svg";

const SidebarL = () => {
  return (
    <div className="sidebarL">
      <img src={vk} alt="vk" />
      <img src={tg} alt="tg" />
    </div>
  );
};

export default SidebarL;
