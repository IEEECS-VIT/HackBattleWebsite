import React, { useState } from "react";
import "../../styles/FAQ/FAQCard.css";
import { IoIosArrowDown } from "react-icons/io";

export default function Card({ question, answer }) {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      className="main-div"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Answer Box */}
      <div className={`sliding-div ${isHovering ? "visible" : ""}`}>
        <p>{answer}</p>
      </div>
      {/* Question Box */}
      <div className="FAQcard">
        <div className="FAQcard_top">
          <div className="FAQ_container">
            <div className="FAQ_question">{question}</div>
            <div className="FAQ_arrow">
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

