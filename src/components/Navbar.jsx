import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">🏠 홈</Link>
      <Link to="/hall-of-fame">🏆 명예의 전당</Link>
      <Link to="/broadcast">📺 중계 영상</Link>
      <Link to="/highlights">📌 하이라이트</Link>
    </div>
  );
}
