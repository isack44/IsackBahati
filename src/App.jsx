import React, { useState } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-zinc-700 text-amber-50 min-h-screen"
          : "bg-white text-gray-900 min-h-screen"
      }
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/hobbies" element={<Hobbies />} />
        </Routes>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
