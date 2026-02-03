"use client";
import { useEffect } from "react";
import styles from "./Footer.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Service_Footer from './Content-Text/Service-Footer'
import Produto_Footer from './Content-Produto/Produto-Footer'

export default function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 300,
      once: true,
    });
  }, []);

  return (
    <footer className={styles.Footer} id='footer'>
      <Service_Footer />
      <Produto_Footer />
    </footer>
  );
}