import moviesData from '../../data/movies.json';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieSection.module.css';



export const MovieSection = () => {
    console.log("moviesData",moviesData);
    
  return (
    <div>
      <h2 className='text-center pt-5'>Movie Section</h2>

      <div className={styles.movieGrid}>
        {moviesData.map((movie) => (
            <MovieCard key={"movie-home-" + movie.id} {...movie}/>
        ))}
      </div>
    </div>
  );
}