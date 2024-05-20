import Image2 from "../images/kalen-emsley-Bkci_8qcdvQ-unsplash 2.jpg";
import Collapse from "../components/Collapse";
import "../assets/scss/About.scss";

export default function About() {
  return (
  <main className="container">
      <div id="banner">
        <img className="img-banner" src={Image2} alt="images accueil" />
      </div>

      <section className="collapse-container2">
    
        <Collapse title="Fiabilité" />
        <Collapse title="Respect" />
        <Collapse title="Service" />
        <Collapse title="Sécurité" />
    
      </section>
   </main>
  );
}
