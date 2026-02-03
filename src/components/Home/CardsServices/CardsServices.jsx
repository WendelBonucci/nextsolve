"use client";
import styles from "./CardsServices.module.css";
import useAOS from "@/utils/useAOS";
import { FaWordpress, FaLaptopCode, FaPaintbrush } from "react-icons/fa6";
import { MdOutlineSecurity, MdDeveloperMode } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";

const services = [
  {
    title: "Woocommerce",
    text: "Desenvolvemos seu site em WordPress e oferecemos suporte completo para que você possa gerenciar facilmente as funcionalidades básicas.",
    icon: <FaWordpress />,
  },
  {
    title: "Desenvolvimento Web",
    text: "Criamos sites personalizados, rápidos e responsivos, focados em usabilidade e experiência do usuário.",
    icon: <FaLaptopCode />,
  },
  {
    title: "Design Gráfico",
    text: "Oferecemos identidade visual completa, incluindo logotipos, banners e materiais gráficos profissionais.",
    icon: <FaPaintbrush />,
  },

  {
    title: "Segurança de Dados",
    text: "Oferecemos identidade visual completa, incluindo logotipos, banners e materiais gráficos profissionais.",
    icon: <MdOutlineSecurity />,
  },

  {
    title: "Desenvolvimento Mobile",
    text: "Oferecemos identidade visual completa, incluindo logotipos, banners e materiais gráficos profissionais.",
    icon: <MdDeveloperMode />,
  },

  {
    title: "Agente de IA",
    text: "Oferecemos identidade visual completa, incluindo logotipos, banners e materiais gráficos profissionais.",
    icon: <GiArtificialIntelligence />,
  },
];

export default function CardsServices() {
  useAOS()

  return (
    <section className={styles.boxServices} id="cards-services">
      <div
        className={styles.ServiceCardsWrapper}
        data-aos="fade-up"
        data-aos-delay="0"
      >
        {services.map((service, index) => (
          <div key={index} className={styles.ServiceCards}>
            <div className={styles.cardContent}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardText}>{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
