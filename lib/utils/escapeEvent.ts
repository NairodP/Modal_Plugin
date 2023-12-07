type EventListener = (event: Event) => void;

export function addEscapeEventListener(action: EventListener): () => void {
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