'use client'
import { useEffect } from 'react'
import styles from './Image.module.css'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function ImageSlider() {
    const dt_image = [
        { id: 1, image: '/slide-01.png', alt: 'Image-Slider-01' },
        { id: 2, image: '/slide-03.png', alt: 'Image-Slider-02' },
        { id: 3, image: '/slide-02.png', alt: 'Image-Slider-03' },
    ]

    return (
        <section className={styles.sectionWrapper}>
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                loop={true}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                className={styles.boxImage}
            >
                {dt_image.map((item) => (
                    <SwiperSlide
                        key={item.id}
                        className={styles.carousel}
                    >
                        <Image
                            width={700}
                            height={600}
                            className={styles.image}
                            src={item.image}
                            alt={item.alt}
                            priority={item.id === 1}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}