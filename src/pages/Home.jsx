import Cards from "../components/Cards.jsx";
import Image1 from "../images/IMG.jpg";
import "../assets/scss/Home.scss";
import logements from "../data/logements.json";
import "../assets/scss/Cards.scss";
import Banner from "../components/Banner.jsx";

export default function Home() {
  return (
  
    <main>
      <Banner title="Chez vous, partout et ailleurs" cover={Image1}/>

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
