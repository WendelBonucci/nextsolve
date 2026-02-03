import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./BannerInitial.module.css";

export default function BannerInitial() {
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
    <section className={styles.bannerBox}>
      <div className={styles.dimensionImage}>
        <Image
          className={styles.imageBanner}
          src={
            isMobile
              ? "/images/bannercommunity.png"
              : "/images/bannercommunity.png"
          }
          alt="Image-NextSolve"
          fill
        />
      </div>
    </section>
  );
}
