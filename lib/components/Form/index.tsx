import styles from "./styles.module.css";

export function Form() {
  return (
    <div className={styles.emailForm}>
      <h2>Recevez nos offres en avant première !</h2>
      <form action="#" method="post">
        <label htmlFor="email-input">Email</label>
        <input
          type="email"
          id="email-input"
          autoComplete="off"
          className={styles.emailInput}
          name="email"
          placeholder="Votre adresse e-mail"
          required
        />
        <br />
        <button type="submit" className={styles.confirmButton}>
          Confirmer
        </button>
        <button type="button" className={styles.exitButton} close-modal="true">
          Exit
        </button>
      </form>
    </div>
  );
}
