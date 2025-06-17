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
      <h2>🏆 명예의 전당 - 협캠최강듀오</h2>
      <div className="card-container">
        {data.map((duoChampion, index) => (
          <div className="card" key={index}>
            <img src={duoChampion.image} alt={duoChampion.name} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{duoChampion.name}</h3>
              <p><strong>최강 듀오: </strong>{duoChampion.winner}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
