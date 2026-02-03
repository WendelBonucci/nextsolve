import { useState, useCallback } from 'react'
import styles from './Button.module.css'
import Link from 'next/link'
import ChatWidget from "@/components/ChatBot/ChatWidget";
import { MdOutlineSupportAgent } from "react-icons/md";

export default function Button() {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = useCallback(() => {
        setIsChatOpen((prev) => !prev);
    }, []);

    return (
        <section className={styles.Button}>
            <div className={styles.content_Btn}>
                <Link href="/contact" className={styles.linkButton}>
                    <button type="button" className={styles.BtnHeader}>Contato</button>
                </Link>

                <button
                    onClick={toggleChat}
                    className={styles.chat_Button}
                    aria-label="Abrir chat"
                    aria-expanded={isChatOpen}
                    type="button"
                >
                    <MdOutlineSupportAgent aria-hidden="true" className={styles.iconChat} />
                </button>

            </div>

            <ChatWidget isOpen={isChatOpen} onClose={toggleChat} />
        </section>
    )
}
