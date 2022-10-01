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
    console.log(inputValue);
    setInputValue(1);
    // props.addDishToCardHandler();
  }

  return (
    <React.Fragment>
      <div>
        <label htmlFor="amount">Amount </label>
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
    </React.Fragment>
  );
}

export default Amounter