# Restitution d'informations

Suite aux étapes précédentes (modélisation puis intégration des données), dans une situation professionnelle, nous devons mettre en place un ou plusieurs tableaux de bords. Nous allons continuer le travail sur le data mart créé la dernière fois, et que vous pouvez récupérer [en cliquant ici](datamart.accdb) (format Access). 

Vous devez rendre votre fichier `.twbx` (obtenable en choisissant *Exporter le tableau complet* - ceci permet d'intégrer les données dans le fichier) dans l'espace ci-dessous.

<https://cloud.parisdescartes.fr/index.php/s/dGLp73Tnt7bie6a>

**ATTENTION** : Indiquer votre **nom** et **prénom** dans le nom du fichier, sinon je ne pourrais pas savoir qui a fait quoi (et vous auriez 0 comme note du coup... )

## Travail à faire

Vous devez réaliser un tableau de bord avec plusieurs parties

- **Global** : basée sur le chiffre d'affaires 
  - Graphique : évolution du CA sur toute la période (avec indication des années)
  - Boîte d'info :
    - Pourcentage d'évolution sur la période
    - Meilleur produit sur la période (avec % du CA global)
    - Meilleure catégorie sur la période (idem)
- **Catégorie** : 
  - Tableau des catégories, classées dans l'ordre décroissant du CA total sur la période
  - Un clic sur une catégorie va afficher l'évolution de celle-ci sur la période (même base graphique que la partie Global)
  - Ce même clic doit afficher une information sur les fournisseurs (pour répondre à la question : quels fournisseurs sont plus liés à cette catégorie ? - format à réfléchir)
- **Fournisseur** :
  - TOP 10 et BOTTOM 10 des fournisseurs, classés comme la partie précédent
  - Un clic sur un des fournisseurs permet la aussi d'avoir l'évolution
  - On doit aussi pouvoir avoir le détail par produit (CA total et évolution - format aussi à réfléchir)

