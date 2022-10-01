import React, {useState} from "react";

import Button from "../../../../UI/Button/Button";
import styles from './Amounter.module.css'

const Amounter = (props) => {
  const [inputValue, setInputValue] = useState(1);

  const onClickIncreaseHandler = () => {
    if (inputValue === 10)
      return;
    setInputValue(inputValue + 1);
  }

  const onClickDecreaseHandler = () => {
    if (inputValue === 1)
      return;
    setInputValue(inputValue - 1);
  }

  const onChangeInputHandler = (event) => {
    if (event.target.value >= 10) {
      setInputValue(10);
      return;
    }
    if (event.target.value <= 1) {
      setInputValue(1);
      return;
    }
    setInputValue(event.target.value)
  }

  const onClickAddHandler = () => {
    setInputValue(1);
    props.addDishToCardHandler();
  }

  return (
    <React.Fragment>
      <div>
        <button type="text" onClick={onClickDecreaseHandler} className={styles['value-handler']}>-</button>
        <input
          type="number"
          min="1"
          max="10"
          value={inputValue}
          className={styles['input-field']}
          onChange={onChangeInputHandler}
        />
        <button type="text" onClick={onClickIncreaseHandler} className={styles['value-handler']}>+</button>
      </div>
      <Button onClick={onClickAddHandler}>+ Add</Button>
    </React.Fragment>
  );
}

export default Amounter