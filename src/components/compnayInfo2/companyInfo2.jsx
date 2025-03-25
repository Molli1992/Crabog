import styles from "./companyInfo2.module.css";
import Title from "@/components/texts/title/title";
import Description from "@/components/texts/description/description";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function CompanyInfo2() {
  const { language } = useLanguageStore();

  return (
    <div className={styles.container}>
      <div className={styles.containerLeft}/>

      <div className={styles.containerRight}>
        <div className={styles.containerTitle}>
          <Title
            value={language === "spanish" ? "Litigios" : "Complex"}
            span={language === "spanish" ? "Complejos" : "Litigation"}
          />

          <Description
            value={
              language === "spanish"
                ? "Es orgullo de nuestro estudio de abogados, el reconocimiento adquirido en el área de litigios tanto dentro del Derecho Comercial como del Derecho Civil de alta complejidad, así como en conflictos societarios, reestructuraciones corporativas, concursos y quiebras y recupero de créditos otorgados por entidades bancarias. El perfil combativo en defensa de los intereses del cliente, han hecho que el Estudio sea uno de los más respetados del mercado."
                : "Our law firm takes pride in the recognition we have earned in the field of litigation, both in Commercial Law and highly complex Civil Law, as well as in corporate disputes, corporate restructurings, insolvency proceedings, and the recovery of credits granted by banking institutions. Our firms strong and strategic defense of our clients' interests has established us as one of the most respected firms in the market."
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
