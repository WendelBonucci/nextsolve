// Configuração da primária da página da Comunidade
"use client";
import styles from "./community.module.css";

// Importação dos components da página
/* import BannerInitial from "./Banner/BannerInitial"; */
import Description from "./Descrition/Description";

export default function Community() {
  return (
    <section className={styles.pageCommnunity}>
     {/*  <BannerInitial /> */}
      <Description />
    </section>
  );
}
