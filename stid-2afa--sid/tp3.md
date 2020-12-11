# Restitution avec Tableau

Nous allons utiliser la base [ca_tout.mdb](ca_tout.mdb) (à télécharger donc) dans l'outil **Tableau**.

## Connexion de la base dans Tableau

- Sélectionner 'Microsoft Access' et aller choisir le fichier
- Utiliser la table `tout` (qui est une vue comprenant toutes les informations du datamart)
- Vérifier que les attributs ont le bon type (normalement, tout est ok)

## Paramètrage des données

Avant de faire quoique ce soit, nous allons trier correctement les mois 

- Aller dans une nouvelle feuille
- Clic-droit sur "Mois", puir "Propriétés par défaut", puis cliquer sur "Trier"
- Choisir "Manuel"
- Vérifier que l'ordre est le bon (par défaut, il est ok, car ordre dans la base, mais il est préférable de faire attention)
- Fermer la fenêtre


Ensuite, nous allons définir les hiérarchies 

- Hiérarchie département
    - Clic-droit sur "Département" puis sur "Hiérarchie", et cliquer sur "Créer une hiérarchie"
    - Nommer la "Hiérarchie département" par exemple
    - Faites un Glisser-Déplacer de "Groupe" et "Sous-groupe" pour les mettre dans la hiérarchie, mais dans cet ordre donc :
        1. Département
        2. Groupe
        3. Sous-groupe
- Hiérarchie année
    - Faites de même pour créer la hiérarchie année :
        1. Année
        2. Mois (nom - l'ordre devrait être le bon)
            
## Création d'une reporting par département

Nous voulons avoir un *tableau de bord* (dans le jargon Tableau) permettant à chaque département de comprendre leur fonctionnement sur la période.

- Dans une nouvelle feuille, glisser-déplacer `Ca` sur l'icône *Texte* (vous devriez voir la somme globale : 140 999 800)
- Double-cliquer sur `Provenance` (les modalités doivent être visibles en lignes)
- Double-cliquer sur `Annee` (les années doivent être visibles en colonnes)

Nous avons donc pour toute l'entreprise la répartition du CA par provenance et par année. Nous voulons ajouter un filtre sur le département. Il nous faut commencer par créer un sélecteur de département.

- Faire un clic-droit dans la zone blanche en bas à gauche et cliquer sur *Créer un paramètre...*
- Donner lui un nom (par exemple `choixDepartement`)
- Changer le type de données en *Chaîne de caractères*
- Dans *Valeurs autorisées*, sélectionner *Liste*, puis cliquer sur *Ajouter des valeurs depuis* et choisissez `Departement`
- Cliquer sur *OK* (il doit apparaître en bas à gauche maintenant)
- A droite du nom du paramètre, en cliquant sur la flèche, vous pouvez choisir *Afficher le paramètre* (le sélecteur est visible en haut à droite)

Maintenant que nous avons un paramètre que l'on peut choisir, nous allons l'utiliser comme filtre. Pour cela, nous devons créer un nouveau champs, en se basant sur le sélecteur.

- Refaire un clic-droit dans la zone blanche en bas à gauche, et choisir *Créer un champs calculé...*
- Nommer le (par exemple `filtreDepartement`)
- Ecrire la formule suivante : `IF ([Departement] == [choixDepartement]) THEN "OUI" ELSE "NON" END`, puis cliquer sur OK (il doit apparaître dans la liste des attributs à gauche)
- Le glisser-déplacer dans la case *Filtres* et cocher "OUI", puis cliquer sur OK

Maintenant, le tableau ne donne les valeurs que pour le département choisi. Modifier le sélecteur pour voir l'impact sur le tableau.

Puisqu'un graphique est bien utile en complément d'un tableau, nous allons montrer visuellement la différence entre les 2 années.

- Faire un clic-droit sur le nom de la feuille en bas et choisir *Dupliquer*
- Dans la nouvelle feuille, cliquer à droite de `SOMME (Ca)` sur la petite flêche, et choisir *Ajouter un calcul de table...*
- Il faut que soit sélectionner (ce sont les choix par défaut)
    - Type de calcul : *Différence par rapport à*
    - Calculer au moyen de : *Table (horizontale)*
    - En rapport avec *Précédent*
- Fermer la fenêtre de *Calcul de table* (normalement, vous devriez que la colonne 2003 est vide, et la colonne 2004 représente maintenant la différence 2004 - 2003)
- Faire un clic-droit sur `2003` et choisir *Masquer* pour ne plus la voir
- Dans le choix des graphiques en haut à droite (cliquer sur *Montre-moi* pour les voir), choisir les barres horizontales (vous devriez maintenant avoir des barres qui vont à droite ou à gauche par rapport à 0)
- Faire un glisser-déplacer de `Ca` (dans la liste à gauche) sur *Couleur*, et refaire la même manipulation pour le *calcul de table*

Nous avons maintenant un graphique très clair nous indiquant sur quelles provenances le département a amélioré ou diminué son CA entre les 2 années.

Nous allons finir ce reporting en ajoutant une courbe d'évolution du CA globale sur les ans, en comparant les années.

- Créer une nouvelle feuille
- Double-cliquer sur `Ca`
- Double-cliquer sur `Mois Numero`
- Glisser-déplacer `Année` sur *Couleur*

Nous allons maintenant intégrer ces trois éléments dans un *Tableau de bord*. 

- Créer un *Tableau de bord*
- Faire du glisser-déplacer pour placer les trois éléments, ainsi qu'un texte pour mettre un titre
- Améliorer le rendu en
    - Modifiant les axes dans les feuilles
    - Modifiant le titre du sélecteur
    - Rendant flottant l'affichage des couleurs des années (éventuellement en choissisant d'autres couleurs aussi)

