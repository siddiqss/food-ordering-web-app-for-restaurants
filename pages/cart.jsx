import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr className={styles.tr}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  alt=''
                  src='/img/pizza.png'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>FIORI DI ZUCCA</span>
            </td>
            <td>
              <span className={styles.extras}>
                BBQ Sauce, Extra Cheese, Extra Spicy, Garlic Sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>$9.99</span>
            </td>
            <td>
              <span className={styles.quantity}>2</span>
            </td>
            <td>
              <span className={styles.total}>$19.98</span>
            </td>
          </tr>
        </table>
      </div>
      <div className={styles.right}>
          <div className={styles.wrapper}>
              <h2 className={styles.title}>CART TOTAL</h2>
              <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Subtotal:</b>$19.98
              </div>
              <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Discount:</b>$0.00
              </div>
              <div className={styles.totalText}>
                  <b className={styles.totalTextTitle}>Total:</b>$19.98
              </div>
              <button className={styles.button}>CHECKOUT NOW</button>
          </div>
      </div>
    </div>
  );
};

export default Cart;
