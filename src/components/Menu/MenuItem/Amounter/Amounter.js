import React from "react";

import Button from "../../../../UI/Button/Button";
import styles from './Amounter.module.css'

const Amounter = () => {
  return (
    <React.Fragment>
      <input type="number" min="1" max="10" />
      <Button>+ Add</Button>
    </React.Fragment>
  );
}

export default Amounter