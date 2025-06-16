import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState("");

  const toggleMenu = (menuName) => {
    setOpenMenu(openMenu === menuName ? "" : menuName);
  };

  return (
    <div className="navbar">
      <Link to="/">🏠 홈</Link>

      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleMenu("hall")}>🏆 명예의 전당</div>
        {openMenu === "hall" && (
          <div className="dropdown-menu">
            <Link to="/hall-of-fame">대회 연혁 & 우승팀</Link>
            <Link to="/hall-of-fame/duo">협곡최강듀오</Link>
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleMenu("broadcast")}>📺 중계 영상</div>
        {openMenu === "broadcast" && (
          <div className="dropdown-menu">
            <Link to="/broadcast/25ggf">25년 GGF</Link>
            {/* 필요시 다른 대회 추가 */}
          </div>
        )}
      </div>

      <div className="dropdown">
        <div className="dropdown-title" onClick={() => toggleMenu("highlight")}>📌 하이라이트</div>
        {openMenu === "highlight" && (
          <div className="dropdown-menu">
            <Link to="/highlights/25ggf">25년 GGF</Link>
          </div>
        )}
      </div>
    </div>
  );
}
