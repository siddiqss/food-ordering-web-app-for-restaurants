import styles from "../../styles/Order.module.css";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const Order = ({path}) => {
  const [order, setOrder] = useState({});
  console.log(order);
  const status = 0;
  const statusFunc = (index) => {
    if (index - status < 1) return styles.done;
    if (index - status == 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };


  async function getOrder() {
    const res = await fetch(`http://localhost:3000/api/orders/${path.id}`);
    const data = await res.json();
    setOrder(data);
  }
  useEffect(() => {
    getOrder();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>098765</span>
              </td>
              <td>
                <span className={styles.name}>Sherlock Holmes</span>
              </td>
              <td>
                <span className={styles.address}>221B Baker Street</span>
              </td>
              <td>
                <span className={styles.total}>$19.98</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusFunc(0)}>
            <Image src='/img/paid.png' width={30} height={30} alt='' />
            <span>Payment</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusFunc(1)}>
            <Image src='/img/bake.png' width={30} height={30} alt='' />
            <span>Preparing</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusFunc(2)}>
            <Image src='/img/bike.png' width={30} height={30} alt='' />
            <span>On the way</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
          <div className={statusFunc(3)}>
            <Image src='/img/delivered.png' width={30} height={30} alt='' />
            <span>Delivered</span>
            <div className={styles.checkedIcon}>
              <Image
                className={styles.checkedIcon}
                src='/img/checked.png'
                width={20}
                height={20}
                alt=''
              />
            </div>
          </div>
        </div>
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
          <button disabled className={styles.button}>
            PAID
          </button>
        </div>
      </div>
    </div>
  );
};

// export const getServerSideProps = async ({ params }) => {
//   const res = await axios.get(`http://localhost:3000/orders/${params.id}`);
//   return {
//     props: {
//       order: res.data,
//     },
//   };
// };

Order.getInitialProps = async (ctx) => {
  return {
    path: ctx.query,
  };
};

export default Order;
