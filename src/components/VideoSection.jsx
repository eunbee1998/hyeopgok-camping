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
        {videos.map(video =>
          playingId === video.id ? (
            <div key={video.id} style={{ minWidth: 320, position: "relative" }}>
              <iframe
                width="320"
                height="180"
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ borderRadius: 8 }}
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
