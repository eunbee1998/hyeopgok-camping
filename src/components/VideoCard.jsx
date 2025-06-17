import React from "react";

export default function VideoCard({ video, onClick }) {
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div
      className="video-card"
      onClick={() => onClick(video.id)}
      style={{
        cursor: "pointer",
        minWidth: "320px",
        width: "320px",
        userSelect: "none",
      }}
    >
      <img
        src={thumbnailUrl}
        alt={video.title}
        style={{ width: "100%", borderRadius: "8px", display: "block" }}
      />
      <div style={{ padding: "8px" }}>
        <h4 style={{ margin: "4px 0", fontSize: "1rem", color: "#fff" }}>
          {video.title}
        </h4>
      </div>
    </div>
  );
}
