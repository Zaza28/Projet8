import { useState } from "react";
import "../assets/scss/CarrouselImg.scss";

export default function Logement({ pictures }) {
  const [index, setIndex] = useState(0);

  const setSlide = (direction) => {
    if (direction === "right") {
      if (index + 1 < pictures.length) {
        setIndex(index + 1);
      } else {
        setIndex(0);
      }
    } else {
      if (index - 1 < 0) {
        setIndex(pictures.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };

  return (
    <div className="carrousel">
      <button
        onClick={() => {
          setSlide("left");
        }}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>
      <img
        className="img-banner-logement"
        src={pictures[index]}
        alt="slide-img"
      />
      <button
      
        onClick={() => {
          setSlide("right");
        }}
      >
       <i className="fa-solid fa-chevron-right"></i> 
      </button> 
    </div>
  );
}