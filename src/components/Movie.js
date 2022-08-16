import { Link } from 'react-router-dom';

function Movie({ medium_cover_image, title, summary, genres }) {
  return (
    <div>
      <div>
        <img src={medium_cover_image} alt='' />
        <h2>
          <Link to='/movie'>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Movie;
