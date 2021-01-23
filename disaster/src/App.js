import React from "react";
import "./App.css";
import HomePage from "src/Containers/HomePage";
import Survavial_Kits from "src/Component/Survavial kits";
import Supliers from "src/Component/Supliers";
import Help from "src/Component/Help";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "src/Component/Header";
import NavBar from "src/Component/NavBar";
import Landing from "src/Component/Choose_Disaster";
import Login from "src/Component/LoginVictim/Login";
import SOS from "src/Containers/SOS";
import LoginRescue from "src/Component/LoginRescue/AppRescue";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <NavBar />
        <Route path="/" exact component={HomePage} />
        <Route path="/Survavial_Kits" exact component={Survavial_Kits} />
        <Route path="/Help" exact component={Help} />
        <Route path="/Supliers" eaxact component={Supliers} />
        <Route path="/Landing" eaxact component={Landing} />
        <Route path="/Login" exact component={Login} />
        <Route path="/SOS" exact component={SOS} />
        <Route path="/LoginRescue" exact component={LoginRescue} />
      </div>
    </Router>
  );
}

export default App;
