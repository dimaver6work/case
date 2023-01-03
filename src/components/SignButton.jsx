import React from "react";

const SignButton = ({ setModalActive }) => {
  return (
    <div onClick={() => setModalActive(true)} className="signButton">
      Войти
    </div>
  );
};

export default SignButton;
