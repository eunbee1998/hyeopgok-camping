import React from "react";

export default function VideoSection({ tournament, videos }) {
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
        {videos.map((video) => (
          <div
            key={video.id}
            style={{
              minWidth: "500px",
              width: "500px",
              position: "relative",
              flexShrink: 0,
            }}
          >
            <iframe
              width="500"
              height="281"  // 16:9 비율 유지
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1`}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ borderRadius: "8px", display: "block" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
