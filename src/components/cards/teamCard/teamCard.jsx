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
      {data.linkedin ? (
        <div
          className={styles.containerIcons}
          style={{ top: "20px", right: "10px" }}
          onClick={(e) => {
            onClickOpenUrl(e, data.linkedin);
          }}
        >
          <FaLinkedinIn className={styles.icons} />
        </div>
      ) : null}

      {data.instagram ? (
        <div
          className={styles.containerIcons}
          style={{ top: "55px", right: "10px" }}
          onClick={(e) => {
            onClickOpenUrl(e, data.instagram);
          }}
        >
          <FaInstagram className={styles.icons} />
        </div>
      ) : null}

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
