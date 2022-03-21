import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pizzaList, setPizzaList] = useState([]);

  async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    setPizzaList(data);
  }
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant in Islamabad</title>
        <meta name='description' content='Best pizza shop in town' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

// export const getServerSideProps = async () => {

//   return {
//     props: {
//       pizzaList: data,
//     },
//   };
// };