Vous devriez avoir un reporting comme dans [ce fichier](ca--reporting.twbx)

### A tester

Adapter ce premier reporting pour le faire par sous-groupe.

## Tableau de bord par provenance

Nous allons maintenant créer un tableau de bord plus synthétique, permettant d'analyser la situation pour chaque provenance. Nous voulons avoir un TOP 10 des meilleurs sous-groupes, en utilisant le champs créé précédemment. Si on garde les données brutes, avec la hiérarchie Département, les sous-groupes sont justement rassemblés par groupe et département. Le TOP 10 est impossible à faire proprement dans ce cas. Une façon de faire est de créer une nouvelle variable unique pour chaque sous-groupe.

- Dans une nouvelle feuille, créer un filtre sur la provenance, en vous inspirant de ce qu'on a vu précédemment
- Ajouter ce filtre et l'afficher
- Créer un nouveau champ (nommé `DptGrpSSGrp` par exemple) qui est la concaténation des variables `Département`, `Groupe` et `Sous-groupe` (en les séparant avec " - " ou " / " par exemple - l'opérateur de concaténation de chaînes est le "+" dans Tableau)
- Double-cliquer sur le champ créé, puis sur `Ca` ensuite (vous devriez avoir les CAs par sous-groupe)
- Ajouter la hiérarchie département dans les *Lignes* et la déplier
- Glisser-déplacer le champ créé dans *Filtres*
    - Aller dans l'onglet *Premiers*
    - Sélectionner *Par champ*
    - Vérifier que vous avez bien les *10* *Premiers* par la *somme* de `Ca`
- Faire un clic-droit juste au-dessus de la colonne avec les CA et choisir *Trier dans l'ordre décroissant*

Nous avons notre TOP 10. Le défaut notoire est la présence de cette variable créée. Avec un peu de formatage (masquage des étiquettes de champs et passage au blanc de la police d'écriture des modalités), celle-ci n'est plus visible.

Vous devriez avoir un reporting comme dans [ce fichier](ca--tdb.twbx)

### A tester

- Construire le diagramme en barres représentant le CA total sur la période par département (avec toujours le filtre de provenance)
    - Barres horizontales
    - Départements triés par ordre décroissant de CA total
- Construire le diagramme en barres représentant l'évolution du CA total par mois
    - 1 barres par mois et par année, dans l'ordre naturel (Janvier 2003, Février 2003...)
    - Calcul de table : différence par rapport au précédent mois
- Mettre ses trois graphiques dans un même tableau de bord

## A faire

Créer une vue très synthétique, en mode carte de performance, avec :

- Evolution complète, sur la période, du chiffre d'affaire
- Evolution de la répartition par département 
- Evolution propre de chaque département par rapport au mois de référence "Janvier 2003" (ce qu'on appelle en base 100)
    - Possible avec calcul de table : *Pourcentage de*, en rapport avec le *Premier*
- Créer une *histoire* avec ces éléments
    



