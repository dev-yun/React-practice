import styles from './Movie.module.css';

function MovieDetail({ title, rating, description_full, medium_cover_image }) {
  return (
    <div className='w-3/5 flex flex-col justify-center items-center my-7 bg-slate-100 rounded-2xl'>
      <h1 className='font-bold text-2xl'>
        {title} <span className='font-normal text-lg'>({rating})</span>
      </h1>
      <div className='flex justify-center items-center'>
        <div className='w-fit my-7 mx-4'>
          <img src={medium_cover_image} alt={title} />
        </div>
        <div className='w-2/5 my-7 mx-4'>
          <p className={`${styles.mulit_line_ellipsis}`}>{description_full}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
