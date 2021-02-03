# TP3 : Récapitulatif

## Données

Dans ce TP, nous allons utiliser les données [world.json](world.json), recensant les pays du monde (en l'état à la fin du siècle dernier). Pour pouvoir les utiliser, vous devez réaliser les étapes suivantes :

1. Télécharger le fichier <world.json>
1. Dans *Compass*, créer une base de données `test` et une collection `world`
1. Importer les données dans cette collection
1. Vérifier que tout est ok en lancant le shell
    - vous devriez avoir 239 documents

Voici une description des informations contenues dans les documents. **Tous les pays n'ont pas forcément tous les champs renseignés**.

- `Code`: code du pays en 3 lettres,
- `Name`: nom du pays,
- `Continent`: continent,
- `Region`: région (au sens partie d'un continent),
- `SurfaceArea`: superficie,
- `IndepYear`: année d'indépendance (si absent : pays dépendant d'un autre),
- `Population`: population totale,
- `LifeExpectancy`: espérance de vie,
- `GNP`: PIB,
- `GNPOld`: PIB ancien,
- `LocalName`: nom dans la langue du pays,
- `GovernmentForm`: type de gouvernement,
- `HeadOfState`: personnage à la tête de l'état,
- `Code2`: code du pays en 2 lettres,
- `Cities`: tableau décrivant les villes du pays connues dans la base
    - `Name`: nom de la capitale,
    - `District`: province/région,
    - `Population`: population de la ville,
    - `Capital` : `true` si c'est la capitale
- `Languages`: tableaux de langues dans le pays
    - `Language`: nom de la langue, 
    - `IsOfficial`: `true` si c'est une langue officielle (il peut y en avoir plusieurs)
    - `Percentage`: taux d'habitants du pays parlant cette langue,

## Demandes

1. Déterminer le nombre exact de pays
1. Lister les différents continents 
1. Lister les informations de la France
1. Lister les pays du continent européen, ayant une population inférieure à 100000 habitants 
1. Lister les pays indépendant du continent océanique
1. Quel est le plus gros continent en terme de surface ? (un seul continent affiché à la fin)
1. Donner par continents le nombre de pays, la population totale et en *bonus* le nombre de pays indépendant
1. Donner la population totale des villes de France 
1. Donner la capitale (uniquement nom de la ville et population) de France
1. Quelles sont les langues parlées dans plus de 15 pays ?
1. Calculer pour chaque pays le nombre de villes (pour les pays ayant au moins 100 villes), en les triant par ordre décroissant du nombre de villes
1. Lister les 10 villes les plus habitées, ainsi que leur pays, dans l'ordre décroissant de la population
1. Lister les pays pour lesquels le français est une langue officielle 
1. Lister les 5 pays avec le plus de langues parlées
1. Lister les pays pour lesquels la somme des populations des villes est supérieure à la population du pays 
    - ceci est probablement du à une erreur dans la base
    