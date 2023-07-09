import { Carousel } from 'react-bootstrap';
import styles from './styles.module.scss'

export default function CarouselMovies(){
  const listMovies = [
    {
      link: "https://img.elo7.com.br/product/original/264E936/big-poster-filme-blade-runner-1982-lo003-tamanho-90x60-cm-poster-cinema.jpg",
    },
    {
      link: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_.jpg",
    }
    ,
    {
      link: "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      link: "https://img.elo7.com.br/product/original/2679A20/big-poster-filme-matrix-lo03-tamanho-90x60-cm-geek.jpg",
    },
    {
      link: "https://i.pinimg.com/originals/25/2a/7c/252a7c53145e83784f76c8e3ad42331f.jpg",
    }
  ]
  return (
    <div className={styles.customContainer}>
    <Carousel fade={true} pause={false} interval={10000} className={styles.customCarousel}>
      {
        listMovies.map((movie, index)=> (
          <Carousel.Item key={index}>
          <img
            className={styles.customImages}
            src={movie.link}
            alt={`movie-${index}`}
          />
          </Carousel.Item>
        ))
      }
    </Carousel>
    </div>
  )
}