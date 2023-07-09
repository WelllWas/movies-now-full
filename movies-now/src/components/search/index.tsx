import styles from './styles.module.scss'
import { useForm } from 'react-hook-form';
import { Button, Input } from '@ui5/webcomponents-react';
import { useDispatch } from 'react-redux';
import { resetMovie, setMovie } from 'src/redux/movieSlice';
import { getMovieDetails } from 'src/services/getMovieDetails';
import { movieSearchType, searchPropsType } from 'src/utils/types';

export default function Search(props: searchPropsType){
  const { register, handleSubmit, reset } = useForm<movieSearchType>();
  const dispatch = useDispatch()
  
  async function onHandleSubmit(data:movieSearchType){
    props.setLoading()
    const payload = await getMovieDetails(data.movie)
    if(payload.data.Response !== 'False'){
      await dispatch(setMovie(payload.data))
      props.setDetails()
    } else {
      props.setLoading()
      props.handleError(true)
    }
  }

  async function onHandleReset(){
    await dispatch(resetMovie())
    reset()
    props.resetDetails()
  }

  return(
    <div className={`container-sm ${styles.customContainer}`}>
      <form onSubmit={handleSubmit(onHandleSubmit)} className={styles.form}>
        <div className="row">
          <div className={`col-sm ${styles.customColumn}`}>
            <Button onClick={onHandleReset} className={`btn btn-dark ${styles.customButton}`}>Reset</Button>
          </div>
          <div className={`col-sm ${styles.customColumn}`}>
            <Input 
              required 
              {...register("movie")} 
              className="form-control" 
              type='Text' 
              maxlength={153} 
              noTypeahead
              placeholder='Ex: Final Fantasy VII: Advent Children'
            />
          </div>
          
          <div className={`col-sm ${styles.customColumn}`}>
            <Button className={`btn btn-dark ${styles.customButton}`} type="Submit">Search</Button>
          </div>
        </div>
      </form>
    </div>
  )
}