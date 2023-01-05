import "./styles/styles.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import SidebarL from "./components/SidebarL";
import Chat from "./components/Chat";
import Games from "./components/Games";
import Error from "./components/Error";
import Help from "./components/Help";
import Bonuses from "./components/Bonuses";
import Contacts from "./components/Contacts";
import Agreement from "./components/Agreement";
import Politic from "./components/Politic";
import ModalSignIn from "./components/ModalSignIn";

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import ModalSignUp from "./components/ModalSignUp";

function App() {
  const [modalSignInActive, setModalSignInActive] = useState(false);
  const [modalSignUpActive, setModalSignUpActive] = useState(false);
  return (
    <Router>
      {/* <Provider store={store}> */}
      <div className="App">
        <Navbar setModalSignInActive={setModalSignInActive} />
        <SidebarL />
        <Chat />
        <div className="Main">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/games" element={<Games />} />
            <Route path="/help" element={<Help />} />
            <Route path="/bonuses" element={<Bonuses />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/agreement" element={<Agreement />} />
            <Route path="/Politic" element={<Politic />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
        {modalSignInActive && (
          <ModalSignIn
            modalSignInActive={modalSignInActive}
            setModalSignInActive={setModalSignInActive}
            setModalSignUpActive={setModalSignUpActive}
          />
        )}{" "}
        {modalSignUpActive && (
          <ModalSignUp
            modalSignUpActive={modalSignUpActive}
            setModalSignUpActive={setModalSignUpActive}
            setModalSignInActive={setModalSignInActive}
          />
        )}
      </div>

      {/* </Provider> */}
    </Router>
  );
}

export default App;
