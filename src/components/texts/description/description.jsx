import styles from "../texts.module.css";

export default function Description({ value, color }) {
  return (
    <p className={styles.description} style={{ color: color ? color : "" }}>
      {value}
    </p>
  );
}
