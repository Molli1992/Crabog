import styles from "./lawyersProfile.module.css";
import { arrayLawyers } from "@/data/data";

export default function LawyersProfile() {
  console.log(arrayLawyers);
  return (
    <div className={styles.body}>
      <h1>Profile</h1>
    </div>
  );
}
