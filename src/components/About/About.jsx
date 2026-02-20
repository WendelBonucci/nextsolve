"use client"
import { useEffect } from 'react'
import styles from './About.module.css'
import Image from './components/ImageIlustrative/Image'
import Description from './components/Description/Description'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true,
    })
  })

  const dt_text = [
    {
      title: 'Impulsionamos sua empresa com soluções digitais que geram valor.',
      description: 'Sobre nossa Empresa',
    },
  ]

  return (
    <main className={styles.About}>
      {dt_text.map((item, index) => (
        <div
          key={index}
          className={styles.pageHeader}
          data-aos="fade-up"
          data-aos-delay={100}
        >
          <p className={styles.textAbout}>{item.description}</p>
          <h1 className={styles.titleAbout}>{item.title}</h1>
        </div>
      ))}

      <div className={styles.boxDivision}>
        <Image />
        <Description />
      </div>
    </main>
  )
}