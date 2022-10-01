import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

import styles from './HeaderCart.module.css'

const HeaderCart = () => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faCartShopping} color="white"/>
      <span className={styles.title}>Your card</span>
      <span className={styles.counter}>0</span>
    </div>
  );
}

export default HeaderCart;