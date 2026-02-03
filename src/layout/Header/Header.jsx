"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

import Logo from "./components/Logo/Logo";
import Navgation from "./components/Navgation/Navigation";
import Button from "./components/Button/Button";
import Sidebar from "./components/SideBar/SideBar";


export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Definir estado inicial sem causar hidratação mismatch
    setIsMobile(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      // Debounce para melhor performance
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrolled(window.scrollY > 20);
      }, 10);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className={`${styles.Header} ${scrolled ? styles.HeaderScrolled : ""}`} role="banner">
        <div className="section_global">
          <div className={styles.content_Header}>
            <Logo />

            <nav className={styles.division_Content} aria-label="Navegação principal">
              {!isMobile && (
                <>
                  <Navgation />
                  <Button />
                </>
              )}
            </nav>

            {isMobile && <Sidebar />}
          </div>
        </div>
      </header>
    </>
  );
}