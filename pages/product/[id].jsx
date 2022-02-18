import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

function Product() {
  const [size, setSize] = useState(0);
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "Trenton Style",
    price: [9.99, 12.99, 14.99],
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt cumque, vitae tempora similique possimus quam non sit corrupti placeat nulla, debitis aut labore sed laborum illum voluptatum? Consequatur, laudantium dolores!",
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.sizeText}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.sizeText}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src='/img/size.png' layout='fill' alt='' />
            <span className={styles.sizeText}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='bbq'
              name='bbq'
              className={styles.checkbox}
            />
            <label htmlFor='bbq'>BBQ Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='cheese'
              name='cheese'
              className={styles.checkbox}
            />
            <label htmlFor='cheese'>Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='spicy'
              name='spicy'
              className={styles.checkbox}
            />
            <label htmlFor='spicy'>Extra Spicy</label>
          </div>
          <div className={styles.option}>
            <input
              type='checkbox'
              id='garlic'
              name='garlic'
              className={styles.checkbox}
            />
            <label htmlFor='garlic'>Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity} />
            <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
