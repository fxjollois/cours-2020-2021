# TP1 : Premiers pas sur Mongo

## Importation des données

> NB : Pour réaliser ce TP chez vous, vous devez avoir installé le serveur Mongo, ainsi que Compass et le Shell. Les instructions sont disponibles sur [cette page](index.md).

Nous allons importer ici une première collection dans une nouvelle base de données sous Mongo, avec l'outil Compass. Vous devez avoir téléchargé le [fichier `restaurants.json`](restaurants.json) <restaurants.json> (11.9 Mo - cela peut prendre un peu de temps).

Une fois téléchargé, suivez la procédure suivante pour l'ajouter dans Mongo :

1. Ouvrir Compass
1. Cliquer directement sur *Connect* (votre serveur étant local, il n'y a pas besoin de le spécifier)
    - Vous devriez voir 3 bases de données déjà existantes : `admin`, `config` et `local`
1. Cliquer sur le "+" situé en bas à gauche (lorsque la souris est dessus, vous devriez voir *CREATE DATABASE* affiché)
1. Il faut maintenant nommer la nouvelle base de données, et la collection dans laquelle nous allons mettre les données :
    - *Database Name* : `test`
    - *Collection Name*: `restaurants`
1. Cliquer maintenant sur *CREATE DATABASE* 
1. Vous devriez voir apparaître la base `test` à gauche (et la collection `restaurants` lorsque vous cliquez sur la petite flèche à droite de `test`)
1. Cliquer sur `restaurants` pour voir le contenu de la collection (vide donc pour le moment)
1. Cliquer sur *ADD DATA* et choisissez *Import File*
1. Sélectionner le fichier téléchargé, et choisir aussi *JSON*
1. Cliquer sur *IMPORT*
1. Une fois l'opération terminé (25359 documents ajoutés), cliquer sur *DONE*

Votre première base est maitenant créée avec une collection de 25359 restaurants donc.

## Recherche d'information 

Nous allons maintenant vérifier que l'opération s'est bien déroulé et qu'on peut accéder à ces données dans le terminal Mongo. 

1. Lancer le shell Mongo
1. Taper la commande `show dbs` pour afficher les bases de données existantes
    - Vous devriez donc voir 4 bases (et leur taille)
1. Pour utiliser la base `test`, taper la commande `use test`
1. Taper la commande `show collections` pour voir les collections dans ces bases
    - Il ne doit y en avoir qu'une seule donc
1. Pour voir le premier document de cette collection, taper la commande `db.restaurants.findOne()`

Vous devriez donc avoir un résultat comme ci-dessous. 

```json
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
test    0.004GB
> use test
switched to db test
> show collections
restaurants
> db.restaurants.findOne()
{
	"_id" : ObjectId("5ff5981de262797b62734992"),
	"address" : {
		"building" : "1007",
		"coord" : [
			-73.856077,
			40.848447
		],
		"street" : "Morris Park Ave",
		"zipcode" : "10462"
	},
	"borough" : "Bronx",
	"cuisine" : "Bakery",
	"grades" : [
		{
			"date" : ISODate("2014-03-03T00:00:00Z"),
			"grade" : "A",
			"score" : 2
		},
		{
			"date" : ISODate("2013-09-11T00:00:00Z"),
			"grade" : "A",
			"score" : 6
		},
		{
			"date" : ISODate("2013-01-24T00:00:00Z"),
			"grade" : "A",
			"score" : 10
		},
		{
			"date" : ISODate("2011-11-23T00:00:00Z"),
			"grade" : "A",
			"score" : 9
		},
		{
			"date" : ISODate("2011-03-10T00:00:00Z"),
			"grade" : "B",
			"score" : 14
		}
	],
	"name" : "Morris Park Bake Shop",
	"restaurant_id" : "30075445"
}
```






