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

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <SidebarL />
        <Chat />
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
