import styles from "./page.module.css";
import InitialContent from "@/components/InitialContent/InitialContent";
import About from "@/components/About/About";

export default function Home() {
  return (
    <div className={styles.page}>
      <InitialContent />
      <About />
    </div>
  );
}