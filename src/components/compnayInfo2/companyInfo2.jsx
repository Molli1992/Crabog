import styles from "./companyInfo2.module.css";
import Image from "next/image";
import aboutUsImg3 from "../../../public/aboutUs-img/aboutUs-3-img.jpg";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function CompanyInfo2() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}>
        <Image src={aboutUsImg3} alt="Firm" className={styles.image} />
      </div>

      <div className={styles.containerRight}>
        <div className={styles.containerTitle}>
          <Title
            value={
              language === "spanish"
                ? "Profesionales autorizados"
                : "Licensed Professionals Who is Authorized"
            }
            span={language === "spanish" ? "para ejercer" : "to Practice"}
          />

          <Description
            value={
              language === "spanish"
                ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                : " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
            }
          />

          <Description
            value={
              language === "spanish"
                ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
                : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate omnis quaerat, ipsum dolores rem quos fugit totam reprehenderit, commodi porro corrupti cupiditate error, optio nostrum repellendus tempora! Corporis, ratione aliquid!"
            }
          />
        </div>
      </div>
    </div>
  );
}
