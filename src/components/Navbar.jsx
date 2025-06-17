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
            <Link to="/hall-of-fame/duo">협캠최강듀오</Link>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setHoverMenu("broadcast")}
        onMouseLeave={() => setHoverMenu("")}
      >
        <div className="dropdown-title">📺 대회영상</div>
        {hoverMenu === "broadcast" && (
          <div className="dropdown-menu">
            <Link to="/broadcast/25ggf">중계영상(full)</Link>
            <Link to="/highlights/highlightVideos">대회 하이라이트</Link>
          </div>
        )}
      </div>

      {/* 하이라이트 메뉴는 드롭다운 제거하고 단일 링크로 변경 */}
      <Link to="/highlights/25ggf" className="navbar-link">
        📌 하이라이트
      </Link>
    </div>
  );
}

