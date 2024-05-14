import { useState } from "react";
import "../assets/scss/Collapse.scss";
import logements from "../data/logements.json";
import "../pages/Logements";
export default function Collapse() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <div className="collapse">
        <h3 className="title-collapse" onClick={() => setIsOpen(!isOpen)}>
          Description
        </h3>
        {isOpen && (
          <div className="collapse-content">
            {logements.map((log, index) => (
              <div key={index}>
                {" "}
                {/* Utilisation de l'index comme clé unique */}
                <p>{log.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="collapse">
        <h3 className="title-collapse" onClick={() => setIsOpen(!isOpen)}>
          Equipements
        </h3>
        {isOpen && (
          <div className="collapse-content">
            {logements.map((log, index) => (
              <div key={index}>
                {" "}
                {/* Utilisation de l'index comme clé unique */}
                <p>{log.equipments}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
