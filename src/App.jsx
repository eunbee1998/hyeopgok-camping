import DuoChampions from "./pages/DuoChampions";  // 경로 맞게 수정해주세요
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Broadcast from "./pages/Broadcast";
import Highlights from "./pages/Highlights";
import HallOfFame from "./pages/HallOfFame";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/broadcast" element={<Broadcast />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        
        {/* 여기에 아래 한 줄 추가 */}
        <Route path="/hall-of-fame/duo" element={<DuoChampions />} />
        
      </Routes>
    </Router>
  );
}
