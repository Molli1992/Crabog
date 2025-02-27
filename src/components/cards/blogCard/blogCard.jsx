import styles from "./blogCard.module.css";
import { FaEye } from "react-icons/fa";

export default function BlogCard({ data, OnClick }) {
  return (
    <div className={styles.body} onClick={() => OnClick()}>
      <button className={styles.button}>{data.type}</button>

      <div className={styles.flexContainer} style={{ gap: "10px" }}>
        <p>{data.date}</p>
        {"|"}
        <div className={styles.flexContainer} style={{ gap: "5px" }}>
          <FaEye className={styles.icon} />
          <p>{data.views}</p>
        </div>
      </div>

      <h1 className={styles.title}>{data.title}</h1>
      <p className={styles.desc}>{data.desc}</p>
    </div>
  );
}
