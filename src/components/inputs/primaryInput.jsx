import styles from "./primaryInput.module.css";

export default function PrimaryInput({ name, onChange, value, type }) {
  return (
    <input
      className={styles.input}
      value={value}
      type={type ? type : "text"}
      onChange={(e) => onChange(e)}
      name={name}
    />
  );
}
