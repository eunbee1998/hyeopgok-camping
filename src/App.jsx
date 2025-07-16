import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HallOfFame from "./pages/HallOfFame";      // 기존 명예의 전당 페이지
import HighlightVideos from "./pages/HighlightVideos";  // 새로 만들 대회 하이라이트 페이지
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/hall-of-fame" element={<HallOfFame />} />
        <Route path="/highlights/highlightVideos" element={<HighlightVideos />} />
        <Route path="*" element={<HallOfFame />} /> {/* 기본 페이지로 명예의 전당 */}
      </Routes>
    </Router>
  );
}
