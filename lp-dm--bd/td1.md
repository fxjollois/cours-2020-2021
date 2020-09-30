# Modélisation d'une base de données

## La société française d'archéologie

La société française d'archéologie (SFA) aimerait constituer une banque de données sur les objets et les musées, et gérer une bibliothèque. On dispose des données suivantes pour décrire le monde réel de cette application.

### Propriétés

| Propriété	| Description	|
|-|-|
| NumObj | N° d'un objet archéologique |
| DesObj | Désignation de l'objet | 
| TypeObj | Type d'objet |
| DateObj | Date d'origine de l'objet |
| CodeVille | Code d'une ville | 
| ANomVille | Ancien nom de la ville | 
| MNomVille | Nom moderne de la ville |
| CodeMusee | Code d'un musée |
| NomMusee | Nom du musée |
| NumOuv | Numéro d'un ouvrage |
| TitreOuv | Titre d'un ouvrage |
| NumEdi | Numéro d'un éditeur |
| DesEdi | Désignation de l'éditeur |
| DateEdi | Date d'édition |
| NumAuteur | Numéro d'un auteur |
| NomAuteur | Nom de l'auteur |
| PrenomAuteur | Prénom de l'auteur |
| CodeSite | Code d'un site |
| DesSite | Désignation du site |
| CivSite | Civilisation à laquelle est attribué le site |

### Règles de gestion

- Un objet provient d'un site donné et appartient à un musée.
- Il est exposé dans des musées sur une période définie.
- Un ouvrage se rapporte à un ou plusieurs sites et fait référence à plusieurs objets.
- Un ouvrage peut avoir plusieurs coauteurs et un seul éditeur.
- Les sites et musées sont situés dans des villes. Un site peut être localisé dans aucune (désert) ou plusieurs villes.

### Demande

1. Construisez le modèle Entité-Association correspondant à la description ci-dessus. 
    - il est bien évidemment possible d'ajouter des propriétés si cela est nécessaire
1. Convertir ce modèle en schéma relationnel.



## SI d’une bibliothèque

On se propose de représenter le système d’information d’une bibliothèque, à l'aide des informations ci-dessous. 

### Informations

- La bibliothèque enregistre chaque lecteur à qui elle donne un numéro de lecteur. Elle lui prend son nom et son adresse. 
- Le lecteur peut éventuellement être membre d’une société adhérente. On enregistre alors l’identification de cette société.
- Un lecteur peut emprunter plusieurs livres chaque jour. A chaque prêt, on associe une « date de retour au plus tard ».
- Un lecteur appartient à un « type de lecteur ». Ce type lui permet d’avoir ou non accès à certaines catégories de livres.
- La durée du prêt dépend de la catégorie du livre et du type de lecteur. Elle est la même pour tous les livres d’une catégorie donnée empruntés par un quelconque lecteur d’un type donné.
- Un livre est caractérisé par son numéro d’inventaire. Il est nécessaire de connaître sa catégorie, le nom de son auteur, son éditeur, ainsi que le nombre de ses différents exemplaires disponibles. L’édition, lorsqu’elle existe, est également à connaître.
- La catégorie d’un livre se repère par un numéro et possède un libellé. Il en est de même pour le type de lecteur.
- Une société adhérente possède un nom et une adresse ; elle s’engage à envoyer un minimum de 500 lecteurs.

### Demande

1. Donner le schéma entité-association correspondant à cet énoncé.
1. Convertir ce modèle en schéma relationnel.



## Gestion des Stocks

Une entreprise veut améliorer sa gestion du matériel ainsi que celle des commandes de ces clients. Pour cela, elle envisage certaines orientations.

### Informations

- Elle veut connaître à tout instant la quantité disponible d’un matériel dans un magasin donné.
- Les matériaux sont classés en catégories pour faciliter leur gestion.
- On doit pouvoir connaître les composants d’un matériel et les matériaux dans lesquels on trouve un composant donné.
- Lors d’une rupture de stock, un matériel peut être remplacé par un matériel de substitution.
- Chaque client a un seuil maximal de commandes autorisé (droit d’approvisionnement) par catégorie de matériel pour une période donnée.
- Un client ne peut s’approvisionner que dans un magasin et un seul.
- Une commande est définie par un numéro : elle concerne un seul client et différents matériaux, et précise la quantité commandée. 

### Demande

1. Donner le schéma entité-association correspondant à cet énoncé
1. Convertir ce modèle en schéma relationnel.


## Gestion d’une compagnie aérienne

Une compagnie veut conserver les coordonnées des passagers, y compris s’ils se sont désistés, ou après le départ. 

### Informations

- Un passager peut avoir plusieurs réservations
- Un vol est une liaison entre 2 lieux. Il peut être régulier, tous les jours à telle heure, ou occasionnel. En conséquence, un vol peut avoir plusieurs départs (un départ est un exemplaire d’un et un seul vol)
- La compagnie dispose d’un ensemble de personnels, dont certains sont des « volants » (pilotes ou personnels de bord) qui sont affectés au départ de certains vols, et d’autres sont à terre (entretien, accueil, etc.)
- Il n’y a jamais plus de 6 « volants » affectés à un départ. Un départ peut n’avoir encore aucun personnel affecté
- La compagnie a décidé de ne considérer comme pilote que ceux qui sont brevetés pour au moins un des modèles d’avions qu’elle possède ou prévoit à terme. Elle prend en compte des modèles d’avion même si elle n’a pas encore de pilote breveté pour ce modèle.

### Demande

1. Donner le schéma entité-association correspondant à cet énoncé.
1. Convertir ce modèle en schéma relationnel.
