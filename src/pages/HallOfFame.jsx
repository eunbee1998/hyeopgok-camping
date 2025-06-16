
import React, { useEffect, useState } from "react";

export default function HallOfFame() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/tournaments.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  return (
    <div className="page">
      <h2>🏆 명예의 전당 - 대회 연혁 & 우승팀</h2>
      {data.map((t, index) => (
        <div className="tournament-block" key={index}>
          <img src={t.image} alt={t.name} className="tournament-image" />
          <div className="tournament-info">
            <h3>{t.name}</h3>
            <ul>
              {Object.entries(t.winner).map(([pos, name]) => (
                <li key={pos}><strong>{pos}:</strong> {name}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
