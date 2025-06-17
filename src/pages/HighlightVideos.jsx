import React, { useEffect, useState } from "react";
import VideoSection from "../components/VideoSection";

export default function HighlightVideos() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/highlightVideos.json")
      .then((res) => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: "20px", backgroundColor: "#000", minHeight: "100vh" }}>
      <h2 style={{ color: "white" }}>📌 대회 하이라이트</h2>
      {data.map(({ tournament, videos }, idx) => (
        <VideoSection key={idx} tournament={tournament} videos={videos} />
      ))}
    </div>
  );
}
