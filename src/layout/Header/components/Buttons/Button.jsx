import { useState, useCallback } from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import ChatWidget from "@/components/ChatBot/ChatWidget";
import { AiOutlineGlobal } from "react-icons/ai";


export default function Button() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = useCallback(() => {
        setIsChatOpen((prev) => !prev);
    }, []);

    const dt_btns = [
        {
            name: 'Contato', href: '/'
        },
        {
            name: 'English', href: '/', icon: <AiOutlineGlobal />
        }
    ]

    return (
        <section className={styles.secButon}>
            {dt_btns.map((item, index) => (
                <div
                    key={index}
                    className={styles.boxButtons}
                >
                    <Link href={item.href} className={styles.Btn}>{item.name}{item.icon}</Link>
                </div>
            ))}
        </section>
    )
}
