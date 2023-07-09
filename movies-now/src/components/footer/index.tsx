import { footerPropsType } from 'src/utils/types';
import styles from './styles.module.scss';

export default function Footer(props: footerPropsType){
  function handleGoHome(){
    props.setHome()
  }

  return (
    <footer className={`${styles.footer} bg-dark text-light`}>
      <div className={`container ${styles.container}`}>
        <div className={`row ${styles.row}`}>
          <div className="col-md-6">
            <p>© 2023 Movies Now. All rights reserved.</p>
          </div>
          <div className="col-md-6">
            <ul className={`list-inline text-md-right ${styles.list}`}>
              <li className={`list-inline-item ${styles.listItem}`}>
                <a onClick={handleGoHome}>Home</a>
              </li>
              <li className={`list-inline-item ${styles.listItem}`}>
                <a href="https://github.com/WelllWas" target="_blank">About</a>
              </li>
              <li className={`list-inline-item ${styles.listItem}`}>
                <a href="https://www.linkedin.com/in/wellingtonlimagomes/" target='_blank'>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}