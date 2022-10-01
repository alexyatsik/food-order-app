import React, {useState} from "react";

import HeaderCart from "./HeaderCart/HeaderCart";
import ModalCart from "./ModalCart/ModalCart";

import styles from './Cart.module.css'

const Cart = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const onClickHeaderCardHandler = () => {

  }

  return (
    <React.Fragment>
      <HeaderCart onClick={onClickHeaderCardHandler}/>
      {isModalOpened && <ModalCart />}
    </React.Fragment>
  );
}

export default Cart;