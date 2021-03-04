# TP4 : Connexion R et MongoDB

Le but de ce TP est de voir l'utilisation des commandes MongoDB dans R.

## Accès à MongoDB dans R

Nous allons utiliser la librairie `mongolite`. Pour l'utiliser (après l'avoir installée), on l'importe classiquement comme ci-dessous.

```r
library(mongolite)
```

### Connexion vers la collection

La première opération est de créer une connexion entre R et MongoDB en utilisant la fonction `mongo()`. Celle-ci prend en paramètre la base et la collection, plus si besoin l'adresse du serveur. S'elle n'y est pas, elle se connecte en local (ce qui est notre cas normalement).

```r
m = mongo(
  collection = "restaurants", 
  db = "test")
```

Par le biais de l'objet ainsi créé (`m`), on a accès aux différentes fonctions que l'on a vu dans Mongo (précisemment `count()`, `distinct()`, `find()` et `aggregate()`).

### Type des objets retournés

R ne gérant pas nativement les données `JSON`, les documents sont traduits, pour la librairie `mongolite`, en `data.frame`. Pour récupérer le premier document, nous utilisons la fonction `find()` de l'objet créé `m`.

```r
d = m$find(limit = 1)
d
class(d)
```

Les objets `address` et `grades` sont particuliers, comme on peut le voir dans le `JSON`. Le premier est une liste, et le deuxième est un tableau. Voila leur classe en R.

```r
class(d$address)
d$address
class(d$grades)
d$grades
```

### Dénombrement

Il existe la fonction `count()` qui compte directement le nombre de document. Dans le cas où l'on veut compter les documents qui respectent une certaine condition, nous utilisons le paramètre `query`. Comme vous pouvez le voir dans les exemples ci-dessous, il est nécessaire de passer la requête en `JSON`, dans une chaîne de caractères.

- Tous les restaurants

```r
m$count()
```

- Restaurants de *Brooklyn*

```r
m$count(query = '{ "borough": "Brooklyn" }')
```

- Restaurants de *Brooklyn* proposant de la cuisine française

```r
m$count(query = '{ "borough": "Brooklyn", "cuisine": "French" }')
```

- Restaurants de *Brooklyn* proposant de la cuisine française ou italienne

```r
m$count(query = '{ "borough": "Brooklyn", "cuisine": { "$in": ["French", "Italian"]} }')
```

- Idem mais écrit plus lisiblement

```r
m$count(
  query = '{ 
    "borough": "Brooklyn", 
    "cuisine": { "$in": ["French", "Italian"]}
  }'
)
```

- Restaurants situés sur *Franklin Street*
    - Notez l'accès au champs `street` du champs `address`

```r
m$count(
  query = '{ 
    "address.street": "Franklin Street"
  }'
)
```


- Restaurants ayant eu un score de 0

```r
m$count(
  query = '{ 
    "grades.score": 0
  }'
)
```

- Restaurants ayant eu un score inférieur à 5

```r
m$count(
  query = '{ 
    "grades.score": { "$lte": 5 }
  }'
)
```

### Valeurs distinctes 

Il existe la même fonction `distinct()`, avec les mêmes possibilités. On peut ainsi vouloir les valeurs distinctes présentes dans un sous-ensemble de documents (respectant une contrainte particulière). Voici quelques exemples :

- Quartier (`borough`), pour tous les restaurants

```r
m$distinct(key = "borough")
```

- Cuisine pour les restaurants de *Brooklyn*

```r
m$distinct(
  key = "cuisine",
  query = '{ "borough": "Brooklyn" }'
)
```

- Grade des restaurants de *Brooklyn*

```r
m$distinct(
  key = "grades.grade",
  query = '{ "borough": "Brooklyn" }'
)
```
### Récupération de données avec `find()`

Cette fonction permet donc de récupérer tout ou partie des documents, selon éventuellement un critère de restriction (dans le paramètre `query`) et un critère de projection (dans le paramètre `fields`). Pour n'avoir que le premier document, on utilise le paramètre `limit`). Pour le tri, on utilise le paramètre `sort`. Voici quelques exemples :


- Restaurants *Shake Shack* (uniquement les attributs `"street"` et `"borough"`)

```r
m$find(query = '{ "name": "Shake Shack" }', 
       fields = '{ "address.street": 1, "borough": 1 }')
```

- Idem sans l'identifiant interne

