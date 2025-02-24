import styles from "../texts.module.css";

export default function Description({ value, color, fontSize }) {
  return (
    <p
      className={styles.description}
      style={{ fontSize: fontSize ? fontSize : "", color: color ? color : "" }}
    >
      {value}
    </p>
  );
}
