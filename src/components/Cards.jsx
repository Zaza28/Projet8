import { Link } from 'react-router-dom';

export default function Cards({ title, cover, id }) {
  return (
    <Link to={`/logements/${id}`}>
    <article className="card">
      <img className="img-card" src={cover} alt={title} />
      <h3 className="title-card">{title}</h3>
    </article>
    </Link>
  );
}
