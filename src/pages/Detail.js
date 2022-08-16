import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

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
    <div className='max-w-2xl mx-auto py-4 px-2 sm:py-4 sm:px-4 lg:max-w-7xl lg:px-8'>
      {loadings ? (
        <h1>Loadings...</h1>
      ) : (
        <div className='flex justify-center'>
          <MovieDetail {...movie} />
        </div>
      )}
    </div>
  );
}

export default Detail;
