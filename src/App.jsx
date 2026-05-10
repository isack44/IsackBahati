import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "dark bg-[#121212] text-amber-50 min-h-screen"
          : "bg-zinc-50 text-gray-900 min-h-screen"
      }
    >
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />}/>
        </Routes>
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
