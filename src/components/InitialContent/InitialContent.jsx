"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./InitialContent.module.css";

export default function InitialContent() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const dt_text = [
    {
      title: 'Impulsionar empresas para crescer e prosperar através da tecnologia.',
      description: 'Impulsionamos o crescimento e a prosperidade dos negócios por meio da tecnologia, unindo estratégia, inovação e soluções inteligentes para gerar resultados reais.',
      link: 'Saiba mais ->'
    }
  ]

  return (
    <section className={styles.InitialContent}>
      <div className={styles.boxDivision}>
        <div className={styles.boxImage}>
          <Image
            width={700}
            height={600}
            className={styles.image}
            src='/initialimg.png'
          />
        </div>
        <div className={styles.boxDescription}>
          {dt_text.map((item, index) => (
            <div
              key={index}
              className={styles}
            >
              <h1 className={styles.titleInitial}>{item.title}</h1>
              <p className={styles.textIntial}>{item.description}</p>
              <Link href='/' className={styles.link}>{item.link}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}