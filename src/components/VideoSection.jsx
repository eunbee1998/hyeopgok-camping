import React, { useState } from "react";
import VideoCard from "./VideoCard";

export default function VideoSection({ tournament, videos }) {
  const [playingId, setPlayingId] = useState(null);

  return (
    <section style={{ marginBottom: "40px", color: "white" }}>
      <h3>{tournament}</h3>
      <div
        style={{
          display: "flex",
          overflowX: "auto",
          gap: "12px",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {videos.map((video) =>
          playingId === video.id ? (
            <div
              key={video.id}
              style={{
                minWidth: "320px",
                width: "320px",
                position: "relative",
                flexShrink: 0, // 부모 flex가 크기 줄이는 걸 방지
              }}
            >
              <iframe
                width="320"
                height="180"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
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
                  top: "4px",
                  right: "4px",
                  background: "rgba(0,0,0,0.7)",
                  color: "white",
                  border: "none",
                  padding: "4px 8px",
                  cursor: "pointer",
                  borderRadius: "4px",
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
