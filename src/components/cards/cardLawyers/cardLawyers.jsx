import styles from "./cardLawyers.module.css";
import Title from "@/components/texts/title/title";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import toastStore from "@/zustand/toastStore";
import useLanguageStore from "@/zustand/useLanguageStore";
import { useRouter } from "next/navigation";

export default function CardLawyers({ data }) {
  const { setToast, clearToast } = toastStore();
  const { language } = useLanguageStore();
  const router = useRouter();

  const onClickOpenUrl = (e, url) => {
    e.preventDefault();
    e.stopPropagation();

    window.open(url, "_blank");
  };

  const openProfile = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (data.cv) {
      router.push(`/lawyers/${data.id}`);
    } else {
      setToast({
        visible: true,
        title: language === "spanish" ? "Perfil" : "Profile",
        description:
          language === "spanish"
            ? "No contiene perfil"
            : "It does not contain a profile",
        error: false,
        info: true,
      });

      setTimeout(() => {
        clearToast();
      }, "5000");
    }
  };

  return (
    <div onClick={(e) => openProfile(e)} className={styles.cardLawyers}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url('${data.img.src}')` }}
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
      </div>

      <div className={styles.containerInfo}>
        <Title value={data.name} fontSize="24px" color="#192d2f" />
        <p className={styles.description}>{data.experience}</p>
      </div>
    </div>
  );
}
