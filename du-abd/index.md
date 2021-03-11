# Introduction à MongoDB (avec R)

- [Présentation de MongoDB](du-abd--slides.html)
- [Introduction à R et **MongoDB**](du-abd--r-mongodb)

## Pour travail à la maison

2 possibilités :

- Vous me déclarez votre adresse IP pour que je puisse vous autoriser à vous conncter au serveur MongoDB
- Vous installez les outils sur votre ordinateur (cf procédure ci-dessous)

### A faire pour pouvoir utiliser l'outil sur votre ordinateur

#### Windows

- Installer [MongoDB](https://www.mongodb.com/try/download/community) en version Community (gratuite)
    - l'outil n'est pas très gourmand en espace normalement
- Installer l'outil [Compass](https://www.mongodb.com/try/download/compass)
    - idem, assez petit
- Installer le [shell](https://www.mongodb.com/try/download/shell)
    - c'est un zip à décompresser
    - vous pouvez placer l'exécutable ou vous le souhaitez (dans le répertoire de ce cours par exemple)

#### Mac

- Installer [MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/) en version Community (gratuite)
    - vous devez suivre les opérations
        1. installer `brew` si ce n'est pas encore fait
        1. installer le serveur
        1. démarrer le serveur
    - pensez à lancer le service (comme indiqué à la fin)
    - l'outil n'est pas très gourmand en espace normalement
- Installer l'outil [Compass](https://www.mongodb.com/try/download/compass)
    - idem, assez petit
- Pour accéder au shell, vous devez lancer un terminal de commande et taper `mongo` pour l'obtenir 

### Chargement des données

#### Restaurants

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

Nous allons importer maintenant les données dans notre collection ainsi créée. Vous devez avoir téléchargé le [fichier `restaurants.json`](https://fxjollois.github.io/donnees/restaurants.json) (11.9 Mo - cela peut prendre un peu de temps).

Une fois téléchargé, suivez la procédure suivante pour l'ajouter dans Mongo :

1. Cliquer sur `restaurants` pour voir le contenu de la collection (vide donc pour le moment)
1. Cliquer sur *ADD DATA* en haut et choisissez *Import File* (ou cliquer sur *Import data* directement)
1. Sélectionner le fichier téléchargé, et choisir aussi *JSON*
1. Cliquer sur *IMPORT*
1. Une fois l'opération terminé (25359 documents ajoutés), cliquer sur *DONE*

Votre première base est maitenant créée avec une collection de 25359 restaurants donc.

#### AirBnB

vous devez faire de même avec les données [AirBnB](https://cloud.parisdescartes.fr/index.php/s/5q5eAHmCRMci6Bf) :

1. Les télécharger (**attention** : ~110 Mo)
1. Créer une collection `listingsAndReviews` (par exemple), dans la base de données `test` (par exemple)
1. Charger les données dans la collection
