"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import styles from "./SideBar.module.css";

export default function Sidebar() {

  const links = [
    { href: "/", label: "Início" },
    { href: "#quem-somos", label: "Serviços" },
    { href: "/community", label: "Comunidade" },
    { href: "/projetos", label: "Onde nos Encontrar" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  // Fechar menu ao clicar fora 
  useEffect (() => {
    const handleClickOutside = (e) => {
      if (isOpen && !e.target.closest(`.${styles.contentSidebar}`) && 
          !e.target.closest(`.${styles.hamburger}`)) {
        closeMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, closeMenu]);

  return (
    <div className={styles.wrapper}>
      <button 
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`} 
        onClick={toggleMenu} 
        type="button"
        aria-label="Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <aside
        className={`${styles.contentSidebar} ${isOpen ? styles.openBox : ""}`}
      >
        <nav className={styles.contentNav}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={closeMenu}
            >
              {link.label}
            </Link>
          ))}

          <Link href="/contact" onClick={closeMenu}>
            <button type="button" className={styles.contactBtn}>
              Contato
            </button>
            <button onClick={toggleChat} type="button" className={styles.contactBtn}>
              Chat
            </button>
          </Link>
        </nav>
      </aside>
      <ChatWidget isOpen={isChatOpen} onClose={toggleChat} />
    </div>
  );
}