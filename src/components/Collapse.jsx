import { useState } from "react";
import "../assets/scss/Collapse.scss";

export default function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  return (

    <section className="collapse-container">
      <div className="collapse">
        <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
          <h3 className="title-collapse">{title}</h3>
          <i
            className={`fa-solid ${
              isOpen ? "fa-chevron-up" : "fa-chevron-down"
            }`}
          ></i>
        </div>

        {isOpen && (
          <div className="collapse-content">
            {Array.isArray(content) ? (
              <ul>
                {content.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>
                {content}
              </p>
            )}
          </div>
        )}
      </div>
    </section>

  );
}
