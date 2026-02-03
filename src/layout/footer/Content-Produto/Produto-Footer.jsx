"use client"
import Link from 'next/link';
import styles from './Product-Footer.module.css'

// Importação individual dos ícones
import {MdLocationOn} from "react-icons/md";
import { MdEmail} from "react-icons/md";
import {MdSupport} from "react-icons/md";
import {MdDesignServices } from "react-icons/md";
 
export default function ProdutoFooter() {
  const ServiceLinks = [
    { nome: "Startup: Sediada em Fortaleza-CE", icon: <MdLocationOn />,  },
    { nome: "E-mail comercial: equipe.nextsolvesolution@gmail.com",  icon: <MdEmail />  },
    { nome: "Contato para Suporte (Agente IA): 85 99727-6499",  icon: <MdSupport />,   },
    { nome: "Serviços de Design e Marketing", icon: <MdDesignServices  />,   },
  ];

  return (
    <section className={styles.Box_Services_Footer}>
      <h1 className={styles.Title_Contact} data-aos="fade-left" data-aos-delay="100">
        Contato Direto
      </h1>
      <ul className={styles.List_Contact_Footer}>
        {ServiceLinks.map((service, index) => (
          <li 
            className={styles.listFooter} 
            key={service.nome}
            data-aos="fade-left" 
            data-aos-delay={(index + 2) * 100}
          >
            <p className={styles.link}>
              {service.icon} {service.nome}
            </p>
          </li>
        ))}
      </ul>
    </section>
  )
}