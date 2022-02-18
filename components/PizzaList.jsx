import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo ad,
        blanditiis magni exercitationem at veniam ratione soluta maiores
        accusamus. Aut libero omnis iusto quo asperiores quia minima quaerat
        ratione autem.
      </p>
      <div className={styles.wrapper}>
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
          <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
