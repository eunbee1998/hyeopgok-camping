import Navbar from "../components/Navbar";


import React from "react";
const videos = [
  { title: "25년 GGF 예선 1경기", id: "abcd1234" },
  { title: "25년 GGF 예선 2경기", id: "efgh5678" },
];

export default function Broadcast() {
  return (<>
<Navbar />
    <div className="page">
      <h2>🎮 중계 영상</h2>
      {videos.map((video, i) => (
        <div key={i}>
          <h4>{video.title}</h4>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${video.id}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ))}
    </div>
  );
}
