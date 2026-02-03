'use client'
import Image from 'next/image'
import EmailCampaignAnimation from './email-campaign-animate.svg'
import styles from './ImageContact.module.css'

export default function ImageContact() {
  return (
    <Image
      className={styles.image}
      src={EmailCampaignAnimation}
      alt="Animação de campanha de email"
      width={500}
      height={500}
      priority
    />
  )
}
