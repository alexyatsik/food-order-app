import React from "react";

import styles from './MenuItem.module.css'
import Amounter from "./Amounter/Amounter";

const MenuItem = (props) => {
  return (
    <div className={styles['menu-item']}>
      <div className={styles['dish-info']}>
        <span className={styles.title}>{props.title}</span>
        <span className={styles.description}>{props.description}</span>
        <span className={styles.price}>{props.price}</span>
      </div>
      <Amounter itemId={props.id} />
    </div>
  );
}

export default MenuItem;