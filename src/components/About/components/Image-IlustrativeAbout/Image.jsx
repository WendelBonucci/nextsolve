import React, { useEffect } from 'react'
import styles from './Image.module.css'
import Image from 'next/image'
import Aos from 'aos'
import 'aos/dist/aos.css'

export default function ImageAbout() {
  useEffect(() => {
    Aos.init({
      duration: 700,
      easing: 'ease-in-out',
      once: true
    })
  })

  return (
    <section className={styles.secImage}>
      <div
        data-aos="fade-up"
        data-aos-delay={80}
        className={styles.boxImg}>
        <Image
          width={1200}
          height={600}
          src='/slideNextSolve.png'
          alt='image-content'
          className={styles.Image}
        />
      </div>
    </section>
  )
}