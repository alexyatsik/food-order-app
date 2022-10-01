import React, {useState} from "react";

import Button from "../../../../UI/Button/Button";
import styles from './Amounter.module.css'

const Amounter = (props) => {
  const [inputValue, setInputValue] = useState(1);

  const onChangeInputHandler = (event) => {
    if (parseInt(event.target.value) >= 10) {
      setInputValue(10);
      return;
    }
    if (parseInt(event.target.value) <= 1) {
      setInputValue(1);
      return;
    }
    setInputValue(parseInt(event.target.value))
  }

  const onClickAddHandler = () => {
    console.log({value: inputValue, id: props.itemId});
    setInputValue(1);
    // props.addDishToCardHandler();
  }

  return (
    <div className={styles.amounter}>
      <div>
        <label htmlFor="amount" className={styles.label}>Amount </label>
        <input
          id="amount"
          type="number"
          min="1"
          max="10"
          value={inputValue}
          className={styles['input-field']}
          onChange={onChangeInputHandler}
        />
      </div>
      <Button onClick={onClickAddHandler} title="+ Add" />
    </div>
  );
}

export default Amounter