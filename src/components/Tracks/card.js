import React from "react";
import "../../styles/Tracks/TracksCard.css";

export default function TracksCard({ name, desc }) {
  return (
    <div className="card">
      <div className="card_top">
        <div className="card_heading">{name}</div>
        <div className="card_summary">{desc}</div>
      </div>
    </div>
  );
}
