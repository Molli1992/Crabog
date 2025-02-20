import styles from "./cardLawyers.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function CardLawyers({ data }) {
  const router = useRouter();

  const onClickOpenUrl = (e, url) => {
    window.open(url, "_blank");

    e.stopPropagation();
  };

  return (
    <div
      className={styles.cardLawyers}
      onClick={() => router.push(`/lawyers/${data.id}`)}
    >
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${data.img.src}')` }}
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
      </div>

      <div className={styles.containerInfo}>
        <Title value={data.name} fontSize="24px" color="#192d2f" />
        <Description value={data.experience} color="#b79e63" />
      </div>
    </div>
  );
}
