import styles from "../components/Modal/styles.module.css";

export function handleCloseWithFadeDown(
  fadeDown: number,
  onClose: () => void
) {
  if (fadeDown > 0 && fadeDown < 1) {
    const modalOverlay = document.getElementById("modal-overlay");
    const modal = document.getElementById("modal");

    if (modalOverlay && modal) {
      modalOverlay.classList.add(styles.animateFadeDown);
      modalOverlay.style.animationDuration = `${fadeDown}s`;
      modal.classList.add(styles.animateFadeDown);
      modal.style.animationDuration = `${fadeDown}s`;

      setTimeout(() => {
        onClose();
      }, fadeDown * 1000);
    }
  } else {
    onClose();
  }
}