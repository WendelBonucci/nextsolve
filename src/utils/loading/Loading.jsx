'use client'
import styles from './Loading.module.css'
import { AiOutlineLoading3Quarters } from "react-icons/ai";


export default function Loading() {
  return (
    <AiOutlineLoading3Quarters className={styles.loadingIcon}/>
  )
}
