# TP2 : Connexion Python et MongoDB

## Accès à MongoDB dans Python

Nous allons voir dans ce TP comment nous pouvons récupérer des données stockées dans une base MongoDB, par le biais de la librairie pymongo. Pour l'utiliser, on l'importe classiquement comme ci-dessous.

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

### Dénombrement

```python
db.restaurants.estimated_document_count()
```

### Valeurs distinctes 

```python
db.Sportifs.distinct("Sexe")
```

### Récupération de données avec `find()` et `find_one()`

```python
db.Sportifs.find_one()
```

```python
import pprint
pprint.pprint(db.Sportifs.find_one())
```

```python
def affiche(res):
    pprint.pprint(list(res))
```

Et voici comment utiliser cette fonction.

```python
res = db.Sportifs.find({ "Nom": "KERVADEC" }, { "_id": 0, "Nom": 1 })
affiche(res)
```


```python
affiche(db.Sportifs.find({ "Nom": "KERVADEC" }))
```

```python
affiche(db.Sportifs.find({ "Age": { "$gte": 32 } }, { "_id": 0, "Nom": 1, "Age": 1 }))
```

```python
res = db.Sportifs.find({ "Age": { "$gte": 32} }, { "_id": 0, "Nom": 1, "Age": 1 }).sort([ ("Age", -1), ("Nom", 1) ])
affiche(res)
```

```python
res = db.Sportifs \
    .find({ "Age": { "$gte": 32} }, { "_id": 0, "Nom": 1, "Age": 1 }) \
    .sort([ ("Age", -1), ("Nom", 1) ])
affiche(res)
```

```python
res = db.Sprotifs \
    .find({ 
        "Age": { "$gte": 32} 
        }, 
        { 
            "_id": 0, 
            "Nom": 1, 
            "Age": 1 
        }) \
    .sort([ 
        ("Age", -1), 
        ("Nom", 1) 
    ])
affiche(res)
```

### Agrégats

```python
res = db.Gymnases.aggregate([ 
    { "$group": { "_id": "Total", "nb": { "$sum": 1 }}}
])
affiche(res)
```

```python
res = db.Gymnases.aggregate([ 
    { "$match": { "Seances": { "$size": 2 } }},
    { "$limit": 5 },
    { "$project": { "Seances": 1 }},
    { "$group": { "_id": "$Seances.Jour", "nb": { "$sum": 1 }}}
])
affiche(res)
```


### Interaction avec `pandas`

```python
import pandas
```

```python
res = db.restaurants.find()
df = pandas.DataFrame(list(res))
df.head()
```

```python
df0 = df.loc[0,:]
df0.Sports
df0.Sports["Jouer"]
```





---

lecture AirBnB fichier json
import dans Mongo
relecture dans python à partir de Mongo

Nous allons travailler sur des données AirBnB. Celles-ci sont stockées sur le serveur Mongo dans la collection listingsAndReviews de la base sample_airbnb.

## A faire

### AirBnB

1. Créer la connexion à la collection dans python
1. Donner le nombre de logements
1. Lister les informations du logement “10545725” (cf _id)
1. Lister les différentes types de logements possibles cf (room_type)
1. Donner le nombre de logements par type
1. Représenter graphiquement la distribution des prix
1. Croiser numériquement et graphiquement le type et le prix (price)
1. Représenter la distribution du nombre d’avis (cf reviews - à calculer)
1. Croiser graphiquement le nombre d’avis et le prix, en ajoutant l’information du type de logement


