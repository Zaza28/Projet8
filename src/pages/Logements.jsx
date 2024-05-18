import { useNavigate, useParams } from 'react-router-dom';
import "../assets/scss/Logements.scss";
import Collapse from "../components/Collapse";
import CarrouselImg from "../components/CarrouselImg";
import logements from "../data/logements.json";

export default function Logements() {
  const navigate = useNavigate();
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);

  if (!logement) {
    navigate("/About") ;//redirigier vers la page 404
  }

  return (
    logement && 
    <main>

<CarrouselImg pictures={logement.pictures}/> 

      <section className="container">

        <h1 className="logements-title">{logement.title}</h1>
        <p className="logements-place">{logement.location}</p>
        <div className="information">
          <p className="hote-info">{logement.host.name}</p>
          <span className="hote-notes">{logement.rating}</span>
        </div> 

       
        <div className="tags-container">
        {logement.tags.map((tag, i) => (
            <span className='tags'  key={i} >
              {tag}
              </span> 
            ))} 
            </div>
    <div>
      <p className={logement.rating >= 1 ? "orange" : "gris"}>etoile //mettre les icone des étoiles</p>
      <p className={logement.rating >= 2 ? "orange" : "gris"}>etoile</p>
      <p className={logement.rating >= 3 ? "orange" : "gris"}>etoile</p>
      <p className={logement.rating >= 4 ? "orange" : "gris"}>etoile</p>
      <p className={logement.rating >= 5 ? "orange" : "gris"}>etoile</p>

    </div>

      </section>

      <Collapse title="desciption" content={logement.description} />
      <Collapse title="équipement" content={logement.equipments} />

      
      
    </main>
  );
}
