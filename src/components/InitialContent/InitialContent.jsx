"use client";
import { useEffect, useState } from "react";
import styles from "./InitialContent.module.css";

import ImageSlider from "./components/Image/Image";
import Description from "./components/Description/Description";

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

  return (
    <section className={styles.InitialContent}>
      <div className={styles.boxDivision}>
        <ImageSlider />
        <Description />
      </div>
    </section>
  );
}