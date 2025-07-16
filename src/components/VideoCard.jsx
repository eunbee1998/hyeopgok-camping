import React from "react";

export default function VideoCard({ video, onClick }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div
      className="video-card"
      onClick={() => onClick(video.id)}
      style={{ cursor: "pointer", minWidth: 500, width: 500, userSelect: "none" }}
    >
      <img
        src={thumbnailUrl}
        alt={video.title}
        style={{ width: "100%", borderRadius: 8, objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: 8 }}>
        <h4 style={{ margin: 4, fontSize: "1rem", color: "#fff" }}>{video.title}</h4>
      </div>
    </div>
  );
}
