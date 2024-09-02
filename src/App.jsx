import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import HomeWork from "./components/HomeWork";
import ClassVideos from "./components/ClassVideos";
import Materials from "./components/Materials";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homeworks" element={<HomeWork />} />
        <Route path="/classvideos" element={<ClassVideos />} />
        <Route path="/materials" element={<Materials />} />
      </Routes>
    </>
  );
}

export default App;
