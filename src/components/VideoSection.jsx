import React, { useState } from "react";
import VideoCard from "./VideoCard";

export default function VideoSection({ tournament, videos }) {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section style={{ marginBottom: 40, color: "white" }}>
      <h3>{tournament}</h3>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: 12,
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {videos.map((video) =>
          playingId === video.id ? (
            <div
              key={video.id}
              style={{
                minWidth: 320,
                width: 320,
                position: "relative",
                flexShrink: 0,
              }}
            >
              <iframe
  width="500"       // 썸네일과 같은 크기로 맞춰줌
  height="281"      // 16:9 비율에 맞게 높이 조절 (400 * 9 / 16)
  src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}  // mute=1 추가
  title={video.title}
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ borderRadius: "8px", display: "block" }}
/>
              <button
                onClick={() => setPlayingId(null)}
                style={{
                  position: "absolute",
                  top: 4,
                  right: 4,
                  background: "rgba(0,0,0,0.7)",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  cursor: "pointer",
                  borderRadius: 4,
                }}
              >
                닫기
              </button>
            </div>
          ) : (
            <VideoCard key={video.id} video={video} onClick={setPlayingId} />
          )
        )}
      </div>
    </section>
  );
}
