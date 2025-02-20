import styles from "../texts.module.css";

export default function Title({ value, span, fontSize, color }) {
  return (
    <h1
      className={styles.title}
      style={{ fontSize: fontSize ? fontSize : "", color: color ? color : "" }}
    >
      {value} {span ? <span className={styles.spanElement}>{span}</span> : null}
    </h1>
  );
}
