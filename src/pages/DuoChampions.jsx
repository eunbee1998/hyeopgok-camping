import React, { useEffect, useState } from "react";

export default function DuoChampions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/duoChampions.json")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <h2>🏆 명예의 전당 - 협곡최강듀오</h2>
      <div className="card-container">
        {data.map((tournament, index) => (
          <div className="card" key={index}>
            <img src={tournament.image} alt={tournament.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{tournament.name}</h3>
              <p><strong>1등팀 선수: </strong>{tournament.winner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
