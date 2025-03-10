import styles from "./teamCard.module.css";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function TeamCard({ data, height }) {
  const onClickOpenUrl = (e, url) => {
    e.preventDefault();
    e.stopPropagation();

    window.open(url, "_blank");
  };

  return (
    <Link
      className={styles.body}
      href={`/lawyers/${data.id}`}
      style={{ height: height }}
    >
      <div
        className={styles.containerIcons}
        style={{ top: "20px", right: "10px" }}
      >
        <FaLinkedinIn
          className={styles.icons}
          onClick={(e) => {
            onClickOpenUrl(e, data.linkedin);
          }}
        />
      </div>

      <div
        className={styles.containerIcons}
        style={{ top: "55px", right: "10px" }}
      >
        <FaInstagram
          className={styles.icons}
          onClick={(e) => {
            onClickOpenUrl(e, data.instagram);
          }}
        />
      </div>

      <div
        className={styles.image}
        style={{ backgroundImage: `url('${data.img.src}')` }}
      >
        <div className={styles.containerName}>
          <p className={styles.cardName}>{data.name}</p>
        </div>
      </div>
    </Link>
  );
}
