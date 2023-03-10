import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css"
import Home from "./Pages/Home";
import Error from "./Pages/Error404"
import About from "./Pages/About";
import Logement from "./Pages/Logement"
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/logement/:id" component={Logement} />
        {/* path="*" fonctionne si jamais l'url ne correspond à rien de déclaré au dessus */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;