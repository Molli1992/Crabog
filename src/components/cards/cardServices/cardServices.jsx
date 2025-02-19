import styles from "./cardServices.module.css";
import Image from "next/image";

export default function CardServices({ data }) {
  return (
    <div className={styles.cardServices}>
      <Image src={data.img} alt="Slider image" className={styles.sliderImg} />
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
}
