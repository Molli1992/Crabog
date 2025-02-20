import styles from "./companyInfo.module.css";
import Image from "next/image";
import aboutUs2Img from "../../../public/aboutUs-2-img.jpg";
import Title from "../texts/title/title";
import Description from "../texts/description/description";

export default function CompanyInfo() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
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
      </div>

      <div className={styles.container}>
        <Image src={aboutUs2Img} alt="Lawyer" className={styles.image} />
      </div>

      <div className={styles.container}></div>
    </div>
  );
}
