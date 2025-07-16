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
    <div className="page" style={{ backgroundColor: "#000", minHeight: "100vh" }}>
      <h2 style={{ color: "white", marginBottom: "20px" }}>📌 대회 하이라이트</h2>
      {data.map(({ tournament, videos }) => (
        <VideoSection key={tournament} tournament={tournament} videos={videos} />
      ))}
    </div>
  );
}
