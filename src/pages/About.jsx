import Image2 from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Collapse from "../components/Collapse";
import Banner from "../components/Banner";

import "../assets/scss/About.scss";
import "../assets/scss/Home.scss";



export default function About() {
  const about = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  ]


  return (
  <main>
   
      <Banner  cover={Image2}/>
      


      <section className="collapse-container2">
    
        <Collapse title="Fiabilité" content={about[0]} />
        <Collapse title="Respect" content={about[1]} />
        <Collapse title="Service" content={about[2]} />
        <Collapse title="Sécurité" content={about[3]} />
    
      </section>
   </main>
  );
}
