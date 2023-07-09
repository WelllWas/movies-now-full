import { movieType } from 'src/utils/types'
import styles from './styles.module.scss'
import { List } from '@ui5/webcomponents-react';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'src/redux/favoritesSlice';

export default function Favorites(){
  const { favorites } = useSelector(selectFavorites)
  
  return(
    <div className={`container ${styles.customContainer}`}>
      <List className={`list-group ${styles.customerRow}`}>
        {
          favorites.map((item:movieType, index:string)=>(
            <a key={index} className="list-group-item list-group-item-primary list-group-item-action flex-column align-items-start">
              <div className="d-flex w-100 justify-content-between">
                <h5 className={`mb-1 display-6 ${styles.customTest}`}>{item.Title}</h5>
                <small className={`text-muted ${styles.customTest}`}>{item.imdbRating}</small>
              </div>
              <p className={`mb-1 ${styles.customTest}`}>{item.Plot}</p>
              <small className={`text-muted ${styles.customTest}`}>{item.Genre}</small>
            </a>
          ))
        }
      </List>
    </div>
  )
}