import React from 'react'
import styles from './Logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <section className={styles.boxLogo}>
            <Link href='/' className={styles.logo_Text}>
                <h1 className={styles.logo_Text}>Next<span className={styles.alternativCollor}>Solve</span></h1>
            </Link>
        </section>
    )
}
