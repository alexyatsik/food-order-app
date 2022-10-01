import Card from "../../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import styles from './Menu.module.css'

const Menu = (props) => {
  return (
    <Card className={styles['card-customize']}>
      <ul>
        {props.menuCatalogue.map((item) => (
          <li key={item.id}>
            <MenuItem
              id={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default Menu;