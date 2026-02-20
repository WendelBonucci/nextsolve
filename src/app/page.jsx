import styles from "./home.module.css";
import Carousel from "@/components/InitialContent/InitialContent";

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <Carousel />
    </div>
    </>
  );
}