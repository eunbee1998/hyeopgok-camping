import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const [hoverMenu, setHoverMenu] = useState("");

  return (
    <div className="navbar">
      <Link to="/">🏠 홈</Link>

      <div
        className="dropdown"
        onMouseEnter={() => setHoverMenu("hall")}
        onMouseLeave={() => setHoverMenu("")}
      >
        <div className="dropdown-title">🏆 명예의 전당</div>
        {hoverMenu === "hall" && (
          <div className="dropdown-menu">
            <Link to="/hall-of-fame">대회 연혁 & 우승팀</Link>
            <Link to="/hall-of-fame/duo">협곡최강듀오</Link>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setHoverMenu("broadcast")}
        onMouseLeave={() => setHoverMenu("")}
      >
        <div className="dropdown-title">📺 중계 영상</div>
        {hoverMenu === "broadcast" && (
          <div className="dropdown-menu">
            <Link to="/broadcast/25ggf">25년 GGF</Link>
            {/* 필요시 다른 대회도 추가 */}
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setHoverMenu("highlight")}
        onMouseLeave={() => setHoverMenu("")}
      >
        <div className="dropdown-title">📌 하이라이트</div>
        {hoverMenu === "highlight" && (
          <div className="dropdown-menu">
            <Link to="/highlights/25ggf">25년 GGF</Link>
          </div>
        )}
      </div>
    </div>
  );
}