```r
m$find(query = '{ "name": "Shake Shack" }', 
       fields = '{ "_id": 0, "address.street": 1, "borough": 1 }')
```

- 10 premiers restaurants du quartier *Queens*, avec une note A et un score supérieur à 50 (on affiche le nom et la rue du restaurant
    - Remarquez l'affichage des scores dans `R`.

```r
m$find(query = '{"borough": "Queens", "grades.score": { "$gte":  50}}',
       fields = '{"_id": 0, "name": 1, "grades.score": 1, "address.street": 1}',
       limit = 10)
```

- Restaurants *Shake Shack* dans différents quartiers (*Queens* et *Brooklyn*)

```r
m$find(query = '{"name": "Shake Shack", "borough": {"$in": ["Queens", "Brooklyn"]}}', 
       fields = '{"_id": 0, "address.street": 1, "borough": 1}')
```

- Restaurants du Queens ayant une note supérieure à 50, mais trié par ordre décroissant de noms de rue, et ordre croissant de noms de restaurants

```r
m$find(query = '{"borough": "Queens", "grades.score": { "$gt":  50}}',
       fields = '{"_id": 0, "name": 1, "address.street": 1}',
       sort = '{"address.street": -1, "name": 1}')
```


### Agrégats

Bien évidemment, on peut faire des calculs d'agrégats, avec la fonction `aggregate()`, prenant en paramètre donc le pipeline en chaîne de caractères. Voici encore quelques exemples :

- Limite aux 5 premiers restaurants

```r
m$aggregate(pipeline = '[
    {"$limit": 10 }
]')
```

- Idem avec tri sur le nom du restaurant

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$sort": { "name": 1 }}
]')
```

- Idem en se restreignant à *Brooklyn*
    - Notez que nous obtenons uniquement 5 restaurants au final
    
```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$sort": { "name": 1 }},
    { "$match": { "borough": "Brooklyn" }}
]')
```

- Mêmes opérations mais avec la restriction en amont de la limite
    - Nous avons ici les 10 premiers restaurants de *Brooklyn* donc

```r
m$aggregate(pipeline = '[
    { "$match": { "borough": "Brooklyn" }},
    { "$limit": 10 },
    { "$sort": { "name": 1 }}
]')
```

- Séparation des 5 premiers restaurants sur la base des évaluations (`grades`)
    - Chaque ligne correspond maintenant a une évaluation pour un restaurant

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$unwind": "$grades" }
]')
```

- Idem précédemment, en se restreignant à celle ayant eu *B*

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$unwind": "$grades" },
    { "$match": { "grades.grade": "B" }}
]')
```

- Si on inverse les opérations `$unwind` et `$match`, le résultat est clairement différent

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$match": { "grades.grade": "B" }},
    { "$unwind": "$grades" }
]')
```

- On souhaite ici ne garder que le nom et le quartier des 10 premiers restaurants
    - Notez l'ordre (alphabétique) des variables, et pas celui de la déclaration
    
```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "name": 1, "borough": 1 } }
]')
```

- Ici, on supprime l'adresse et les évaluations 

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "address": 0, "grades": 0 } }
]')
```

- En plus du nom et du quartier, on récupère l'adresse mais dans un nouveau champs 

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "name": 1, "borough": 1 , "street": "$address.street"} }
]')
```

- On ajoute le nombre de visites pour chaque restaurant (donc la taille du tableau `grades`)

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "name": 1, "borough": 1, "nb_grades": { "$size": "$grades" } } }
]')
```

- On trie ce résultat par nombre de visites, et on affiche les 10 premiers
    - Notez qu'il y a des restaurants sans visite donc (pour lesquels `grades` est préent mais égal à `NULL`)
    - Dans l'idéal, ces restaurants ne devraient pas avoir de champs `grades`

```r
m$aggregate(pipeline = '[
    { "$project": { "name": 1, "borough": 1, "nb_grades": { "$size": "$grades" } } },
    { "$sort": { "nb_grades": 1 }},
    { "$limit": 10 }
]')
```

- On ne garde maintenant que le premier élément du tableau `grades` (indicé 0)

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "name": 1, "borough": 1, "grade": { "$arrayElemAt": [ "$grades", 0 ]} } }
]')
```

- On peut aussi faire des opérations sur les chaînes, tel que la mise en majuscule du nom

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { "nom": { "$toUpper": "$name" }, "borough": 1 } }
]')
```

- On peut aussi vouloir ajouter un champs, comme ici le nombre d'évaluations

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$addFields": { "nb_grades": { "$size": "$grades" } } }
]')
```

