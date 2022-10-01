import Card from "../../UI/Card/Card";

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <Card className={styles['card']}>
        <h3 className={styles['card__header']}>Lorem ipsum</h3>
        <p className={styles['card__paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet distinctio dolor dolore ducimus excepturi harum magnam maiores modi, nesciunt nulla officia placeat quam quis, rem repudiandae vitae voluptatem voluptates, voluptatibus.</p>
        <p className={styles['card__paragraph']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores commodi deserunt ducimus eos impedit incidunt itaque tempora temporibus velit voluptas. Blanditiis fugit illo provident quasi sapiente. Doloribus natus officiis voluptatibus!</p>
      </Card>
    </div>
  );
}

export default Hero;