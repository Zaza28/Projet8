import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "../assets/scss/Logements.scss";

import Collapse from "../components/Collapse";
import CarrouselImg from "../components/CarrouselImg";
import logements from "../data/logements.json";

export default function Logements() {
  const navigate = useNavigate();
  const { id } = useParams();
  const logement = logements.find((log) => log.id === id);

  useEffect(() => {
    if (!logement) {
      navigate("/ErrorPage");
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <main>
      <CarrouselImg pictures={logement.pictures} />

      <section className="container">
        <h1 className="logements-title">{logement.title}</h1>
        <p className="logements-place">{logement.location}</p>
        <div className="information">
          <p className="hote-info">
            {logement.host.name.split(" ")[0]}
            <br />
            {logement.host.name.split(" ")[1]}
          </p>
          <img
            src={logement.host.picture}
            alt={`${logement.host.name}`}
            className="host-picture"
          />
        </div>

        <div className="tags-container">
          {logement.tags.map((tag, i) => (
            <span className="tags" key={i}>
              {tag}
            </span>
          ))}
        </div>

        <div className="rating-stars">
          {[...Array(5)].map((_, index) => (
            <i
              key={index}
              className={`fa-solid fa-star ${
                logement.rating > index ? "orange" : "gris"
              }`}
            ></i>
          ))}
        </div>
      </section>
      <div className="collapse-container">
        <Collapse title="desciption" content={logement.description} />
        <Collapse title="équipement" content={logement.equipments} />
      </div>
    </main>
  );
}
