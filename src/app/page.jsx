import styles from "./page.module.css";
import Home from "@/components/Home/Home";

export default function page() {
  return (
    <div className={styles.page}>
      <Home />
    </div>
  );
}