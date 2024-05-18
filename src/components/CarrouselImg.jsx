import { useState } from "react";
import "../pages/Logements";

export default function Logement({ pictures }) {
  const [index, setIndex] = useState(0);
  const setSlide = (direction) => {
    if (direction === "right") {
      if (index + 1 < pictures.lenght) setIndex(index + 1);
      else {
        setIndex(0);
      }
    } else {
      if (index - 1 < 0) setIndex(pictures.length - 1);
      else {
        setIndex(0);
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
        Précedent
      </button>
      <img className="img-banner-logement" src={pictures[index]} alt="slide-img" />
      <button
        onClick={() => {
          setSlide("right");
        }}
      >
        Next
      </button>
    </div>
  );
}
