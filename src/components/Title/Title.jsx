"use client";
import styles from "./Title.module.css";
import useAOS from '../../utils/useAOS'

export default function Title({ text, noPaddingBottom }) {
  useAOS()

  return (
    <section
      className={` ${styles.boxTitle} ${noPaddingBottom ? styles.noPaddingBottom : ""}`}
      data-aos="fade-right"
    >
      <div className={styles.dimensionTitle}>
        <h2 className={styles.TitleInform}>{text}</h2>
      </div>
    </section>
  );
}
