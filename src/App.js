import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Portfolio />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
