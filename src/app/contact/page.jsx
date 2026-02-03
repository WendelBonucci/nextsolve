
import FormContact from "./formContact/FormContact";
import styles from "./Contact.module.css";
export default function Contact() {

  return (
    <div className={styles.contactPage} >
      <h2 className={styles.title}>
        Entre em{" "}
        <span style={{ color: "var(--collor-details-cyan)", fontWeight: 700 }}>
          Contato
        </span>
      </h2>
      <FormContact />
    </div>
  );
}
