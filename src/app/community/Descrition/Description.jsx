"use client";
import useAOS from "@/utils/useAOS";
import styles from "./Description.module.css";
import { useState, useEffect } from "react";
import Image from "next/image";

import { MdWeb } from "react-icons/md";
import { FaDatabase } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiSuitcase } from "react-icons/gi";
import { PiShareNetworkLight } from "react-icons/pi";

export default function Description() {
  useAOS()
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => { 
    const checkIsMobile = () => { setIsMobile(window.innerWidth <= 768);};
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const communityItems = [
    { icon: <PiShareNetworkLight size={24} />, title: "Networking", description: "Conexão entre profissionais e troca de experiências", delay: 200, },
    { icon: <MdWeb size={24} />, title: "Front-end", description: "Novidades, dicas e discussões sobre desenvolvimento de interfaces", delay: 300, },
    { icon: <FaDatabase size={24} />, title: "Back-end", description: "Debates técnicos, boas práticas e soluções de arquitetura", delay: 400, },
    { icon: <MdDesignServices size={24} />, title: "Design", description: "Espaço para criativos compartilharem ideias, tendências e inspirações", delay: 500, },
    { icon: <IoLogoGameControllerB size={24} />, title: "Loja e Gamers", description: "Comunidade voltada para games, e-commerce e tecnologia aplicada", delay: 600, },
    { icon: <GiSuitcase size={24} />, title: "Vagas de Emprego", description: "Oportunidades e indicações do mercado de trabalho em TI", delay: 700, },
    { icon: <MdWeb size={24} />, title: "Mobile", description: "Desenvolvimento e tendências para aplicativos móveis", delay: 800, },
    { icon: <FaDatabase size={24} />, title: "DevOps", description: "Ferramentas, automação e práticas de infraestrutura", delay: 900,},
  ];

  return (
    <section className={`${styles.boxDescription} section_global`}>
      <div className={styles.divisionContent}>
        <div
          className={styles.description}
          data-aos="fade-right"
          >
          <h1 className={styles.titleDescription}>Comunidade de <span className="color_cyan">Tecnologia</span> e Desenvolvimento</h1>

          <p className={styles.paragraf}>
            Apresentamos a nossa comunidade de tecnologia, um espaço criado para
            conectar profissionais, empresas e entusiastas da área. Além dos
            serviços que oferecemos para empresas, também disponibilizamos um
            ambiente exclusivo para programadores e demais interessados em
            expandir suas conexões no universo da tecnologia.</p>

          <div className={styles.communityGrid}>
            {communityItems.map((item, index) => (
              <div
                key={index}
                className={styles.communityItem}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
              >
                <div className={styles.itemIcon}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <p className={styles.conclusion}>
            Se você busca ampliar sua rede de contatos, compartilhar
            conhecimento ou se atualizar sobre o mercado, nossa comunidade é o
            lugar certo para você.
          </p>
            <a href="https://chat.whatsapp.com/FCMvSHzTv1TI5odzDeX3a1?mode=ems_wa_t" target="blank" className={styles.btnLinkComunnity}>Entre para Comunidade</a>
        </div>

        <div className={styles.imageCommunity} data-aos="fade-left" >
          <div className={styles.dimensionImage}>
            <Image
              src="/images/logo.jpeg"
              alt="Image-NextSolve"
              fill
            />
          </div>
        </div>
      </div>
    </section>
  );
}