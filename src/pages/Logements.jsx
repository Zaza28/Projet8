import { useParams } from 'react-router-dom';
import "../assets/scss/Logements.scss";
import Collapse from "../components/Collapse";
// import CarrouselImg from "../components/CarrouselImg";
import logements from "../data/logements.json";

export default function Logements() {
  const { id } = useParams();
  const logement = logements.find(log => log.id === id);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }
  return (
    <>
      <section className="container">
        <div className="carrousel-img">
          {/* {logements.map((log) => (
            <CarrouselImg key={log.id} pictures={log.pictures} title={log.title}/>
          ))} */}
        </div>
        <h3 className="logements-title">{logement.title}</h3>
        <p className="logements-place">{logement.location}</p>
        <div className="information">
          <p className="hote-info">{logement.host.name}</p>
          <span className="hote-notes">{logement.rating}</span>
        </div>

        <tag className="tags-container">
          <h3 className="tags">{logement.tags}</h3>
        </tag>
      </section>

      {<Collapse />}
    </>
  );
}
