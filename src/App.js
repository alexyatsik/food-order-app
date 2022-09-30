import React from "react";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";

import styles from './App.module.css';

const menu = [
  {id: 963, title: 'Sushi', description: 'Finest sushi', price: '22.98'},
  {id: 123, title: 'Borsch', description: 'Hot ukrainian borsch', price: '5.50'},
  {id: 741, title: 'Vareniki', description: 'Ukrainian vareniki with potato', price: '2.35'},
  {id: 789, title: 'Gorilka', description: 'Ukrainian strong drink', price: '15.80'}
];

function App() {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Menu />
    </React.Fragment>
  );
}

export default App;
