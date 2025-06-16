
import Navbar from "../components/Navbar";
import React from "react";

const teamData = [
  { year: "2025", name: "GGF 봄대회", winner: "선넘네" },
  { year: "2025", name: "GGF 여름대회", winner: "룰루조" },
];

const duoData = [
  { year: "2025", name: "협곡 듀오전", winner: "소라카바루스" },
  { year: "2025", name: "레전드 듀오컵", winner: "신짜오럭스" },
];

export default function HallOfFame() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h2 id="team-history">📅 대회 연혁 & 우승팀</h2>
        <ul>
          {teamData.map((item, i) => (
            <li key={i}>
              {item.year} {item.name} - 우승팀: {item.winner}
            </li>
          ))}
        </ul>

        <h2 id="duo-history">💑 협곡 최강 듀오</h2>
        <ul>
          {duoData.map((item, i) => (
            <li key={i}>
              {item.year} {item.name} - 우승듀오: {item.winner}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
