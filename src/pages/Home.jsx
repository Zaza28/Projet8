import Header from "../components/Header.jsx";
import Cards from "../components/Cards.jsx";
import Footer from "../components/Footer.jsx";
import Image1 from "../images/IMG.jpg";
import "../assets/scss/Home.scss";

export default function Home(){
 return(
   <>
   <Header />
   <main>
     <div id="banner">
     <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
       <img className="img-banner" src={Image1} alt="images accueil" />
     </div>
     <section className="section-cards">
      { <Cards /> }
     </section>
   </main>
   <Footer />
 </>

 )

}