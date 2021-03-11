# Installation et configuration Mongo

## Installation

A faire pour pouvoir utiliser l'outil sur votre ordinateur :

### Windows

- Installer [MongoDB](https://www.mongodb.com/try/download/community) en version Community (gratuite)
    - l'outil n'est pas très gourmand en espace normalement
- Installer l'outil [Compass](https://www.mongodb.com/try/download/compass)
    - idem, assez petit
- Installer le [shell](https://www.mongodb.com/try/download/shell)
    - c'est un zip à décompresser
    - vous pouvez placer l'exécutable ou vous le souhaitez (dans le répertoire de ce cours par exemple)

### Mac

- Installer [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) en version Community (gratuite)
    - vous devez suivre les opérations
    - pensez à lancer le service (comme indiqué à la fin)
    - l'outil n'est pas très gourmand en espace normalement
- Installer l'outil [Compass](https://www.mongodb.com/try/download/compass)
    - idem, assez petit
- Pour accéder au shell, vous devez lancer un terminal de commande et taper `mongo` pour l'obtenir



## Intégration de données de type `JSON`

### Création d'une base et d'une collection

Nous allons ici créer une première base de données, que l'on nommera `test`, contenant une seule collection pour le moment, nommée `restaurants`.

1. Ouvrir Compass
1. Cliquer directement sur *Connect* (votre serveur étant local, il n'y a pas besoin de le spécifier)
    - Vous devriez voir 3 bases de données déjà existantes : `admin`, `config` et `local`
1. Cliquer sur *CREATE DATABASE* affiché en haut
1. Il faut maintenant nommer la nouvelle base de données, et la collection dans laquelle nous allons mettre les données :
    - *Database Name* : `test`
    - *Collection Name*: `restaurants`
1. Cliquer maintenant sur *CREATE DATABASE* 
1. Vous devriez voir apparaître la base `test` à gauche (et la collection `restaurants` lorsque vous cliquez sur la petite flèche à droite de `test`)

Lorsque vous cliquez sur la collection, dans la base, vous voyez le détail de son contenu. Pour le moment, notre collection `restaurants` est vide. Il n'y a donc rien. Il est possible d'importer des documents directement.

### Importation des données

Nous allons importer maintenant les données dans notre collection ainsi créée. Vous devez avoir téléchargé le [fichier `restaurants.json`](https://fxjollois.github.io/donnees/restaurants.json) <restaurants.json> (11.9 Mo - cela peut prendre un peu de temps).

Une fois téléchargé, suivez la procédure suivante pour l'ajouter dans Mongo :

1. Cliquer sur `restaurants` pour voir le contenu de la collection (vide donc pour le moment)
1. Cliquer sur *ADD DATA* en haut et choisissez *Import File* (ou cliquer sur *Import data* directement)
1. Sélectionner le fichier téléchargé, et choisir aussi *JSON*
1. Cliquer sur *IMPORT*
1. Une fois l'opération terminé (25359 documents ajoutés), cliquer sur *DONE*

Votre première base est maitenant créée avec une collection de 25359 restaurants donc.

### Connexion à Mongo via le shell

Nous allons maintenant vérifier que l'opération s'est bien déroulé et qu'on peut accéder à ces données dans le terminal Mongo. 

1. Lancer le shell Mongo
1. Taper la commande `show dbs` pour afficher les bases de données existantes
    - Vous devriez donc voir 4 bases (et leur taille)
1. Pour utiliser la base `test`, taper la commande `use test`
1. Taper la commande `show collections` pour voir les collections dans ces bases
    - Il ne doit y en avoir qu'une seule donc
1. Pour voir le nombre de documents de cette collection, taper la commande `db.restaurants.count()`

Vous devriez donc avoir un résultat comme ci-dessous. 

```
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test   0.004GB
> use test
switched to db test
> show collections
restaurants
> db.restaurants.count()
25359
```