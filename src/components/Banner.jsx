
export default function Banner({ title = null, cover}) {
  return (
    <div id="banner">
        {
    title && <h1 className="banner-title">{title}</h1>

        }
    <img className="img-banner" src={cover} alt="images accueil" />
  </div>
  );
}
