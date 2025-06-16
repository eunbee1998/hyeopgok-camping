
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [hover, setHover] = useState("");

  if (isHome) return null;

  return (
    <nav className="navbar">
      <Link to="/">🏠 홈</Link>

      <div
        className="dropdown"
        onMouseEnter={() => setHover("hof")}
        onMouseLeave={() => setHover("")}
      >
        <span className="dropdown-title">🏆 명예의 전당</span>
        {hover === "hof" && (
          <div className="dropdown-menu">
            <a href="/hall-of-fame#team-history">• 대회 연혁 & 우승팀</a>
            <a href="/hall-of-fame#duo-history">• 협곡 최강 듀오</a>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setHover("broadcast")}
        onMouseLeave={() => setHover("")}
      >
        <span className="dropdown-title">📺 중계 영상</span>
        {hover === "broadcast" && (
          <div className="dropdown-menu">
            <a href="/broadcast#ggf-2025">• 25년 GGF</a>
            <a href="/broadcast#ggf-2024">• 24년 GGF</a>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setHover("highlight")}
        onMouseLeave={() => setHover("")}
      >
        <span className="dropdown-title">📌 하이라이트</span>
        {hover === "highlight" && (
          <div className="dropdown-menu">
            <a href="/highlights#ggf-2025">• 25년 GGF</a>
            <a href="/highlights#ggf-2024">• 24년 GGF</a>
          </div>
        )}
      </div>
    </nav>
  );
}
