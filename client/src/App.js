import React from "react";

import Hero from "./components/hero/Hero";
import BookPage from "./pages/BookPage";
import Contact from "./pages/Contact";
import Makeup from "./pages/Makeup";
import Lashes from "./pages/Lashes";

function App() {
  return (
    <div className="App">
      <Hero />
      <BookPage />
      <Makeup />
      <Lashes />
      <Contact />
    </div>
  );
}

export default App;
