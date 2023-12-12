import styles from "./styles.module.css";
import { handleCloseWithFadeDown } from "../../utils/handleCloseWithFadeDown";


type FormProps = {
  onClose: () => void;
  fadeDown?: number;
};

export function Form({ onClose, fadeDown = 0, }: FormProps) {
  return (
    <div className={styles.emailForm}>
      <h2>Recevez nos offres en avant première !</h2>
      <form
        action="#"
        method="post"
        onSubmit={(e) => {
          e.preventDefault();
          handleCloseWithFadeDown(fadeDown, onClose);
        }}
      >
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
