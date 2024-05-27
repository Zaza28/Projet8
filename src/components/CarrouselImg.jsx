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

  return(
<div className="carrousel">
  {/* condition : si pictures inférieur à 1 on affiche pas les chevrons */}
  {pictures.length > 1 &&( 
     <><button onClick={() => { setSlide("left") } }>
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => { setSlide("right") } }>
            <i className="fa-solid fa-chevron-right"></i>
          </button></>
  )}
  <img className="img-banner-logement" src={pictures[index]} alt="slide-img" />

<div className="image-compteur">
{/*index = 0  + 1  position première img / nombres d'img du tableau*/}
  {index + 1}/{pictures.length}
</div>

</div>
  );
}