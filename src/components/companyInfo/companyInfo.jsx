"use client";
import styles from "./companyInfo.module.css";
import Image from "next/image";
import aboutUs2Img from "../../../public/aboutUs-2-img.jpg";
import Title from "../texts/title/title";
import Description from "../texts/description/description";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { FaComments } from "react-icons/fa";
import useLanguageStore from "@/zustand/useLanguageStore";

export default function CompanyInfo() {
  const { language } = useLanguageStore();
  const arrayList = [
    language === "spanish" ? "Reclamaciones de seguros" : "Insurance Claims",
    language === "spanish" ? "Consultoría Empresarial" : "Business Consulting",
    language === "spanish" ? "Análisis de contratos" : "Contract Analysis",

    language === "spanish"
      ? "Los despachos de abogados tienen acceso a tecnología de punta"
      : "Law firms often have access to cutting-edge technology",
    language === "spanish"
      ? "Bases de datos de investigación y bibliotecas jurídicas invaluables en la construcción empresarial"
      : "Research databases, and legal libraries, which can be invaluable in building",
    language === "spanish"
      ? "Los despachos de abogados tienen acceso a tecnología de punta"
      : "Law firms often have access to cutting-edge technology",
  ];

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <Title
            value="Lorem ipsum, dolor sit amet consectetur"
            span="adipisicing elit."
          />

          <Description
            value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          totam dolore corrupti optio accusamus quos ducimus sint, vel natus
          ipsa quibusdam repudiandae quae molestias dolor perferendis quo.
          Obcaecati, non voluptate."
          />

          <Description
            value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          totam dolore corrupti optio accusamus quos ducimus sint, vel natus
          ipsa quibusdam repudiandae quae molestias dolor perferendis quo.
          Obcaecati, non voluptate."
          />

          <Description
            value="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          totam dolore corrupti optio accusamus quos ducimus sint, vel natus
          ipsa quibusdam repudiandae quae molestias dolor perferendis quo.
          Obcaecati, non voluptate."
          />
        </div>
      </div>

      <div className={styles.container}>
        <Image src={aboutUs2Img} alt="Lawyer" className={styles.image} />
      </div>

      <div className={styles.container}>
        <div className={styles.containerItems}>
          <div className={styles.item}>
            <div>
              <FaAward className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[0]} />
              <Description value={arrayList[3]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <RiCustomerService2Fill className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[1]} />
              <Description value={arrayList[4]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <FaComments className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[2]} />
              <Description value={arrayList[5]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <FaAward className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[0]} />
              <Description value={arrayList[3]} />
            </div>
          </div>

          <div className={styles.item}>
            <div>
              <RiCustomerService2Fill className={styles.icons} />
            </div>

            <div>
              <Title fontSize="24px" value={arrayList[1]} />
              <Description value={arrayList[4]} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
