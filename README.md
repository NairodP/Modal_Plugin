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



## Props Utilisables

Voici la liste des propriétés que vous pouvez utiliser avec le composant Modal React, ainsi que les types de données qu'elles acceptent :

- **`open`** (*boolean*): **(Obligatoire)** Indique si la modal est ouverte ou fermée.

- **`onClose`** (*() => void*): **(Obligatoire)** Fonction à appeler pour fermer la modal.

- **`ESCNotActive`** (*boolean, facultatif*): Désactive la fermeture de la modal avec la touche Escape si true.

- **`customCloseButton`** (*string | React.ReactNode | JSX.Element, facultatif*): Personnalise le bouton de fermeture de la modal.

- **`customCloseButtonClass`** (*string, facultatif*): Classe personnalisée pour le bouton de fermeture.

- **`noCloseButton`** (*boolean, facultatif*): Désactive le bouton de fermeture de la modal si true.

- **`modalStyle`** (*React.CSSProperties, facultatif*): Style personnalisé pour la modal.

- **`children`** (*React.ReactNode, facultatif*): Contenu de la modal.

- **`fadeDuration`** (*number, facultatif*): Durée de l'animation d'apparition de la modal en millisecondes.

- **`fadeDelay`** (*number, facultatif*): Temps d'attente avant le lancement de l'animation d'apparition de la modal en millisecondes.

- **`fadeDown`** (*number, facultatif*): Temps de disparition de la modal.

- **`showMore`** (*boolean, facultatif*): Affiche un bouton "Show More" si true.

- **`showMoreStyle`** (*React.CSSProperties, facultatif*): Style personnalisé pour le bouton "Show More".

- **`defaultNumberOfLine`** (*number, facultatif*): Nombre de lignes à afficher par défaut.

- **`lineAddOnShowMore`** (*number, facultatif*): Nombre de lignes à ajouter lors du clic sur "Show More".

- **`totalDisplay`** (*boolean, facultatif*): Affiche tout le contenu sans bouton "Show More" si true.




## TypeScript

La bibliothèque est écrite en TypeScript, offrant ainsi une expérience de développement plus sécurisée et intuitive.



## Publication sur npm

La bibliothèque Modal React est disponible en tant que package npm. Pour les dernières mises à jour et la dernière version, veuillez consulter [ce lien](https://www.npmjs.com/package/@nairodp/modal).


## Crédits

Cette bibliothèque Modal React a été créée en s'inspirant de la bibliothèque Modal jQuery de [kylefox](https://github.com/kylefox).
