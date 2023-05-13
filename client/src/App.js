import React from "react";

import Hero from "./components/hero/Hero";
import BookPage from "./pages/BookPage";
import Contact from "./pages/Contact";
import Makeup from "./pages/Makeup";
import Lashes from "./pages/Lashes";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />

      <Makeup />
      <Lashes />
      <Contact />
    </div>
  );
}

export default App;
