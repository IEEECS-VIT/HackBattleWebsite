import React from "react";
import "../../styles/Tracks/TracksCard.css";

export default function TracksCard({ name }) {
  return (
    <div className="custom-card">
      <div className="card_top">
        <div className="card_heading">{name}</div>
      </div>
    </div>
  );
}
