import styles from "./teamCard.module.css";
import { useRouter } from "next/navigation";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import toastStore from "@/zustand/toastStore";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function TeamCard({ data, height }) {
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
    <div
      onClick={(e) => openProfile(e)}
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
    </div>
  );
}
