import { useState } from "react";
import "../assets/scss/Collapse.scss";
import "../pages/Logements";

export default function Collapse({title, content}) {

  const [isOpen, setIsOpen] = useState(true);
  return (
 
      <div className="collapse">
        <h3 className="title-collapse" onClick={() => setIsOpen(!isOpen)}>
     {title}
        </h3>
        {isOpen && (
          <div className="collapse-content">
      
                {content}
              </div>
          )} 
          </div>
      
    
       )  
}


