import React from "react";
import profileImg from "../assets/profileImg.png";

const Profile = () => {
  return (
    <div className="profile">
      <img src={profileImg} alt="profileImg" />
      <div className="profile_text">
        <div className="profile_text_top">
          <span>nickname</span>
          <span>id</span>
          <span className="id">975557</span>
        </div>
        <div className="profile_text_bot">
          <div className="coins">
            <p>100 G</p>
          </div>
          <span className="plus">+</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
