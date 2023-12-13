# Modal React
La bibliothèque Modal React offre une implémentation simple et personnalisable de fenêtres modales pour les applications React, avec la flexibilité des props pour une intégration facile.

---

## Installation

```bash
npm install @nairodp/modal
```

ou

```bash
yarn add @nairodp/modal
```

---

## Utilisation

```
import { Modal } from "@nairodp/modal";
import { useState } from "react";

const [openModal, setOpenModal] = useState(false);

// ...
return (
   // ...
   <>
      <Modal
         open={openModal}
         onClose={() => setOpenModal(false)}
         // Ajoutez d'autres props personnalisées pour personnaliser votre modal
      >
         Contenu de la modal
      </Modal>
   <>
   // ...
)
```

---

## Exemples

Pour des exemples détaillés, veuillez vous référer au site https://localhost/5175.

---

## TypeScript

La bibliothèque est écrite en TypeScript, offrant ainsi une expérience de développement plus sécurisée et intuitive.

---

## Publication sur npm

La bibliothèque Modal React est disponible en tant que package npm. Pour les dernières mises à jour et la dernière version, veuillez consulter [ce lien] (https://www.npmjs.com/package/@nairodp/modal).
