import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Hobbies from "./components/hobbies/Hobbies";
import Qualification from "./components/qualification/Qualification";
import Recommendations from "./components/recommendations/Recommendations";

function App() {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Hobbies />
        <Qualification />
        <Recommendations />
      </main>
    </>
  );
}

export default App;
