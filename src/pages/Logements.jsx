import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import "../assets/scss/Logements.scss";

import Collapse from "../components/Collapse";
import CarrouselImg from "../components/CarrouselImg";
import logements from "../data/logements.json";

export default function Logements() {
  //UseNavigate : change de route via le code
  const navigate = useNavigate();
  //UseParams : accède paramètres de l'URL 
  const { id } = useParams();
  //On cherche dans les données des logements 
  const logement = logements.find((log) => log.id === id);

  // useEffect : Si le logement n'est pas trouvé
  // l'utilisateur est redirigé vers une page d'erreur.
  useEffect(() => {
    if (!logement) {
      //UseNavigate
      navigate("/ErrorPage"); // Rediriger vers la page 404
    }
  }, [logement, navigate]);

  //logement n'existe pas est en cours de chargement ou pas été trouvé, 
  //on ne retourne rien.
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
          <p className="hote-info">{logement.host.name.split(' ')[0]}<br />{logement.host.name.split(' ')[1]}</p>
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
