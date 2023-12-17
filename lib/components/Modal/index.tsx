// Import des styles, des hooks React et des utilitaires nécessaires
import styles from "./styles.module.css";
import React, { useEffect, useRef, useState } from "react";
import { addEscapeEventListener } from "../../utils/escapeEvent";
import { toggleOverflow } from "../../utils/toggleOverflow";
import { handleCloseWithFadeDown } from "../../utils/handleCloseWithFadeDown";
import { calculateTotalLineNumber } from "../../utils/calculateTotalLineNumber";

// Définition des types des propriétés du composant Modal
type ModalProps = {
  // Indique si la modal est ouverte ou fermée
  open: boolean;
  // Fonction à appeler pour fermer la modal
  onClose: () => void;
  // Désactive la fermeture de la modal avec la touche Escape si true
  ESCNotActive?: boolean;
  // Personnalise le bouton de fermeture de la modal
  customCloseButton?: string | React.ReactNode | JSX.Element;
  // Désactive le bouton de fermeture de la modal si true
  noCloseButton?: boolean;
  // Style personnalisé pour la modal
  modalStyle?: React.CSSProperties;
  // Contenu de la modal
  children?: React.ReactNode;
  // Durée de l'animation d'apparition de la modal en millisecondes
  fadeDuration?: number;
  // Temps d'attente avant le lancement de l'animation d'apparition de la modal en millisecondes
  fadeDelay?: number;
  // Temps de disparition de la modal
  fadeDown?: number;
  // Affiche un bouton "Show More" si true
  showMore?: boolean;
  // Style personnalisé pour le bouton "Show More"
  showMoreStyle?: React.CSSProperties;
  // Nombre de lignes à afficher par défaut
  defaultNumberOfLine?: number;
  // Nombre de lignes à ajouter lors du clic sur "Show More"
  lineAddOnShowMore?: number;
  // Affiche tout le contenu sans bouton "Show More" si true
  totalDisplay?: boolean;
};

export function Modal({
  open,
  onClose,
  ESCNotActive = false,
  customCloseButton,
  noCloseButton = false,
  modalStyle,
  children = "Contenu de la modal",
  fadeDuration = 0,
  fadeDelay = 0,
  fadeDown = 0,
  showMore = false,
  showMoreStyle,
  defaultNumberOfLine = 7,
  lineAddOnShowMore = 7,
  totalDisplay = false,
}: ModalProps) {
  // Référence pour accéder au contenu de la modal
  const contentRef = useRef<HTMLDivElement>(null);

  // État pour gérer le nombre total de lignes du contenu
  const [totalLineNumber, setTotalLineNumber] = useState<number>(0);

  // État pour gérer le nombre de lignes affichées
  const [lineNumberDisplay, setLineNumberDisplay] =
    useState<number>(defaultNumberOfLine);

    // Fonction pour afficher davantage de lignes
  const handleShowMore = () => {
    setLineNumberDisplay(lineNumberDisplay + lineAddOnShowMore);
  };

  // Vérification et suppression des valeurs négatives pour les propriétés de l'animation
  const adjustFadeDuration = fadeDuration < 0 ? 0 : fadeDuration;
  const adjustFadeDelay = fadeDelay < 0 ? 0 : fadeDelay;
  const adjustFadeDown = fadeDown < 0 ? 0 : fadeDown;

  // Gestion de l'ouverture et de la fermeture de la modal
  useEffect(() => {
    if (open) {
      // Désactivation du scroll sur le body lorsque la modal est ouverte
      toggleOverflow(false);
      // Ajout d'un écouteur d'événement pour la touche Escape
      const cleanup = addEscapeEventListener(
        () => handleCloseWithFadeDown(adjustFadeDown, onClose),
        ESCNotActive
      );

      // Ajout d'écouteurs d'événements pour la fermeture via un clic
      const closeModalElements = document.querySelectorAll("[close-modal]");
      closeModalElements.forEach((element) => {
        element.addEventListener("click", () => {
          handleCloseWithFadeDown(adjustFadeDown, onClose);
        });
      });

      // Nettoyage lors de la fermeture de la modal
      return () => {
        // Réactivation du scroll
        toggleOverflow(true);
        // Réinitialisation du nombre de lignes affichées
        setLineNumberDisplay(defaultNumberOfLine);
        // Suppression des écouteurs d'événements
        cleanup();
        closeModalElements.forEach((element) => {
          element.removeEventListener("click", () => onClose());
        });
      };
    }
  }, [open, onClose, adjustFadeDown, ESCNotActive, defaultNumberOfLine]);

  // Calcul du nombre total de lignes du contenu
  useEffect(() => {
    setTotalLineNumber(calculateTotalLineNumber(contentRef));
  }, [contentRef, children]);

  if (!open) return null;

  // Rendu conditionnel du bouton "Voir plus"
  const showMoreButton =
    showMore && totalLineNumber > lineNumberDisplay ? (
      <button
        className={styles.showMoreButton}
        onClick={handleShowMore}
        style={{
          ...showMoreStyle,
        }}
      >
        More!
      </button>
    ) : null;

    // Rendu conditionnel du contenu en fonction de la props totalDisplay
  const contentToShow = totalDisplay ? (
    children
  ) : (
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
  );

  // Rendu final de la modal
  return (
    <>
    {/* Overlay de la modal */}
      <div
        id="modal-overlay"
        className={`${styles.modalOverlay} ${
          adjustFadeDuration || adjustFadeDelay > 0 ? styles.animateFadeUp : ""
        }`}
        style={{
          animationDuration: `${adjustFadeDuration}ms`,
        }}
      />
      {/* Conteneur principal de la modal */}
      <div
        className={styles.modalBlocker}
        onClick={() => {
          if (!ESCNotActive) {
            handleCloseWithFadeDown(adjustFadeDown, onClose);
          }
        }}
      >
        {/* Contenu de la modal */}
        <div
          id="modal"
          className={`${styles.modal} ${
            adjustFadeDelay > 0 ? styles.opacity0 : ""
          } ${
            adjustFadeDuration || adjustFadeDelay > 0
              ? styles.animateFadeUp
              : ""
          }`}
          style={{
            ...modalStyle,
            animationDuration: `${adjustFadeDuration}ms`,
            animationDelay: `${adjustFadeDelay}ms`,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Bouton de fermeture de la modal */}
          {!noCloseButton && (
            <span
              id="btnCloseModal"
              className={`${
                customCloseButton ? styles.defaultCloseButton : styles.close
              }`}
              onClick={() => handleCloseWithFadeDown(adjustFadeDown, onClose)}
            >
              {customCloseButton ? customCloseButton : <>&times;</>}
            </span>
          )}
          {/* Contenu à afficher */}
          {contentToShow}
        </div>
      </div>
    </>
  );
}
