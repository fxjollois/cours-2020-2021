# TP4 : Intéragir avec MongoDB dans R

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

Il existe la même fonction `count()`, qui compte directement le nombre de document. Dans le cas où l'on veut compter les documents qui respectent une certaine condition, nous utilisons le paramètre `query`. Comme vous pouvez le voir dans les exemples ci-dessous, il est nécessaire de passer la requête en `JSON`, dans une chaîne de caractères.

- Tous les restaurants (aucune contrainte sur les documents)

```r
m$count()
```

- Restaurants de *Brooklyn* (contrainte dans une chaîne de caractères - **attention** donc à l'usage des `"`)

```r
m$count(query = '{ "borough": "Brooklyn" }')
```

### Valeurs distinctes 

Il existe la même fonction `distinct()`, avec les mêmes possibilités. Le paramètre `key` indique pour quel champs nous souhaitons avoir les valeurs distinctes. On peut aussi se restreindre à un sous-ensemble de documents respectant une contrainte particulière indiquée dans le paramètre `query` (syntaxe identique à `count()`). 

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

### Récupération de données avec `find()`

Cette fonction est similaire à celle de Mongo, et permet donc de récupérer tout ou partie des documents, selon éventuellement un critère de restriction (dans le paramètre `query`) et un critère de projection (dans le paramètre `fields`). Pour n'avoir que le premier document, on utilise le paramètre `limit` (pas de fonction type `findOne()` donc). Pour le tri, on utilise le paramètre `sort`, avec la même syntaxe que dans Mongo. Voici quelques exemples :


- Restaurants *Shake Shack* (uniquement les attributs `"street"` et `"borough"`)

```r
m$find(query = '{ "name": "Shake Shack" }', 
       fields = '{ "address.street": 1, "borough": 1 }')
```

- Restaurants du Queens ayant une note supérieure à 50, mais trié par ordre décroissant de noms de rue, et ordre croissant de noms de restaurants (uniquement les 10 premiers).

```r
m$find(query = '{"borough": "Queens", "grades.score": { "$gt":  50}}',
       fields = '{"_id": 0, "name": 1, "address.street": 1}',
       sort = '{"address.street": -1, "name": 1}',
       limit = 10)
```


### Agrégats

Bien évidemment, on peut faire des calculs d'agrégats, avec la même fonction `aggregate()`, prenant en paramètre le pipeline en chaîne de caractères. 

- Pour faire le calcul des notes moyennes des restaurants du *Queens*, on exécute le code suivant

```r
m$aggregate('[
    { "$match": { "borough": "Queens" }},
    { "$unwind": "$grades" },
    { "$group": { "_id": "null", "score": { "$avg": "$grades.score" }}}
]')
```

## Difficultés potentielles

Lorsqu'on travaille avec MongoDB dans R, nous pouvons rencontrer des problèmes sur 2 points particuliers :

- La création de la chaîne de caractères contenant le JSON pour les paramètres comme `query` ou `pipeline` ;
- La récupération des données JSON dans un `data.frame`

### Création de JSON

Comme indiqué dans ci-dessus, les paramètres doivent être des chaînes de caractères contenant le JSON. On peut donc soit les écrire comme précédemment, directement. Mais lorsqu'on veut intégrer dedans une variable (comme par exemple un `input` d'une application Shiny), il faut créer automatiquement la chaîne de caractères.

Prenons l'exemple de la recherche du nombre de restaurants dans le Bronx :

```r
m$count(query = '{ "borough": "Bronx" }')
```

Imaginons maintenant que notre quartier est dans une variable `q` (on a donc `q = "Bronx"`). Il faut donc créer la chaîne passée en paramètre ci-dessus. Pour cela, nous avons plusieurs possibilités. Mais il faut surtout faire attention à bien avoir les guillemets (`"`) dans la chaîne.

#### Avec la fonction `paste()` (ou mieux `paste0()`)

Cette solution est la plus basique. Elle peut facilement être illisible si l'on doit intégrer beaucoup de variables dans la chaîne.

```r
c = paste0('{ "borough": "', q, '" }')
m$count(query = c)
```

#### Avec la fonction `sprintf()`

Cette fonction a l'avantage de rendre plus lisible la chaîne que l'on va construire. Elle prend 2 paramètres (ou plus) :

1. La chaîne à construire, avec des emplacements où intégrer les variables indiqués par `%x` (le `x` désignant le format)
    - `%s` : chaîne de caractères (`s` pour `string`) 
    - `%f` : nombre réel (`f` pour `float` - `%.2f` pour un arrondi à 2 décimales)
2. La ou les variables à intégrer dans la chaîne

Dans notre exemple, nous ferions comme ci-dessous.

```r
c = sprintf('{ "borough": "%s" }', q)
m$count(query = c)
```

#### Avec la fonction `toJSON()`

Cette fonction est fournie par la librairie `jsonlite`, et permet de construire un objet JSON à partir d'un objet R (très souvent une liste). Par défaut, les valeurs simples sont rangées dans un vecteur. On peut modifier ce comportement en mettant à `TRUE` le paramètre `auto_unbox` (ce qu'on va faire ici).

```r
l = list(borough = q)
c = toJSON(l, auto_unbox = T)
m$count(query = c)
```

Cette option est la plus versatile, car elle permet de gérer des créations de JSON très complexes, ce que ne permettent pas les autres options.

### Récupération des données

Comme indiqué plus haut, les fonctions de `mongolite` transforment automatiquement le JSON renvoyé en `data.frame`. Cela est globalement très pratique mais engendre des soucis lorsque les données sont complexes (*i.e.* dans des sous-champs et autres). 

Prenons les 5 premiers restaurants.

