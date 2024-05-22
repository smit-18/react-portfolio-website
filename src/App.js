import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Hobbies from "./components/hobbies/Hobbies";
import Qualification from "./components/qualification/Qualification";
import Recommendations from "./components/recommendations/Recommendations";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

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
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
