"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section className={styles.boxImage}>
      <div className={styles.dimensionImage}>
        <Image
          className={styles.ImageIlustration}
                            /* Trocar essa Imagem  */
          src={isMobile ? "/images/Nextsolve-mobile.png" : "/images/Nextsolve.png"}
          alt="Image-NextSolve"
          fill
        />
      </div>
    </section>
  );
}