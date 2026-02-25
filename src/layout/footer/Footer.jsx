"use client"

import { useEffect } from "react"
import styles from "./Footer.module.css"
import Link from "next/link"
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa"
import Aos from "aos"
import "aos/dist/aos.css"

export default function Footer() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease-in-out",
      once: true,
    })
  }, [])

  const linksInstitutional = [
    { name: "Corporativo", href: "/corporativo" },
    { name: "Política de Privacidade", href: "/politics" },
    { name: "Agente de IA", href: "/agente-ia" },
    { name: "Grupo WhatsApp", href: "https://wa.me/SEUNUMEROAQUI" },
  ]

  const linksSocial = [
    { name: "Instagram", href: "https://instagram.com", icon: <FaInstagram /> },
    { name: "Youtube", href: "https://youtube.com", icon: <FaYoutube /> },
    { name: "LinkedIn", href: "https://linkedin.com", icon: <FaLinkedinIn /> },
    { name: "Facebook", href: "https://facebook.com", icon: <FaFacebookF /> },
  ]

  const linksContact = [
    { name: "Contato / Suporte", href: "/contato" },
    { name: "Trabalhe Conosco", href: "/trabalhe-conosco" },
    { name: "Empresas e Resultados", href: "/empresas" },
    { name: "Fale Conosco", href: "/fale-conosco" },
  ]

  const renderLink = (item, className, showIcon = false) => {
    const isExternal = item.href.startsWith("http")

    return (
      <Link
        href={item.href}
        className={className}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {showIcon && item.icon}
        <span>{item.name}</span>
      </Link>
    )
  }

  return (
    <footer className={styles.Footer}>
      <section className={styles.divisionContent}>

        <div className={styles.column}>
          <h2 className={styles.logo}>NextSolve</h2>
          <p className={styles.description}>
            Soluções inteligentes para o crescimento do seu negócio.
          </p>
        </div>

        <div className={styles.column}>
          <h3 className={styles.titleColumn}>Institucional</h3>
          <ul className={styles.list} data-aos="fade-left">
            {linksInstitutional.map((item) => (
              <li key={item.name}>
                {renderLink(item, styles.link)}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.titleColumn}>Redes Sociais</h3>
          <ul className={styles.listSocial} data-aos="fade-left">
            {linksSocial.map((item) => (
              <li key={item.name}>
                {renderLink(item, styles.socialLink, true)}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.column}>
          <h3 className={styles.titleColumn}>Entre em Contato</h3>
          <ul className={styles.listContact} data-aos="fade-left">
            {linksContact.map((item) => (
              <li key={item.name}>
                {renderLink(item, styles.contactLink)}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className={styles.bottomFooter}>
        <h2 className={styles.titlebttmF}>NextSolve</h2>
        <p className={styles.textbttmF}>
          ©{new Date().getFullYear()} NextSolve Studio Vision.
          Todos os direitos reservados - CNPJ: 62.004.128/0001-80
        </p>
      </div>
    </footer>
  )
}