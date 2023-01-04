import React from "react";

const SignButton = ({ setModalSignInActive }) => {
  return (
    <div onClick={() => setModalSignInActive(true)} className="signButton">
      Войти
    </div>
  );
};

export default SignButton;
