import React, { useEffect, useState } from "react";
import VideoSection from "../components/VideoSection";

export default function HighlightVideos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/HighlightVideos.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);
  
return (
  <div style={{ padding: "20px", backgroundColor: "#000", minHeight: "100vh", color: "white" }}>
    <h2>📌 대회 하이라이트</h2>
    {data.length === 0 && <p>데이터를 불러오는 중입니다...</p>}
    {data.map(({ tournament, videos }, idx) => (
      <div key={idx} style={{ marginBottom: 30 }}>
        <h3>{tournament}</h3>
        {videos.map(video => (
          <p key={video.id}>{video.title}</p>
        ))}
      </div>
    ))}
  </div>
);
