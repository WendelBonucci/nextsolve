//Formulário das Avaliações
'use client'
//Importações 
import styles from './ReviewForm.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { useState } from 'react'
import { enviarFeedback } from '@/backend/feedbackService'

export default function ReviewForm({onClose}) {

    const [name, setName] = useState("")//nome que você digitar
    const [review, setReview] = useState("")//avaliação que você escrever
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()//nao recarrega a página ao enviar o form
        setLoading(true)
        setError("")
        if(!name || !review){
            alert("Preenche todos os campos do formulário")
            setLoading(false) 
            return 
        }
        try {
            await enviarFeedback(name, review)
            // alert("Feedback enviado com sucesso!")
            setName("")
            setReview("")
            onClose()
        } catch (err) {
            setError("Erro ao enviar: " + err.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        //Overlay - Cria um fundo escuro atrás do formulário
        <div className={styles.overlay}>
            <div className={styles.reviewForm}>
                {/*Icone que fecha o form */}
                <IoMdCloseCircle className={styles.closeBtn} onClick={onClose}/>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className={styles.inputForm}
                    />
                    <textarea
                        placeholder="Escreva sua avaliação..."
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        required
                        className={styles.textareaForm}
                    />
                    <button type="submit" className={styles.submitBtn}>
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    )
}
