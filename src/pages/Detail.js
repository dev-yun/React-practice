import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loadings, setLodings] = useState(true);

  const getMovieDetail = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    setMovie(json.data.movie);
    setLodings(false);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  console.log(movie);

  return (
    <div>
      {loadings ? (
        <h1>Loadings...</h1>
      ) : (
        <div>
          <h1>
            {movie.title} (<span>{movie.rating}</span>)
          </h1>
          <p>{movie.description_full}</p>
          <img src={movie.medium_cover_image} alt={movie.title} />
        </div>
      )}
    </div>
  );
}

export default Detail;
