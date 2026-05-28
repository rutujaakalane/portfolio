"use client";

export function GridOverlay() {
  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "none",
        display: "grid",
        gridTemplateColumns: "0.45fr 1fr 1fr 1fr 0.45fr",
        padding: 0,
      }}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          style={{
            borderLeft: "1px solid var(--grid-color)",
            borderRight: i === 4 ? "1px solid var(--grid-color)" : "none",
            height: "100%",
          }}
        />
      ))}
    </div>
  );
}