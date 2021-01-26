
class: middle, center, inverse, title

# Introduction à MongoDB avec R
## FX Jollois

---

## NoSQL

**MongoDB** est une base de données NoSQL distribué de type *Document Store* ([site web](http://www.mongodb.com/)) 

Objectifs :

- Gérer de gros volumes
- Facilité de déploiement et d'utilisation
- Possibilité de faire des choses complexes tout de même

---

## Modèle des données

Principe de base : les données sont des `documents`

- Stocké en *Binary JSON* (`BSON`)
- Documents similaires rassemblés dans des `collections`
    - plusieurs collections possibles dans une base de données
- Pas de schéma des documents définis en amont
	- contrairement à un BD relationnel ou NoSQL de type *Column Store*
- Les documents peuvent n'avoir aucun point commun entre eux
- Un document contient (généralement) l'ensemble des informations
	- pas (ou très peu) de jointure à faire idéalement
- BD respectant **CP** (dans le théorème *CAP*)
	- propriétés ACID au niveau d'un document

---

## Point sur `JSON`

- `JavaScript Object Notation`, créé en 2005
- Format léger d'échange de données structurées (**littéral**)
- Schéma des données non connu (contenu dans les données)
- Basé sur deux notions :
	- collection de couples clé/valeur
	- liste de valeurs ordonnées
- Structures possibles :
	- objet (couples clé/valeur) : `{ "nom": "jollois", "prenom": "fx" }`
	- tableau (collection de valeurs) : `[ 1, 5, 10]`
	- une valeur dans un objet ou dans un tableau peut être elle-même un littéral
- Deux types atomiques (`string` et `number`) et trois constantes (`true`, `false`, `null`)

Validation possible du JSON sur [jsonlint.com/](http://jsonlint.com/)

---

### Exemple de `JSON`

```json
{
    "address": {
        "building": "469",
        "coord": [
            -73.9617,
            40.6629
        ],
        "street": "Flatbush Avenue",
        "zipcode": "11225"
    },
    "borough": "Brooklyn",
    "cuisine": "Hamburgers",
    "grades": [
        {
            "date": "2014-12-30 01:00:00",
            "grade": "A",
            "score": 8
        },
        {
            "date": "2014-07-01 02:00:00",
            "grade": "B",
            "score": 23
        }
    ],
    "name": "Wendy'S",
    "restaurant_id": "30112340"
}
```

---

## Compléments

`BSON` : extension de `JSON`

- Quelques types supplémentaires (identifiant spécifique, binaire, date, ...)
- Distinction entier et réel

**Schéma dynamique**

- Documents variant très fortement entre eux, même dans une même collection
- On parle de **self-describing documents**
- Ajout très facile d'un nouvel élément pour un document, même si cet élément est inexistant pour les autres
- Pas de `ALTER TABLE` ou de redesign de la base

---

## Langage d'interrogation

- Pas de SQL (bien évidemment), ni de langage proche
- Définition d'un langage propre
    - `find()` : pour tout ce qui est restriction et projection
    - `aggregate()` : pour tout ce qui est calcul de variable, d'aggrégats et de manipulations diverses
    - ...
- Langage JavaScript dans la console, permettant plus que les accès aux données
	- définition de variables
	- boucles
	- ...

---

## Utilisation avec `R`

Package [`mongolite`](https://jeroen.github.io/mongolite/) dans `R`

1. Création d'une connexion
    - si pas d'URL : en local
    - possibilité d'ajouter user et password à l'URL
1. Envoi des commandes via le connecteur : `m$fonction()`
1. Suppression de la connexion

```r
library(mongolite)
m = mongo(db = "nom_base", collection = "nom_collection", url = "url_connexion")
m$find(...)
...
m$disconnect()
```

---

## Point d'attention

Dans la suite, nous verrons que les instructions passées à Mongo en paramètre dans fonctions R sont écrites dans des chaînes de caractères 

- Format JSON imposé par l'interfaçage avec Mongo
- JSON mal géré par R


2 possibilités 

- JSON écrit en chaîne de caractères : peu lisible et difficulté à trouver l'erreur d'écriture
- Transformation d'une liste R en JSON avec le package [`jsonlite`](https://cran.r-project.org/web/packages/jsonlite/vignettes/json-aaquickstart.html) : lourd à écrire

---

## Fonctions principales

Voici les principales fonctions dont nous aurons besoin (récupération de données)

|Fonction | Action | 
|-|-|-|
| `m$count()` | Dénombrement | 
| `m$distinct()` | Valeurs possibles | 
| `m$find()` | Restriction et projection | 
| `m$iterate()`| Idem `find()` mais document par document |
| `m$aggregate()` | Beaucoup de choses |

Il y a bien évidemment d'autres fonctions dédiés à la gestion des bases et des données

---

## Sélection de documents

Pour sélectionner les documents, nous allons utiliser le paramètre `query` dans les fonctions précédentes (toutes sauf `aggregate()`)

- `'{}'` : tous les documents
- `'{ "champs": valeur }'` : documents ayant cette valeur pour ce champs
- `'{ condition1, condition2 }'` : documents remplissant la condition 1 **ET** la condition 2
- `"champs.sous_champs"` : permet d'accéder donc à un sous-champs d'un champs (que celui-ci soit un littéral ou un tableau)
- `'{ "champs": { "$opérateur": expression }}'` : utilisation d'opérateurs dans la recherche
    - `$in` : comparaison à un ensemble de valeurs
    - `$gt`, `$gte`, `$lt`, `$lte`, `$ne` : comparaison (resp. *greater than*, *greater than or equal*, *less than*, *less than or equal*, *not equal*)
    
---

## Sélection de champs à afficher ou non

Dans la fonction `find()` (ainsi que `iterate()`), pour choisir les champs à afficher, nous utilisons le paramètre `fields`

- sans précision, l'identifiant interne est toujours affiché (`_id`)
- `'{ "champs": 1 }'` : champs à afficher
- `'{ "champs": 0 }'` : champs à ne pas afficher
- Pas de mélange des 2 sauf pour l'identifiant interne à Mongo (`_id`)
    - `'{ "_id": 0, "champs": 1, ...}'`

---

## Tri et limite

Toujours dans les fonctions `find()` et `iterate()`, il est possible de faire le tri des documents, avec le paramètre `sort`

- `'{ "champs": 1 }'` : tri croissant
- `'{ "champs": -1 }'` : tri décroissant
- plusieurs critères de tri possibles (dans les 2 sens)

Dans ces fonctions, on peut aussi limiter l'exploration à une partie, avec les paramètres suivant :

- `limit` : restreint le nombre de résultats fournis
- `skip` : ne considère pas les *n* premiers documents

---

## Aggrégation

Cette fonction va prendre en paramètre un `pipeline` : tableau composé d'une suite d'opérations

| Fonction     | Opération |
|-|-|
| `$limit`     | restriction à un petit nombre de documents (très utiles pour tester son calcul) |
| `$sort`      | tri sur les documents |
| `$match`     | restriction sur les documents à utiliser |
| `$unwind`    | séparation d'un document en plusieurs sur la base d'un tableau |
| `$addFields` | ajout d'un champs dans les documents |
| `$project`   | redéfinition des documents |
| `$group`     | regroupements et calculs d'aggégrats |
| `$lookup`    | jointure avec une autre collection |
| ...          | |

---

## Syntaxe des opérations dans le `pipeline`

Les opérations se font dans l'ordre d'écriture, et le même opérateur peut donc apparaître plusieurs fois

- `$limit` : un entier
- `$sort` : identique à celle du paramètre `sort` de la fonction `find()`
- `$match` : identique à celle du paramètre `query` des autres fonctions
- `$unwind` : nom du tableau servant de base pour le découpage (précédé d'un `$`)
    - un document avec un tableau à *n* éléments deviendra *n* documents avec chacun un des éléments du tableau en lieu et place de celui-ci

---

## Syntaxe des opérations dans le `pipeline`

`$project` : redéfinition des documents

- `{ "champs" : 1 }` : conservation du champs (0 si suppression - idem que dans `fields`, pas de mélange sauf pour `_id`)
- `{ "champs": { "$opérateur" : expression }}` : permet de définir un nouveau champs
- `{ "nouveau_champs": "$ancien_champs" }` : renommage d'un champs
    
Quelques opérateurs utiles pour la projection (plus d'info [ici](https://docs.mongodb.com/manual/reference/operator/aggregation/))

- `$arrayElemAt` : élément d'un tableau
- `$first` et `$last` : premier ou dernier élément du tableau
- `$size` : taille d'un tableau
- `$substr` : sous-chaîne de caractères
- `$cond` : permet de faire une condition (genre de *if then else*)
- ...

---

## Syntaxe des opérations dans le `pipeline`

`$group` : calcul d'agrégats

- `_id` : déclaration du critère de regroupement
    - chaîne de caractères : pas de regroupement (tous les documents)
    - `$champs` : regroupement selon ce champs
    - `"{ "a1": "$champs1", ... }"` : regroupement multiple (avec modification des valeurs possible)
- Calculs d'agrégats à faire :
    - `$sum` : somme (soit de valeur fixe - 1 pour faire un décompte donc, soit d'un champs spécifique)
    - `$avg, $min, $max`
    - `$addToSet` : regroupement des valeurs distinctes d'un champs dans un tableau 
    - `$push` : aggrégation de champs dans un tableau


---

## Si calcul non faisable par Mongo

(ou résultat trop lourd pour le faire passer en une fois dans le réseau)

`iterate()` créé un curseur sur un ensemble de documents répondant à certains critères (idem à `find()`), mais que l'on va récupérer :

- un par un avec `curseur$one()`
- par blocs avec `curseur$batch()` (ou `json()` ou `page()`)
    - taille du bloc précisé en paramètre (1000 par défaut)

L'intérêt de la fonction `iterate()` est donc de réaliser une opération (a priori) non faisable dans Mongo, sans avoir à charger toutes les données
