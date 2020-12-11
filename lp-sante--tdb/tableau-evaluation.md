# Tableau - évaluation

Vous devez rendre votre fichier `.twbx` (obtenable en choisissant *Exporter le tableau complet* - ceci permet d'intégrer les données dans le fichier) dans l'espace ci-dessous

<https://cloud.parisdescartes.fr/index.php/s/Jcs9QKFxsnmpTfF>

**ATTENTION** : Indiquer votre **nom** et **prénom** dans le nom du fichier, sinon je ne pourrais pas savoir qui a fait quoi (et vous auriez 0 comme note du coup... )

## A FAIRE

A partir du résultat du TP sur Tableau, disponible via [ce fichier](Résultat TP.twbx), réaliser les *feuilles* suivantes :

- Le nuage de points entre le nombre moyen de documents produits par an et le nombre moyen de citations par an, pour chaque pays, avec
    - le nom de chaque pays indiqué sur le graphique
    - une couleur (entre du vert pour le 1er et du rouge pour le dernier) par pays en fonction de son rang médian
    - une taille en fonction du *H-index* moyen
    - deux lignes de références au niveau des moyennes de chaque variable
    - des axes logarithmiques
- Une représentation graphique de l'évolution des rangs des pays, uniquement sur les 10 premiers rangs, avec le pays en 1er en haut, avec
    - une couleur par pays
    - le nom de chaque pays sur le graphique
- Une carte des pays dont le *H-index* moyen est supérieur à une valeur choisie par l'utilisateur, avec
    - valeurs dans le domaine des valeurs possibles pour cet indice,
    - la couleur des pays dépendante de la valeur de l'indice, avec une échelle de couleur fixe
- Une carte des pays représentant le TOP réalisé plus haut avec
    - une sélection des pays identique à celle du TOP
    - idem pour l'année
    - une couleur dépendante du nombre de documents produits

De plus, réaliser :

- Un *dashboard* intégrant le TOP et la dernière carte, avec
    - le contrôle du nombre de pays, sous forme de *radio button* (bouton rond avec sélection unique)
    - le contrôle de l'année, sous forme de *slider*
- Une *story* regroupant tous ces éléments de manière cohérente


