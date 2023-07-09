import styles from './styles.module.scss'

export default function Error(){
  return(
    <div className={`container ${styles.customContainer}`}>
      <h2 className='display-4'>I'm sorry, there's been an error, please change the title and try again!</h2>
    </div>
  )
}