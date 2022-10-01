import React from "react";

import styles from './MenuItem.module.css'
import Amounter from "./Amounter/Amounter";

const MenuItem = (props) => {
  return (
    <React.Fragment>
      <div>
        <span>{props.title}</span>
        <span>{props.description}</span>
        <span>{props.price}</span>
      </div>
      <Amounter itemId={props.id} />
    </React.Fragment>
  );
}

export default MenuItem;