- On extrait ici les trois premières lettres du quartier

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$project": { 
        "nom": { "$toUpper": "$name" }, 
        "quartier": { "$substr": [ "$borough", 0, 3 ] } 
    } }
]')
```

- On fait de même, mais on met en majuscule et on note *BRX* pour le *Bronx*
    - on garde le quartier d'origine pour vérification ici

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$addFields": { "quartier": { "$toUpper": { "$substr": [ "$borough", 0, 3 ] } } }},
    { "$project": { 
        "nom": { "$toUpper": "$name" }, 
        "quartier": { "$cond": { "if": { "$eq": ["$borough", "Bronx"] }, "then": "BRX", "else": "$quartier" } },
        "borough": 1
    } }
]')
```

- On calcule ici le nombre total de restaurants

```r
m$aggregate(pipeline = '[
    {"$group": {"_id": "Total", "NbRestos": {"$sum": 1}}}
]')
```

- On fait de même, mais par quartier

```r
m$aggregate(pipeline = '[
    {"$group": {"_id": "$borough", "NbRestos": {"$sum": 1}}}
]')
```

- Pour faire le calcul des notes moyennes des restaurants du *Queens*, on exécute le code suivant

```r
m$aggregate('[
    { "$match": { "borough": "Queens" }},
    { "$unwind": "$grades" },
    { "$group": { "_id": "null", "score": { "$avg": "$grades.score" }}}
]')
```

-  Il est bien évidemment possible de faire ce calcul par quartier et de les trier selon les notes obtenues (dans l'ordre décroissant)

```r
m$aggregate('[
    { "$unwind": "$grades" },
    { "$group": { "_id": "$borough", "score": { "$avg": "$grades.score" }}},
    { "$sort": { "score": -1 }}
]')
```

- On peut aussi faire un regroupement par quartier et par rue (en ne prenant que la première évaluation - qui est la dernière en date a priori), pour afficher les 10 rues où on mange le plus sainement
    - Notez que le premier `$match` permet de supprimer les restaurants sans évaluations (ce qui engendrerait des moyennes = `NA`)

```r
m$aggregate(pipeline = '[
    { "$project": { 
        "borough": 1, "street": "$address.street", 
        "eval": { "$arrayElemAt": [ "$grades", 0 ]} 
    } },
    { "$match": { "eval": { "$exists": true } } },
    { "$match": { "eval.score": { "$gte": 0 } } },
    { "$group": { 
        "_id": { "quartier": "$borough", "rue": "$street" }, 
        "score": { "$avg": "$eval.score" }
    }},
    { "$sort": { "score": 1 }},
    { "$limit": 10 }
]')
```

- Pour comprendre la différence entre `$addToSet` et `$push`, on les applique sur les grades obtenus pour les 10 premiers restaurants
    - `$addToSet` : valeurs distinctes
    - `$push` : toutes les valeurs présentes

```r
m$aggregate(pipeline = '[
    { "$limit": 10 },
    { "$unwind": "$grades" },
    { "$group": { 
        "_id": "$name", 
        "avec_addToSet": { "$addToSet": "$grades.grade" },
        "avec_push": { "$push": "$grades.grade" }
    }}
]')
```

## A faire

Dans R

1. Lister les informations du restaurant “Cafe Henri”
1. Lister tous les restaurants de la chaîne “Bareburger” (rue, quartier)
1. Lister les restaurants n’ayant pas de quartier connu (“Missing”)
1. Lister les restaurants ayant eu un score de 0
1. Lister les restaurants ayant eu un score entre 0 et 10 (inclus)
1. Lister les restaurants qui ont le terme “Cafe” dans leur nom
1. Lister les restaurants faisant de la cuisine de type “Pizza” dans “Brooklyn”
1. Quelles sont les 10 plus grandes chaines de restaurants (nom identique) ?
1. Lister par quartier le nombre de restaurants et le score moyen
1. Donner le Top 5 et le Flop 5 des types de cuisine, en terme de nombre de restaurants
1. Donner les dates de début et de fin des évaluations
1. Quels sont les 10 restaurants (nom, quartier, addresse et score) avec le plus petit score moyen ?
1. Quels sont les restaurants (nom, quartier et addresse) avec uniquement des grades “A” ?
1. Compter le nombre d’évaluation par jour de la semaine




