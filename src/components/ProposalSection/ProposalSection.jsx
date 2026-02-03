"use client";
import { useRef, useState } from "react";
import styles from "./ProposalSection.module.css"; 
import emailjs from "@emailjs/browser";
import Loading from "@/utils/loading/Loading"; 
import useAOS from '../../utils/useAOS'
import formatCurrency  from "@/utils/FormatCurrency";

export default function ProposalSection() {
  useAOS()

  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    company_name: "", 
    project_details: "",
    budget: "", 
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "budget") {
      const formattedValue = formatCurrency(value);
      setFormData((prevState) => ({
        ...prevState,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.user_name || !formData.user_email || !formData.project_details) {
      setStatus("Por favor, preencha todos os campos obrigatórios (*).");
      return;
    }

    setIsLoading(true);
    setStatus("");

    try {
      // AÇÃO DE ENVIO DE PROPOSTA PELO EMAILJS
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

      setStatus("Proposta enviada com sucesso! Analisaremos os detalhes em breve.");
      
      // Limpa o formulário após o sucesso
      setFormData({ 
        user_name: "", 
        user_email: "", 
        company_name: "", 
        project_details: "", 
        budget: "" 
      });

      setTimeout(() => setStatus(""), 5000);
    } catch (error) {
      console.error("Erro ao enviar proposta:", error);
      setStatus("Erro ao enviar proposta. Tente novamente mais tarde.");
      setTimeout(() => setStatus(""), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.sectionContainer} data-aos="fade-up">
      
      <div className={styles.header}>
        <h1 className={styles.title} data-aos="fade-right">
            Apresentar <span className={styles.titleHighlight}>Proposta</span>
        </h1>
        <p className={styles.subtitle} data-aos="fade-right">
            Descreva seu projeto para a NextSolve. Estamos prontos para inovar.
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit} className={styles.formProposal} data-aos="fade-up">
        
        {/* Bloco de Dados de Contato */}
        <div className={styles.formGroup}>
          <label htmlFor="user_name" className={styles.formLabel}>Nome</label>
          <input type="text" id="user_name" name="user_name" value={formData.user_name} onChange={handleChange} required className={styles.input} placeholder="Seu nome" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="user_email" className={styles.formLabel}>Email</label>
          <input type="email" id="user_email" name="user_email" value={formData.user_email} onChange={handleChange} required className={styles.input} placeholder="seu.email@exemplo.com" />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company_name" className={styles.formLabel}>Nome da Empresa/Startup</label>
          <input type="text" id="company_name" name="company_name" value={formData.company_name} onChange={handleChange} className={styles.input} placeholder="Nome da sua empresa" />
        </div>

        <h2 className={styles.sectionTitle}>Detalhes do Projeto</h2>

        <div className={styles.formGroup}>
          <label htmlFor="project_details" className={styles.formLabel}>Escopo e Objetivos da Proposta</label>
          <textarea id="project_details" name="project_details" value={formData.project_details} onChange={handleChange} required rows="8" className={`${styles.input} ${styles.textarea}`} placeholder="Descreva o problema que deseja resolver e os resultados esperados..." />
        </div>
        
        {/*<div className={styles.formGroup}>
          <label htmlFor="budget" className={styles.formLabel}>Orçamento Estimado (Opcional)</label>
          <input type="text" id="budget" name="budget" value={formData.budget} onChange={handleChange} className={styles.input} placeholder="Ex: R$ 0,00" inputMode="numeric"/>
        </div>*/}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`${styles.buttonForm} ${isLoading ? styles.buttonLoading : ""}`}
          >
            {isLoading ? <Loading /> : "Enviar Proposta"}
          </button>
        </div>

        {status && (
          <div className={`${styles.statusMessage} ${status.includes("sucesso") ? styles.statusSuccess : styles.statusError}`}>
            {status}
          </div>
        )}
      </form>
      
    </div>
  );
}