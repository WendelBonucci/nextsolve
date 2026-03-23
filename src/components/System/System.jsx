import React, { useEffect } from 'react'
import styles from './System.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function System() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            once: true,
            easing: 'ease-in-out'
        })
    })

    const systems = [
        {
            image: '/koriv.jpeg',
            alt: 'Korivo',
            title: 'Korivo Sistemas',
            description: 'Sistema de Gerenciamento Empresarial, Dashboards Personalizados e Controle Financeiro.',
            link: 'https://korivo.vercel.app/'
        },
        {
            image: '/finan.png',
            alt: 'Controle Financeiro',
            title: 'Controle Financeiro',
            description: 'Sistema para controle de extratos, pagamentos e cartões com dashboards personalizados.',
            link: 'https://meu-controle-financeiro-web.vercel.app/'
        },
        {
            image: '/taskflow.png',
            alt: 'Task Manager',
            title: 'Gerenciador de Tarefas',
            description: 'Sistema para controle de atividades de usuários e funcionários.',
            link: 'https://task-manager-nextsolve-seven.vercel.app/login'
        },
    ]

    return (
        <section className={styles.System}>
            <h1
                className={styles.titleSystem}
                data-aos="fade-up"
                data-aos-delay={80}
            >Nossos Sistemas</h1>
            <p
                className={styles.descriptionSystem}
                data-aos="fade-up"
                data-aos-delay={80}
            >Abaixo, conheça alguns dos nossos sistemas tecnológicos desenvolvidos para otimizar e aprimorar funcionalidades nas empresas.</p>

            <div className={styles.container}>
                {systems.map((item, index) => (
                    <div
                        key={index}
                        className={styles.card}
                        data-aos="fade-up"
                        data-aos-delay={80}
                    >
                        <Image
                            width={300}
                            height={300}
                            src={item.image}
                            alt={item.alt}
                            className={styles.imagelog}
                        />
                        <div className={styles.contentSystem}>
                            <h2 className={styles.titleContet}>{item.title}</h2>
                            <p className={styles.descriptionContent}>{item.description}</p>
                            <Link
                                href={item.link}
                                target="_blank"
                                className={styles.buttonAcess}>
                                Acessar Sistema
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}