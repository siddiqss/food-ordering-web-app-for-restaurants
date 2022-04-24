import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Add from "../components/Add";
import AddButton from "../components/AddButton";
import Featured from "../components/Featured";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [pizzaList, setPizzaList] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [close, setClose] = useState(true);

  async function getProducts() {
    const res = await fetch("http://localhost:3000/api/products");
    const data = await res.json();
    setPizzaList(data);
  }

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
    if (token === process.env.ADMIN_TOKEN) {
      setAdmin(true);
    }
    getProducts();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Restaurant</title>
        <meta name='description' content='Best pizza shop in town' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Featured />
      {/* {admin && <AddButton setClose={setClose} />} */}
      <PizzaList pizzaList={pizzaList} />
      {/* {!close && <Add setClose={setClose} /> } */}
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
