type EventListener = (event: Event) => void;

export function addEscapeEventListener(action: EventListener, ESCNotActive?: boolean): () => void {

  if (ESCNotActive) {
    // Si ESCNotActive est true, retourne une fonction vide (sans ajouter d'écouteur)
    return () => {};
  }
  const handleEscapeKey = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      action(event);
    }
  };

  document.addEventListener("keydown", handleEscapeKey);

  // Retourne une fonction de nettoyage pour supprimer l'écouteur d'événements
  const cleanup = () => {
    document.removeEventListener("keydown", handleEscapeKey);
  };

  return cleanup;
}