```r
df = m$find(limit = 5)
df
```

La colonne `grades` est une liste de `data.frames`.

```r
df$grades
```

La colonne `address` est elle un `data.frame` (presque) simple.

```r
df$address
```

En effet, la colonne `coord` de `address` est une liste de vecteurs.

```r
df$address$coord
```

En l'état, il n'est pas possible d'utiliser ces attributs directement.

#### Récupération des coordonnées

Pour obtenir ces coordonnées, nous pouvons faire de deux façons : séparément ou simultanément.

##### Récupération séparée 

On utilise la fonction `sapply()`, qui applique une fonction passée en deuxième paramètre à chaque élément de la liste passée en premier paramètre. Chaque fonction est ici définit directement (on parle alors de fonction anonyme). Celles-ci ne font que retourner le premier (ou le deuxième) élément du vecteur. L'intérêt de `sapply()` ici est qu'elle simplifie le résultat en une matrice, que l'on transpose ensuite (avec `t()`).

```r
lng = sapply(df$address$coord, function(c) { return (c[1]) })
lat = sapply(df$address$coord, function(c) { return (c[2]) })
plot(lng, lat)
```

On pourrait bien évidemment garder ces retours dans le `data.frame` plutôt que dans une variable.

```r
df$lng = sapply(df$address$coord, function(c) { return (c[1]) })
df$lat = sapply(df$address$coord, function(c) { return (c[2]) })
```

##### Récupération simultanée

```r
mat = t(sapply(df$address$coord, function(c) { return(list(lng = c[1], lat = c[2]))}))
plot(mat)
```

On peut aussi ajouter ces 2 colonnes au `data.frame`.

```r
df = cbind(df, mat)
```

#### Travail sur les grades

Pour travailler sur les grades, nous devons pouvoir récupérer pour chaque évaluation, toutes les informations du restaurant évalué. Ceci est assez complexe à faire en R. On va le faire en deux étapes :

1. Joindre les informations du restaurant à chaque évaluation
2. Regrouper les informations des différents restaurants dans un seul `data.frame`

##### Jointure entre grades et les autres informations du restaurant

On utilise ici la fonction `lapply()`, similaire à `sapply()` qui applique une fonction passée en deuxième paramètre à chaque élément de la liste passée en premier paramètre. Nous utilisons ici la liste `1, 2, 3, ...` (jusqu'au nombre de lignes du `data.frame` `df`).  La fonction passée en paramètre prend donc comme paramètre la position de l'élément qui nous intéressé. On récupère les évaluations (`df$grades[[i]]`) et les informations du restaurant (normalement juste `df[i,]`). Comme nous voulons joindre les deux (avec `cbind()`), il faut avoir le même nombre de lignes. Nous dupliquons donc la *i*ème ligne autant de fois qu'il y a de lignes dans `grades`. On supprime ensuite les évaluations (`grades`) dans `infos`. Et enfin, on les *colle* ensemble.

```r
liste = lapply(1:nrow(df), function (i) {
  grades = df$grades[[i]]
  infos = df[rep(i, nrow(grades)),]
  infos$grades = NULL
  cbind(infos, grades)
})
liste
```

##### Regroupement dans un seul `data.frame`

Nous utilisons ici la fonction `Reduce()`. Celle-ci prend en premier paramètre (**attention** changement par rapport à `lapply()`) une fonction indiquant comment regrouper 2 éléments entre eux, et en deuxième paramètre la liste à traiter. La fonction applique la fonction sur les deux premiers éléments, puis sur le résultat et le troisième élément, et ainsi de suite jusqu'à épuisement de la liste. A la fin, nous obtenons donc un seul élément. La fonction passée en paramètre ici est `rbind()`, qui *colle* deux `data.frames` l'un au-dessus de l'autre. Au final, nous avons bien un seul `data.frame`.

```r
df_grades = Reduce(rbind, liste)
df_grades
```

#### Conclusion sur la récupération des données

Nous avons vu ici qu'on pouvait traiter dans R les données obtenues, quelque soit le format. Pour autant, c'est fastidieux et parfois beaucoup plus compliqué. L'idéal est donc de penser à ce qu'on veut faire ensuite pour savoir comment récupérer les données. Et donc, **de faire des pré-traitements directement dans MongoDB**.

Pour récupérer proprement les coordonnées, on aurait pu faire comme ci-dessous.

```r
df_coord = m$aggregate('
[
  { "$limit": 5 }, 
  { "$addFields" : { 
    "lng": { "$arrayElemAt" : [ "$address.coord", 0 ] },
    "lat": { "$arrayElemAt" : [ "$address.coord", 1 ] } 
  } }
]')
df_coord
```

Par exemple, pour le travail sur les grades, nous aurions pu faire directement (avec toutefois le même comportement pour `grades` que pour `address`).

```r
df_grades = m$aggregate('[ {"$limit": 5}, {"$unwind": "$grades" }]')
df_grades
```

## A faire

Dans R, utiliser la connexion vers Mongo pour effectuer les demandes suivantes. Il faut faire en sorte que le maximum soit fait dans Mongo et pas dans R.

### Sur données `restaurants`

#### Au format `data.frame`

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

#### Graphique

1. Représenter graphiquement le nombre de restaurants par quartier
1. Représenter graphiquement le nombre d'évaluation par jour de la semaine
1. Représenter graphiquement le nombre de restaurants par type de cuisine
    - barres horizontales
    - triées dans l'ordre décroissant du nombre de restaurants
1. Représenter, par quartier, la distribution des scores en fonction du grade obtenu
1. Représenter les restaurants sur une carte (cf librairie [`ggmap`](https://github.com/dkahle/ggmap))


