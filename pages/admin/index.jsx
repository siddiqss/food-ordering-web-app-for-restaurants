import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Add from "../../components/Add";
import AddButton from "../../components/AddButton";
import styles from "../../styles/Admin.module.css";

const Index = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const status = ["preparing", "on the way", "delivered"];
  const [close, setClose] = useState(true);

  console.log(products);
  console.log(orders);

  const handleDelete = async (id) => {
    try {
      const delRes = await axios.delete(
        `http://localhost:3000/api/products/${id}`
      );
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const products = await axios.get("http://localhost:3000/api/products");
      setProducts(products.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getOrders = async () => {
    try {
      const orders = await axios.get("http://localhost:3000/api/orders");
      setOrders(orders.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleStatus = async (id) => {
    const item = orders.filter((order) => order._id === id)[0];
    const currStatus = item.status;
    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currStatus + 1,
      });
      setOrders([res.data, ...orders.filter((order) => order._id !== id)]);
    } catch (error) {
      console.log(error);
    }
  };

  function getCookie(user) {
    var cookieArr = document.cookie.split(";");
    for (var i = 0; i < cookieArr.length; i++) {
      var cookiePair = cookieArr[i].split("=");
      if (user == cookiePair[0].trim()) {
        return decodeURIComponent(cookiePair[1]);
      }
    }
    return null;
  }
  useEffect(() => {
    var token = getCookie("token");
    if (token !== process.env.ADMIN_TOKEN) {
      router.push({
        pathname: "/admin/login"
      });
    }

    getProducts();
    getOrders();
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Products</h1>
        <AddButton setClose={setClose} />
        {!close && <Add setClose={setClose} /> }
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTable}>
              <th>Image</th>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </tbody>
          {products.map((product) => (
            <tbody key={product._id}>
              <tr className={styles.trTable}>
                <td>
                  <Image
                    src={product.img}
                    width={50}
                    height={50}
                    objectFit='cover'
                    alt=''
                  />
                </td>
                <td>{product._id.slice(0, 5) + "..."}</td>
                <td>{product.title}</td>
                <td>${product.prices[0]}</td>
                <td>
                  <button className={styles.button}>Edit</button>
                  <button
                    className={styles.button}
                    onClick={() => handleDelete(product._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
      <div className={styles.item}>
        <h1 className={styles.title}>Orders</h1>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTable}>
              <th>ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Phone Number</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tbody>
          {orders.map((order) => (
            <tbody key={order._id}>
              <tr className={styles.trTable}>
                <td>{order._id.slice(0, 5) + "..."}</td>
                <td>{order.customer}</td>
                <td>{order.address}</td>
                <td>{order.customer_phone_number}</td>
                <td>${order.total}</td>
                <td>
                  {order.method === 0 ? <span>cash</span> : <span>paid</span>}
                </td>
                <td>{status[order.status]}</td>
                <td>
                  <button
                    className={styles.button}
                    onClick={() => handleStatus(order._id)}>
                    Next Stage
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Index;
