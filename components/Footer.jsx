import styles from "../styles/Footer.module.css";
import Image from "next/image";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src='/img/bg.jpg' objectFit='cover' layout='fill' alt='' />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.tagline}>
            ONE SLICE OF PIZZA WILL MAKE YOU WANT MORE
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            478 Eagle Lake Rd
            <br />
            Susanville
            <br />
            California, 92886
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br />
            9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br />
            12:00 - 24:00
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
