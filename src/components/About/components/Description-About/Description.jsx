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
            once: true
        })
    })

    const dt_text = [
        {
            title: 'A NextSolve impulsiona empresas por meio da tecnologia, desenvolvendo soluções estratégicas que geram resultados reais e sustentáveis.',
            description: `Nosso objetivo inicial era atuar como uma startup focada em gerar resultados para pequenas empresas, prestando serviços como freelancers. Com o tempo, evoluímos e passamos a desenvolver websites, sistemas e lojas virtuais com alto nível de funcionalidade, design moderno e totalmente responsivo.

            Hoje, entregamos soluções digitais profissionais que proporcionam mais autonomia, presença online e credibilidade para nossos clientes.

            Além disso, oferecemos suporte 24 horas por dia por meio de atendimento especializado, com contato via e-mail e WhatsApp, garantindo acompanhamento contínuo e excelência no atendimento.`
        }
    ]

    return (
        <section className={styles.contentDescripition}>
            {dt_text.map((item, index) => (
                <div
                    className={styles.boxDescription}
                    key={index}
                    data-aos="fade-up"
                    data-aos-delay={80}
                >
                    <h3 className={styles.titleDescription}>{item.title}</h3>
                    <p className={styles.Description}>{item.description}</p>
                </div>
            ))}
        </section>
    )
}
