import styles from "./cardReviews.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import Image from "next/image";

export default function CardReviews({ data }) {
  return (
    <div className={styles.cardReviews}>
      <FaQuoteLeft className={styles.icon} />
      <h1 className={styles.description}>{data.description}</h1>
      
      <div>
        <Image src={data.img} alt="user" className={styles.image} />
        <p className={styles.user}>{data.user}</p>
      </div>
    </div>
  );
}
