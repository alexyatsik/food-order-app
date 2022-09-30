import React from "react";

import Cart from "../Cart/Cart";
import Logo from "../Logo/Logo";

import styles from './Header.module.css';

const Header = () => {
  return (
    <React.Fragment>
      <Logo />
      <Cart />
    </React.Fragment>
  );
}

export default Header;