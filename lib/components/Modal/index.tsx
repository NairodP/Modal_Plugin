import styles from "./styles.module.css";
import { useEffect, useRef, useState } from "react";
import { addEscapeEventListener } from "../../utils/escapeEvent";
import { toggleOverflow } from "../../utils/toggleOverflow";
import { handleCloseWithFadeDown } from "../../utils/handleCloseWithFadeDown";
import { calculateTotalLineNumber } from "../../utils/calculateTotalLineNumber";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  unclosableWindow?: boolean;
  customCloseButton?: string | React.ReactNode | JSX.Element;
  noCloseButton?: boolean;
  modalStyle?: React.CSSProperties;
  children?: React.ReactNode;
  fadeDuration?: number;
  fadeDelay?: number;
  fadeDown?: number;
  showMore?: boolean;
};

export function Modal({
  open,
  onClose,
  unclosableWindow = false,
  customCloseButton,
  noCloseButton = false,
  modalStyle,
  children = "Contenu de la modal",
  fadeDuration = 0,
  fadeDelay = 0,
  fadeDown = 0,
  showMore = false,
}: ModalProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [totalLineNumber, setTotalLineNumber] = useState<number>(0);
  const [lineNumberDisplay, setLineNumberDisplay] = useState<number>(7);

  const handleShowMore = () => {
    setLineNumberDisplay(lineNumberDisplay + 7);
  };

  useEffect(() => {
    if (open) {
      toggleOverflow(false);
      const cleanup = addEscapeEventListener(() =>
        handleCloseWithFadeDown(fadeDown, onClose)
      );

      const closeModalElements = document.querySelectorAll("[close-modal]");
      closeModalElements.forEach((element) => {
        element.addEventListener("click", () => {
          handleCloseWithFadeDown(fadeDown, onClose);
        });
      });

      return () => {
        toggleOverflow(true);
        setLineNumberDisplay(7);
        cleanup();
        closeModalElements.forEach((element) => {
          element.removeEventListener("click", () => onClose());
        });
      };
    }
  }, [open, onClose, fadeDown]);

  useEffect(() => {
    setTotalLineNumber(calculateTotalLineNumber(contentRef));
  }, [contentRef, children]);

  if (!open) return null;

  const showMoreButton =
    showMore && totalLineNumber > lineNumberDisplay ? (
      <button className={styles.showMoreButton} onClick={handleShowMore}>
        More!
      </button>
    ) : null;

  return (
    <>
      <div
        id="modal-overlay"
        className={`${styles.modalOverlay} ${
          fadeDuration || fadeDelay > 0 ? styles.animateFadeUp : ""
        }`}
        style={{
          animationDuration: `${fadeDuration}ms`,
        }}
      />
      <div
        className={styles.modalBlocker}
        onClick={() => {
          if (!unclosableWindow) {
            handleCloseWithFadeDown(fadeDown, onClose);
          }
        }}
      >
        <div
          id="modal"
          className={`${styles.modal} ${fadeDelay > 0 ? styles.opacity0 : ""} ${
            fadeDuration || fadeDelay > 0 ? styles.animateFadeUp : ""
          }`}
          style={{
            ...modalStyle,
            animationDuration: `${fadeDuration}ms`,
            animationDelay: `${fadeDelay}ms`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {!noCloseButton && (
            <span
            className={`${styles.close} ${
              customCloseButton ? styles.transparentBackground : ""
            }`}
              onClick={() => handleCloseWithFadeDown(fadeDown, onClose)}
            >
              {customCloseButton ? customCloseButton : <>&times;</>}
            </span>
          )}
          <div
            ref={contentRef}
            id="modal-content"
            className={styles.modalContent}
            style={
              {
                "--line-number": lineNumberDisplay,
              } as React.CSSProperties
            }
          >
            {showMoreButton}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
