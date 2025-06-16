
import Navbar from "../components/Navbar";
import React from "react";

const clips = [
  { title: "25년 GGF 하이라이트 1", id: "ijkl9012" },
  { title: "25년 GGF 하이라이트 2", id: "mnop3456" },
];

export default function Highlights() {
  return (
    <>
      <Navbar />
      <div className="page">
        <h2 id="ggf-2025">✨ 25년 GGF 하이라이트</h2>
        {clips.map((clip, i) => (
          <div key={i}>
            <h4>{clip.title}</h4>
            <iframe
              width="320"
              height="560"
              src={`https://www.youtube.com/embed/${clip.id}`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </>
  );
}
