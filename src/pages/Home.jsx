
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

export default function Home() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="home" onClick={() => setShowMenu(true)}>
      <img src="/bg.jpg" alt="배경" className="bg" />
      <div className="logo-box">
        <img src="/logo.png" alt="협곡캠핑" className="logo" />
        {showMenu && (
          <div className="menu">
            <button onClick={() => navigate("/hall-of-fame")}>🏆 명예의 전당</button>
            <button onClick={() => navigate("/broadcast")}>📺 중계 영상</button>
            <button onClick={() => navigate("/highlights")}>📌 하이라이트</button>
          </div>
        )}
      </div>
    </div>
  );
}
