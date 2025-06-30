import "./App.css";
import AboutMe from "./components/AboutMe";
import Home from "./components/Home";
import Hobbies from "./components/Hobbies";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <h4>Hi, isack here</h4>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
