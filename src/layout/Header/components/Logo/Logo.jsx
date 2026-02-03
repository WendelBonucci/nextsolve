import React from 'react'
import styles from './Logo.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
    return (
        <section className={styles.logo_Content}>
            {/*  <Image
                className={styles.imgLogo}
                src="/images/NextSolve-logo.png"
                alt="logo NextSolve"
                width={250}
                height={50}
            /> */}
            <Link href=''>
                <h1 className={styles.logo_Text}>Next<span className={styles.span_Text}>Solve</span></h1>
            </Link>
        </section>
    )
}
