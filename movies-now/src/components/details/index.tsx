import { selectMovie } from 'src/redux/movieSlice';
import styles from './styles.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { selectFavorites, setFavorites } from 'src/redux/favoritesSlice';

export default function Details(){
  const dispatch = useDispatch()
  const {movie} = useSelector(selectMovie)
  const {favorites} = useSelector(selectFavorites)
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(()=> {
    if(favorites.some((obj: { Title: string; }) => obj.Title === movie.Title)){
      setIsFavorite(true)
    }
  },[favorites, movie.Title])

  const handleFavoriteClick = async () => {
    setIsFavorite(!isFavorite);
    await dispatch(setFavorites(movie))
  };
  
  return (
    <div className={styles.customContainer}>
      <div className={`row ${styles.customerRow}`}>
        <div className="col-md-8">
          <h2 className='display-4'>{movie.Title}</h2>
          <p className='lead'>{movie.Plot}</p>
          <p className='text-muted'>Actors: {movie.Actors}</p>
          <p className='text-muted'>Rating: {movie.imdbRating}</p>
          <button className={`btn btn-dark`} onClick={handleFavoriteClick}> 
          <FaHeart  className={isFavorite ? styles['heartIconActive'] : styles['heartIcon']}/> 
            Favorite
          </button>
        </div>
        <div className="col-md-4">
          <img
            src={movie.Poster}
            alt="Movie Poster"
            className={`img-fluid ${styles.posterImage}`}
          />
        </div>
      </div>
    </div>
  )
}