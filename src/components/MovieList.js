import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.module.css';

function MovieList({ id, medium_cover_image, title, summary, genres }) {
  return (
    <>
      <div className='w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none'>
        <img
          src={medium_cover_image}
          alt={title}
          className='w-full h-80 object-center object-cover lg:w-full lg:h-full'
        />
      </div>
      <div className='mt-4 flex justify-between'>
        <div>
          <h3 className='text-xl font-bold text-gray-700'>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h3>
          <p
            className={`mt-1 text-sm text-gray-500 break-words ${styles.mulit_line_ellipsis}`}
          >
            {summary}
          </p>
          <ul>
            {' '}
            guenres :{' '}
            {genres.map((genre) => (
              <span key={genre}>"{genre}" </span>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieList;
