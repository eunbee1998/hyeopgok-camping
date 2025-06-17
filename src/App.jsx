import DuoChampions from "./pages/DuoChampions"; 
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Broadcast from "./pages/Broadcast";
import HighlightVideos from "./pages/HighlightVideos";  
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
        <Route path="/highlights" element={<HighlightVideos />} /> {/* 전체 대회 하이라이트 */}
        <Route path="/highlights/:tournamentId" element={<HighlightVideos />} /> {/* 개별 대회 하이라이트 */}
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/hall-of-fame/duo" element={<DuoChampions />} />
      </Routes>
    </Router>
  );
}
