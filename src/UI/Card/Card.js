import React from "react";

import styles from './Card.module.css'

const Card = (props) => {
  return (
    <React.Fragment>
      {props.children}
    </React.Fragment>
  );
}

export default Card;