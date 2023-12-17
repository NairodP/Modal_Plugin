# Modal React
La bibliothèque Modal React offre une implémentation simple et personnalisable de fenêtres modales pour les applications React, avec la flexibilité des props pour une intégration facile.



## Installation

```bash
npm install @nairodp/modal
```

ou

```bash
yarn add @nairodp/modal
```


## Node Version

Ce projet a été développé et testé avec Node.js version 21.2.0. L'utilisation d'une version ultérieure de Node.js peut entraîner des problèmes de compatibilité. Pour garantir une expérience sans bug, assurez-vous d'utiliser Node.js version 21.2.0.

Pour installer Node.js version 21.2.0, vous pouvez utiliser un gestionnaire de versions comme [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) en exécutant les commandes suivantes dans votre terminal :

```bash
nvm install 21.2.0
nvm use 21.2.0
```

Si vous utilisez un autre gestionnaire de versions ou une méthode d'installation différente, assurez-vous d'avoir la version correcte de Node.js pour éviter tout problème lors de l'utilisation de cette bibliothèque.


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



## Exemples

Pour des exemples détaillés, veuillez vous référer au site https://nairodp.github.io/Modal-Documentation/.



## TypeScript

La bibliothèque est écrite en TypeScript, offrant ainsi une expérience de développement plus sécurisée et intuitive.



## Publication sur npm

La bibliothèque Modal React est disponible en tant que package npm. Pour les dernières mises à jour et la dernière version, veuillez consulter [ce lien] (https://www.npmjs.com/package/@nairodp/modal).
