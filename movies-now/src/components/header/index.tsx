import { useState } from 'react';
import styles from './styles.module.scss'
import { navbarPropsType } from 'src/utils/types';

export default function Navbar(props: navbarPropsType) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function handleFavoritesModal(){
    props.setTrigger()
  }

  function handleGoHome(){
    props.setHome()
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className={`navbar-brand ${styles.navButton}`}>
        <img src="logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top mr-2" />
        Movies Now
      </a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={handleMenuToggle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse${isMenuOpen ? ' show' : ''}`}>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className={`nav-link ${styles.navButton}`} onClick={handleGoHome}>Home</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navButton}`} onClick={handleFavoritesModal}>Favourites</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navButton}`} href="https://github.com/WelllWas" target="_blank">About</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link ${styles.navButton}`} href="https://www.linkedin.com/in/wellingtonlimagomes/" target='_blank'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}