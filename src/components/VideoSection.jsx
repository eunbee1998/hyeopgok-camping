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
                minWidth: "500px",  // 너비 키움
                width: "500px",     // 너비 키움
                position: "relative",
                flexShrink: 0,      // 크기 줄어드는 거 방지
              }}
            >
              <iframe
                width="500"         // iframe 너비 키움
                height="225"        // 16:9 비율 높이
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
