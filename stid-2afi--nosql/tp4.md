# TP2 : Connexion Python et MongoDB

Le but de ce TP est de voir la *traduction* des commandes MongoDB dans Python.

## Accès à MongoDB dans Python

Nous allons utiliser la librairie `pymongo`. Pour l'utiliser (après l'avoir installée), on l'importe classiquement comme ci-dessous.

```python
import pymongo
```

### Pointeur vers la collection

La première opération est de créer une connexion entre python et MongoDB en utilisant la fonction `MongoClient()`. Celle-ci prend en paramètre l'adresse du serveur. S'il n'y a rien, elle se connecte en local (ce qui est notre cas normalement).

```python
m = pymongo.MongoClient()
```

Par le biais de l'objet ainsi créé (`m`), on a accès à la liste des bases de données présentes, avec la fonction `list_database_name()`.

```python
m.list_database_names()
```

Nous allons utiliser la base `test`. Pour choisir la base sur laquelle vous voulez travailler, il faut créer un connecteur directement à cette base.

```python
db = m.test
```

L'objet `db` est doté de différentes fonctions, comme dans la console MongoDB. Pour voir la liste des collections présentes, on utilise la fonction `list_collection_names()`.

```python
db.list_collection_names()
```

Idéalement, vous devriez voir apparaître la collection `restaurants`.

### Dénombrement

Il existe la fonction `count()` qui compte directement le nombre de document. Dans le cas de données trop importantes, il est conseillé d'utiliser une version estimant ce nombre et beaucoup plus rapide dans l'exécution.

```python
db.restaurants.count_documents()
db.restaurants.estimated_document_count()
db.restaurants.count({ cuisine: "French" })
```

### Valeurs distinctes 

Il existe la même fonction, avec les mêmes possibilités.

```python
db.restaurants.distinct("borough")
```

### Récupération de données avec `find()` et `find_one()`

Ces deux fonctions permettent donc de récupérer tout ou partie des documents :

- `find()` : récupération des documents selon un critère de recherche et un critère de projection
- `find_one()` : idem mais ne retournant que le premier document obtenu

```python
db.restaurants.find_one()
```

Comme vous pouvez le voir, l'affichage de ce document est assez peu lisible. Il existe le module `pprint` qui permet d'afficher correctement les dictionnaires en `python`.

```python
import pprint
pprint.pprint(db.restaurants.find_one())
```

Pour la suite, nous allons créer une petite fonction affichant proprement le résultat d'une requête sur Mongo. La tranformation en liste est nécessaire.

```python
def affiche(res):
    pprint.pprint(list(res))
```

Et voici comment utiliser cette fonction.

```python
res = db.restaurants.find({ cuisine: "French" }, { "_id": 0, "name": 1, "borough": 1 })
affiche(res)
```

On peut aussi utiliser la fonction d'affichage directement, sans passer par une variable.

```python
affiche(db.restaurants.find({ cuisine: "French" }, { "_id": 0, "name": 1, "borough": 1 }))
```

Les critères de restriction et projection s'écrivent strictement de la même maière que dans la console MongoDB, à l'exception des mots-clés (s'écrivant `$motclé`), qui doivent être entre quotes (simple ou double) en `python`.


**A RAJOUTER** : Tri, limite


### Agrégats

Bien évidemment, on peut faire des calculs d'agrégats dans Mongo. Nous allons le voir ici, en l'interrogeant depuis `python` mais la syntaxe est la même dans la console Mongo.

```python
res = db.restaurants.aggregate([ 
    { "$group": { "_id": "Total", "nb": { "$sum": 1 }}}
])
affiche(res)
```

```python
res = db.restaurants.aggregate([ 
    { "$match": { "Seances": { "$size": 2 } }},
    { "$limit": 5 },
    { "$project": { "Seances": 1 }},
    { "$group": { "_id": "$Seances.Jour", "nb": { "$sum": 1 }}}
])
affiche(res)
```

## A faire

Lister les informations du restaurant “Cafe Henri”
Lister tous les restaurants de la chaîne “Bareburger” (rue, quartier)
Lister les restaurants n’ayant pas de quartier connu (“Missing”)

Lister les restaurants ayant eu un score de 0
Lister les restaurants ayant eu un score entre 0 et 10 (inclus)

Lister les restaurants qui ont le terme “Cafe” dans leur nom
Lister les restaurants faisant de la cuisine de type “Pizza” dans “Brooklyn”


Quelles sont les 10 plus grandes chaines de restaurants (nom identique) ?
Lister par quartier le nombre de restaurants et le score moyen
Donner le Top 5 et le Flop 5 des types de cuisine, en terme de nombre de restaurants
Donner les dates de début et de fin des évaluations
Quels sont les 10 restaurants (nom, quartier, addresse et score) avec le plus petit score moyen ?
Quels sont les restaurants (nom, quartier et addresse) avec uniquement des grades “A” ?
Compter le nombre d’évaluation par jour de la semaine




