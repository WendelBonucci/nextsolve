import styles from './Loading.module.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className={styles.container}>
      <AiOutlineLoading3Quarters className={styles.loadingIcon} />
    </div>
  )
}