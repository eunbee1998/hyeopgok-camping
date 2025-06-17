import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import VideoSection from "../components/VideoSection";

export default function HighlightVideos() {
  const { tournamentId } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/highlightVideos.json")
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  if (!data.length) return <p style={{ color: "white", padding: 20 }}>데이터를 불러오는 중입니다...</p>;

  const filtered = tournamentId
    ? data.filter(d => d.id === tournamentId)
    : data;

  return (
    <div style={{ padding: 20, backgroundColor: "#000", minHeight: "100vh", color: "white" }}>
      <h2>📌 대회 하이라이트</h2>
      {filtered.map(({ tournament, videos }, idx) => (
        <VideoSection key={idx} tournament={tournament} videos={videos} />
      ))}
    </div>
  );
}
