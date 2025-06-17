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
      <div className="card-container">
        {data.map((t, index) => (
          <div className="card" key={index}>
            <img src={t.image} alt={t.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{t.name}</h3>
              <ul className="winner-list">
                {Object.entries(t.winner).map(([pos, name]) => (
                  <li key={pos}>
                    <strong>{pos}:</strong> {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
