import styles from "./cardLawyers.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Link from "next/link";

export default function CardLawyers({ data }) {
  const onClickOpenUrl = (e, url) => {
    e.preventDefault();
    e.stopPropagation();

    window.open(url, "_blank");
  };

  return (
    <Link href={`/lawyers/${data.id}`} className={styles.cardLawyers}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${data.img.src}')` }}
      >
        {data.linkedin ? (
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
        ) : null}

        {data.instagram ? (
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
        ) : null}
      </div>

      <div className={styles.containerInfo}>
        <Title value={data.name} fontSize="24px" color="#192d2f" />
        <Description value={data.experience} color="#cc4643" />
      </div>
    </Link>
  );
}
