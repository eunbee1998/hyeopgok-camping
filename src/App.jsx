
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import HallOfFame from "./pages/HallOfFame";
import Broadcast from "./pages/Broadcast";
import Highlights from "./pages/Highlights";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/highlights" element={<Highlights />} />
      </Routes>
    </Router>
  );
}
