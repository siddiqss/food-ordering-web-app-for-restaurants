import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";
function Product({ path }) {
  const dispatch = useDispatch();
  const [size, setSize] = useState(0);
  const [pizza, setPizza] = useState({});
  const [price, setPrice] = useState(0);
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  async function getProduct() {
    const res = await fetch(`/api/products/${path.id}`);
    const data = await res.json();
    setPizza(data);
    setPrice(data.prices[0]);
  }

  const changePrice = (num) => {
    setPrice(price + num);
  };
  function handleSize(sizeIndex) {
    const diff = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(diff);
  }

  function handleChange(e, opt) {
    const checked = e.target.checked;
    if (checked) {
      changePrice(opt.price);
      setExtras((prev) => [...prev, opt]);
    } else {
      changePrice(-opt.price);
      setExtras(extras.filter((extra) => extra._id !== opt._id));
    }
  }

  const handleClick = () => {
    dispatch(addProduct({...pizza, extras, price, quantity}));
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      {Object.keys(pizza).length !== 0 && (
        <div className={styles.container}>
          <div className={styles.left}>
            <div className={styles.imgContainer}>
              <Image src={pizza.img} layout='fill' objectFit='contain' alt='' />
            </div>
          </div>
          <div className={styles.right}>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>${price}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>Choose the size</h3>
            <div className={styles.sizes}>
              <div className={styles.size} onClick={() => handleSize(0)}>
                <Image src='/img/size.png' layout='fill' alt='' />
                <span className={styles.sizeText}>Small</span>
              </div>
              <div className={styles.size} onClick={() => handleSize(1)}>
                <Image src='/img/size.png' layout='fill' alt='' />
                <span className={styles.sizeText}>Medium</span>
              </div>
              <div className={styles.size} onClick={() => handleSize(2)}>
                <Image src='/img/size.png' layout='fill' alt='' />
                <span className={styles.sizeText}>Large</span>
              </div>
            </div>
            <h3 className={styles.choose}>Choose additional ingredients</h3>
            <div className={styles.ingredients}>
              {pizza.extraOptions.map((opt) => (
                <div className={styles.option} key={opt._id}>
                  <input
                    type='checkbox'
                    id={opt.text}
                    name={opt.text}
                    className={styles.checkbox}
                    onChange={(e) => handleChange(e, opt)}
                  />
                  <label htmlFor='bbq'>{opt.text}</label>
                </div>
              ))}
            </div>
            <div className={styles.add}>
              <input
                type='number'
                defaultValue={1}
                className={styles.quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              <button className={styles.button} onClick={handleClick}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Product.getInitialProps = async (ctx) => {
  return {
    path: ctx.query,
  };
};

export default Product;
