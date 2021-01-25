# DU ABD - R et NoSQL

Dans ce document est l'utilisation du package [`mongolite`](https://jeroen.github.io/mongolite/) permettant la connection à une base de données [MongoDB](https://www.mongodb.com/fr).

## Utilisation avec `R`

On peut interroger une base de données de ce type via le package `mongolite` dans `R`. Dans la suite, nous allons nous connecter sur un serveur distant, et travailler pour l'exemple sur une base des restaurants New-Yorkais.

```{r}
library(mongolite)
USER = "user"
PASS = "user"
HOST = "cluster0.ougec.mongodb.net"

# Using plain-text
URI = sprintf("mongodb+srv://%s:%s@%s/", USER, PASS, HOST)

m = mongo(
  collection = "restaurants", 
  db = "test", 
  url = URI)
```

Le premier document est présenté ci-dessous. La base contient les informations de plus de 25000 restaurants new-yorkais (base de test fournie par [Mongo](https://docs.mongodb.com/getting-started/shell/import-data/)).

```
{
        "_id" : ObjectId("58ac16d1a251358ee4ee87de"),
        "address" : {
                "building" : "469",
                "coord" : [
                        -73.961704,
                        40.662942
                ],
                "street" : "Flatbush Avenue",
                "zipcode" : "11225"
        },
        "borough" : "Brooklyn",
        "cuisine" : "Hamburgers",
        "grades" : [
                {
                        "date" : ISODate("2014-12-30T00:00:00Z"),
                        "grade" : "A",
                        "score" : 8
                },
                {
                        "date" : ISODate("2014-07-01T00:00:00Z"),
                        "grade" : "B",
                        "score" : 23
                },
                {
                        "date" : ISODate("2013-04-30T00:00:00Z"),
                        "grade" : "A",
                        "score" : 12
                },
                {
                        "date" : ISODate("2012-05-08T00:00:00Z"),
                        "grade" : "A",
                        "score" : 12
                }
        ],
        "name" : "Wendy'S",
        "restaurant_id" : "30112340"
}
```

### Document dans `R`

`R` ne gérant pas nativement les données `JSON`, les documents sont traduits, pour la librairie `mongolite`, en `data.frame`. Pour récupérer le premier document, nous utilisons la fonction `find()` de l'objet créé `m`.

```{r}
d = m$find(limit = 1)
d
class(d)
```

Les objets `address` et `grades` sont particuliers, comme on peut le voir dans le `JSON`. Le premier est une liste, et le deuxième est un tableau. Voila leur classe en `R`.

```{r}
class(d$address)
d$address
class(d$grades)
d$grades
```

On peut aussi voir la liste des valeurs distinctes d'un attribut, avec la fonction `distinct()`.

```{r}
m$distinct("borough")
```


### Restriction et Projection

La fonction `find()` de l'objet `m` permet de retourner tous les documents. On peut se limiter à un certain nombre de documents avec l'option `limit`, comme précédemment. 

Pour faire une *restriction* sur la valeur d'un attribut, il faut utiliser l'option `query`, avec un formalisme particulier. Il faut écrire au format `JSON` dans une chaîne, avec pour les champs à comparer leur nom suivi de la valeur (pour l'égalité) ou d'un objet complexe pour les autres tests (infériorité, supériorité, présence dans une liste).

Pour une *projection*, c'est l'option `fields` à renseigner. On écrit au format `JSON`, avec la valeur `1` pour les champs qu'on souhaite avoir en retour. Par défaut, l'identifiant (`_id`) est toujours présent, mais on peut le supprimer en indiquant `0`.

Dans cet exemple, on recherche le document dont l'attribut `"name"` est égal à `"Shake Shack"`, et on affiche uniquement les attributs `"street"` et `"borough"`. Dans la deuxième expression, on supprime l'affichage de l'identifiant interne à *MongoDB*.

```{r}
m$find(query = '{"name": "Shake Shack"}', 
       fields = '{"address.street": 1, "borough": 1}')
m$find(query = '{"name": "Shake Shack"}', 
       fields = '{"_id": 0, "address.street": 1, "borough": 1}')
```

Ici, on recherche les 10 premiers restaurants du quartier *Queens*, avec une note A et un score supérieure à . Et on affiche le nom et la rue du restaurant. Remarquez l'affichage des scores.

```{r}
m$find(query = '{"borough": "Queens", "grades.score": { "$gte":  50}}',
       fields = '{"_id": 0, "name": 1, "grades.score": 1, "address.street": 1}',
       limit = 10)
```

On veut chercher les restaurants *Shake Shack* dans différents quartiers (*Queens* et *Brooklyn*).

```{r}
m$find(query = '{"name": "Shake Shack", "borough": {"$in": ["Queens", "Brooklyn"]}}', 
       fields = '{"_id": 0, "address.street": 1, "borough": 1}')
```

Il est aussi posible de trier les documents retournés, via l'option `sort`. Toujours en `JSON`, on indique `1` pour un tri croissant et `-1` pour un tri décroissant.

```{r}
m$find(query = '{"borough": "Queens", "grades.score": { "$gte":  50}}',
       fields = '{"_id": 0, "name": 1, "address.street": 1}',
       sort = '{"address.street": -1, "name": 1}',
       limit = 10)
```

#### Itération

Il est possible de définir un curseur (de même type que PL/SQL par exemple), qui va itérer sur la liste de résultats (celle-ci sera stocké sur le serveur). Cela permet de récupérer les documents un par un, ce qui est judicieux en cas de gros volume. De plus, ceux-ci sont récupérés au format `list` pure, ce qui peut simplifier la manipulation en cas de données fortement imbriquées.

```{r}
cursor = m$iterate(
  query = '{"borough": "Queens", "grades.score": { "$gte":  50}}',
  fields = '{"_id": 0, "name": 1, "address.street": 1}',
  sort = '{"address.street": -1, "name": 1}',
  limit = 10)
while(!is.null(doc <- cursor$one())){
  cat(sprintf("%s (%s)\n", doc$name, doc$`address`$`street`))
}
```

Plutôt que d'avoir les documents un par un, il est ausi possible de les avoir par paquets avec la fonction `batch(n)` sur le curseur (`n` étant donc le nombre de documents renvoyés).

### Agrégat

#### Dénombrement

On peut déjà faire un dénombrement avec la fonction `count()` de l'objet `m`. Sans option, on obtient le nombre de documents de la collection. On peut aussi ajouter une restriction pour avoir le nombre de documents respectant ces conditions. Les requêtes s'écrivent de la même manière que pour la fonction `find()`.

```{r}
m$count()
m$count(query = '{"name": "Shake Shack"}')
m$count(query = '{"borough": "Queens"}')
```

#### Autre

Il existe la fonction `aggregate()` pour tous les calculs d'agrégat (et même plus). Il faut passer dans le paramètre `pipeline` un tableau d'actions, pouvant contenir les éléments suivants  :

- `$project` : redéfinition des documents (si nécessaire)
- `$match` : restriction sur les documents à utiliser
- `$group` : regroupements et calculs à effectuer
- `$sort` : tri sur les agrégats
- `$unwind` : découpage de tableaux
- ...

```{r}
m$aggregate(pipeline = '[
    {"$group": {"_id": "Total", "NbRestos": {"$sum": 1}}}
]')
m$aggregate(pipeline = '[
    {"$group": {"_id": "$borough", "NbRestos": {"$sum": 1}}}
]')
```

En plus de la somme, il  est bien évidemment possible de faire d'autres calculs statistiques de base (moyenne, minimum, maximum) comme nous le verrons par la suite.

Si on veut faire des calculs sur les évaluations, il est nécessaire d'utiliser l'opération `$unwind`. Celle-ci permet de dupliquer les lignes de chaque document, avec chaque valeur du tableau indiqué. Voici son application sur le premier document.

```{r}
m$aggregate('[ { "$limit": 1 } ]')
m$aggregate('[
    { "$limit": 1 },
    { "$unwind": "$grades" }
]')
```

Du coup, pour faire le calcul des notes moyennes des restaurants du *Queens*, on exécute le code suivant.

```{r}
m$aggregate('[
    { "$match": { "borough": "Queens" }},
    { "$unwind": "$grades" },
    { "$group": { "_id": "null", "score": { "$avg": "$grades.score" }}}
]')
```

Il est bien évidemment possible de faire ce calcul par quartier et de les trier selon les notes obtenues (dans l'ordre décroissant).

```{r}
m$aggregate('[
    { "$unwind": "$grades" },
    { "$group": { "_id": "$borough", "score": { "$avg": "$grades.score" }}},
    { "$sort": { "score": -1}}
]')
```

### Jointure entre deux collections

Bien que dans l'esprit NoSQL, il est plutôt déconseillé de faire appel aux jointures, celles-ci sont parfois incontournables. Il est ainsi possible de réaliser une jointure entre deux collections, dans un aggrégat, avec l'opérateur `$lookup`.

Nous disposons aussi d'une collection de documents nous indiquant l'étendue des notes prévues pour chaque score A, B et C.

```{r}
g = mongo(db = "du_abd",
          collection = "grades")
g$find()
```

Si nous souhaitons chercher les restaurants ayant un score en-dehors de ce qui est attendu, nous pouvons nous baser sur le code ci-dessous (on se limite ici à 10 restaurants).

```{r}
m$aggregate('[
  { "$limit": 10 },
  {"$project": { "_id": 0, "name": 1, "grades": { "$slice": [ "$grades", -1] }}},
  { "$lookup": {
    "from": "grades",
    "localField": "grades.grade",
    "foreignField": "grade",
    "as": "info"
  }}
]')
```


### Map-Reduce

Le paradigme **Map-Reduce** permet de décomposer une tâche en deux étapes :

1. **Map** : application d'un algorithme sur chaque document, celui-ci renvoyant un résultat ou une série de résultat
2. **Reduce** : synthèse des résultats renvoyés dans l'étape précédente selon certains critères

Exemple classique : *décompte des mots présents dans un ensemble de texte*

- *Map* : pour chaque texte, à chaque mot rencontré, on créé un couple `<mot, 1>` (un document = beaucoup de résultats générés)
- *Reduce* : pour chaque mot, on fait la somme des valeurs pour obtenir le nombre de fois où chaque mot apparaît dans l'ensemble des textes à disposition

On utilise la fonction `mapreduce()` de `m` pour appliquer l'algorithme Map-Reduce sur les documents de la collection, avec les paramètres suivants :

- `map` : fonction **`JavaScript`**
    - aucun paramètre
    - `emit(key, value)` pour créer un couple résultat
- `reduce` : fonction **`JavaScript`**
    - deux paramètres : `key` et `values` (tableau des valeurs créés à l'étape précédente)
    - `return result` pour renvoyer le résultat
- `out` : collection éventuelle dans laquelle stocker les résultats dans *MongoDB*
- ...

Dans la fonction concernant l'étape *Map*, on utilise l'objet `this` pour accéder aux attributs du document. Le langage utilisé est le **`JavaScript`**.

Dans l'exemple ci-dessous, nous calculons pour chaque quartier le nombre de restaurants.

```{r}
m$mapreduce(
    map = 'function() { emit(this.borough, 1)}',
    reduce = 'function(cont, nb) { return Array.sum(nb) }'
)
```

Il est préférable d'utiliser ce paradigme pour réaliser des calculs impossibles à faire avec la fonction `aggregate()`. Dans les autres cas, il est préférable d'utiliser le calcul d'agrégat, plus rapide. Dans la comparaison ci-dessous, c'est bien le temps écoulé qui indique que le calcul est plus long avec `mapreduce()`.

```{r}
# Map-Reduce
system.time({
  m$mapreduce(
    map = 'function() { emit(this.borough, 1)}',
    reduce = 'function(cont, nb) { return Array.sum(nb) }'
  )
})
# Agrégat
system.time({
  m$aggregate('[ { "$group": { "_id": "$borough", "nb": { "$sum": 1}}}]')
})
```


## Un peu de cartographie avec `leaflet`

Dans un premier temps, nous allons récupérer les longitudes et latitudes des restaurants ci-desssous.

```{r}
restos.coord = m$aggregate(
'[
    { "$project": { 
        "name": 1, "borough": 1, 
        "lng": { "$arrayElemAt": ["$address.coord", 0]}, 
        "lat": { "$arrayElemAt": ["$address.coord", 1]} 
    }}
]')
head(restos.coord)
```

Si on regarde les coordonnées obtenues, on remarque rapidement qu'il y a des *outliers* (les restaurants sont à New-York normalement).

```{r}
library(tidyverse)
restos.coord %>%
  select(name, lng, lat) %>%
  gather(var, val, -name) %>%
  group_by(var) %>%
  summarise(
    min = min(val, na.rm = T),
    max = max(val, na.rm = T)
  )
```

Ce que l'on peut montrer grâce à la librairie [`leaflet`](https://rstudio.github.io/leaflet). Nous allons afficher les différents restaurants sur la carte du monde.

```{r}
library(leaflet)

leaflet(restos.coord) %>%
  addTiles() %>%
  addCircles(lng = ~lng, lat = ~lat)
```

En se centrant sur la ville de New-York, et en ajoutant une couleur en fonction du quartier, on visualise mieux les restaurants.

```{r}
pal = colorFactor("Accent", restos.coord$borough)
leaflet(restos.coord) %>%
  addProviderTiles(providers$CartoDB.Positron) %>%
  setView(lng  = -73.9,
          lat  =  40.7,
          zoom =  10) %>%
  addCircles(lng = ~lng, lat = ~lat, color = ~pal(borough)) %>%
  addLegend(pal = pal, values = ~borough, opacity = 1, 
            title = "Quartier")
```


## A faire


### Rendu

Envoyez votre fichier (script `R` ou markdown `Rmd` - avec votre nom dans le nom du fichier) par mail à **francois-xavier.jollois@u-paris.fr**.


### Restaurants 

1. Lister tous les restaurants de la chaîne "Bareburger" (rue, quartier)
1. Lister les trois chaînes de restaurant les plus présentes
1. Lister les 10 restaurants les moins bien notés (note moyenne la plus haute)
1. Lister par quartier le nombre de restaurants, le score moyen et le pourcentage moyen d'évaluation A
1. Afficher les restaurants sur une carte en mettant une couleur en fonction de la note moyenne des restaurants

### Horodateurs parisien

Nous allons découvrir dans ce TP les [données utilisées](https://opendata.paris.fr/explore/dataset/horodateurs-transactions-de-paiement/) dans le projet à rendre, qui sont l'ensemble des **transactions sur les horodateurs** dans la ville de **Paris** sur l'année **2014**. Celles-ci proviennent du site [Open Data Paris](https://opendata.paris.fr/), répertoire des données ouvertes de la ville de Paris. Elles sont stockées sur le serveur MongoDB déjà utilisé, dans la base horodateurs.

Elle contient trois collections importantes :

- `transactions` : ensemble des paiements
- `transactions_small` : 1% des paiements (à utiliser avant de lancer sur un calcul sur `transactions`)
- `mobiliers` : liste de tous les horodateurs

1. Lister les informations du premier mobilier
1. Donner le nombre de mobiliers
1. Lister les informations de la première transaction
1. Donner le nombre de transactions
1. Lister les informations du mobilier `1234` (cf `objectid`)
1. Donner le nombre de mobiliers pour chaque arrondissement (`arrondt`)
1. Croiser le régime (`regime`) et les arrondissements pour voir s'il y a des différences notables (idéalement en réalisant un graphique avec `ggplot`)
1. Donner la distribution des montants payés (`montant carte`) et des durées payées (`durée payée (h)`) des transactions
1. Représenter le nombre de transactions par arrondissement (la jointure se faire entre `horodateur` dans `mobiliers` et `numhoro` dans `transactions`)
1. Représenter chaque mobilier sur la carte de Paris, en ajoutant une couleur en fonction du nombre de transactions réalisées durant l'année

