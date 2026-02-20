"use client"
import { useEffect } from 'react'
import styles from './Description.module.css'
import Link from 'next/link'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function Description() {
    useEffect(() => {
        Aos.init({
            duration: 700,
            easing: 'ease-in-out',
            once: true,
        })
    }, [])

    const dt_text = [
        {
            title: 'Impulsionar empresas para crescer e prosperar através da tecnologia.',
            description: 'Impulsionamos o crescimento e a prosperidade dos negócios por meio da tecnologia, unindo estratégia, inovação e soluções inteligentes para gerar resultados reais.',
            link: 'Saiba mais ->'
        }
    ]

    return (
        <section>
            <div className={styles.boxDescription}>
                {dt_text.map((item, index) => (
                    <div
                        key={index}
                        className={styles}

                    >
                        <h1
                            className={styles.titleInitial}
                            data-aos="fade-left"
                            data-aos-delay={70}
                        >{item.title}</h1>
                        <p
                            className={styles.textIntial}
                            data-aos="fade-left"
                            data-aos-delay={80}
                        >{item.description}</p>
                        <Link
                            href='/' className={styles.link}
                            data-aos="fade-left"
                            data-aos-delay={100}
                        >{item.link}</Link>
                    </div>
                ))}
            </div>
        </section>
    )
}

