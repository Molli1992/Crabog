import styles from "./cardServices.module.css";

export default function CardServices({ data }) {
  return (
    <div className={styles.cardServices}>
      <div
        className={styles.sliderImg}
        style={{ backgroundImage: `url('${data.img.src}')` }}
      />
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
}
