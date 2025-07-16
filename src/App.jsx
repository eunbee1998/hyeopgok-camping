import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import HallOfFame from "./pages/HallOfFame";              // 기존 명예의 전당 페이지
import HighlightVideos from "./pages/HighlightVideos";    // 대회 하이라이트 페이지
import DuoChampions from "./pages/DuoChampions";          // 협캠최강듀오 페이지
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />                        {/* 홈 화면 */}
        <Route path="/hall-of-fame" element={<HallOfFame />} />     {/* 대회 연혁 & 우승팀 */}
        <Route path="/hall-of-fame/duo" element={<DuoChampions />} />{/* 협캠최강듀오 */}
        <Route path="/highlights/highlightVideos" element={<HighlightVideos />} /> {/* 대회영상 > 대회 하이라이트 */}
        <Route path="*" element={<HallOfFame />} />                  {/* 기본 페이지: 명예의 전당 */}
      </Routes>
    </Router>
  );
}
