import "../assets/scss/ErrorPage.scss";

export default function ErrorPage() {
  return (
    <main>
      <section>
        <div className="erreur-content">
          <h1 className="titre-erreur">404</h1>
          <h3 className="info-erreur">
            Oups! La page que vous demandez n'existe pas.
          </h3>
          <p className="lien-erreur">Retourner sur la page d'accueil</p>
        </div>
      </section>
    </main>
  );
}
