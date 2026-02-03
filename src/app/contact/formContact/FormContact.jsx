"use client";
import { useRef, useState } from "react";
import styles from "./FormContact.module.css";
import emailjs from "@emailjs/browser";
import Loading from "@/utils/loading/Loading";
import ImageContact from "../imageContact/ImageContact";
import useAOS from "@/utils/useAOS";

export default function FormContact() {
  useAOS()

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      setStatus("Por favor, preencha todos os campos.");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      setStatus("Mensagem enviada com sucesso! Obrigado pelo contato.");

      setFormData({
        user_name: "",
        user_email: "",
        message: "",
      });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      setStatus("Erro ao enviar mensagem. Tente novamente mais tarde.");

      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className={styles.formContainer} data-aos="fade-up" data-aos-delay="0">
   
        <form ref={form} onSubmit={handleSubmit} className={styles.formEmail}>
          <div>
            <label htmlFor="user_name" className={styles.formLabel}>
              Nome
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="Seu nome completo"
            />
          </div>
          <div>
            <label htmlFor="user_email" className={styles.formLabel}>
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
              className={styles.input}
              placeholder="seu.email@exemplo.com"
            />
          </div>
          <div>
            <label htmlFor="message" className={styles.formLabel}>
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Digite sua mensagem aqui..."
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${styles.buttonForm} ${isLoading ? styles.buttonLoading : ""}`}
            >
              {isLoading ? <Loading /> : "Enviar Mensagem"}
            </button>
          </div>
          {status && (
            <div
              className={`${styles.statusMessage} ${status.includes("sucesso") ? styles.statusSuccess : styles.statusError}`}
            >
              {status}
            </div>
          )}
        </form>
        <div className={styles.animation} data-aos="fade-up">
          <ImageContact />
        </div>
      
    </div>
  );
}
