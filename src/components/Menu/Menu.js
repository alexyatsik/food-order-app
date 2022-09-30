import Card from "../../UI/Card/Card";
import MenuItem from "./MenuItem/MenuItem";

import styles from './Menu.module.css'

const Menu = (props) => {
  return (
    <Card>
      <ul>
        {props.menuCatalogue.map((item) => (
          <li key={item.id}>
            <MenuItem
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