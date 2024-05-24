import Cards from "../components/Cards.jsx";
import Image1 from "../images/IMG.jpg";
import "../assets/scss/Home.scss";
import logements from "../data/logements.json";
import "../assets/scss/Cards.scss";

export default function Home() {
  return (
  
    <main>
      <div id="banner">
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
        <img className="img-banner" src={Image1} alt="images accueil" />
      </div>
      <section className="section-cards">
        <div className="cards-container">
          {logements.map((log) => (
            <Cards key={log.id} id={log.id} title={log.title} cover={log.cover} />
          ))}
        </div>
      </section>
    </main>
    
  );
}
