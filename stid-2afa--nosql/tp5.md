# TP 5 : Dashboard dans R sur données dans MongoDB

Nous allons créer une application shiny, en utilisant le package [`shinydashboard`](https://rstudio.github.io/shinydashboard/).

## Données

Dans ce TP, nous allons travailler sur des données concernant des films. Vous trouverez ci-dessous le contenu du premier document (réduit aux éléments importants pour cette évaluation - les textes longs ont été remplacé par `"..."`).

```json
{
	"_id" : ObjectId("573a1390f29313caabcd5c0f"),
	"plot" : "...",
	"genres" : [ "Drama", "History" ],
	"rated" : "NOT RATED",
	"cast" : [
		"Lillian Gish",
		"Spottiswoode Aitken",
		"Mary Alden",
		"Frank Bennett"
	],
	"num_mflix_comments" : 1,
	"title" : "Intolerance: Love's Struggle Throughout the Ages",
	"fullplot" : "...",
	"countries" : [ "USA" ],
	"released" : ISODate("1916-09-05T00:00:00Z"),
	"directors" : [ "D.W. Griffith" ],
	"writers" : [ "D.W. Griffith (scenario)", "Anita Loos (titles)" ],
	"awards" : {
		"wins" : 1,
		"nominations" : 0,
		"text" : "1 win."
	},
	"lastupdated" : "2015-09-05 00:01:19.580000000",
	"year" : 1916,
	"imdb" : {
		"rating" : 8,
		"votes" : 9880,
		"id" : 6864
	},
	"type" : "movie",
	"tomatoes" : {
		"viewer" : {
			"rating" : 3.8,
			"numReviews" : 4718,
			"meter" : 78
		},
		"dvd" : ISODate("2002-12-10T00:00:00Z"),
		"critic" : {
			"rating" : 8.1,
			"numReviews" : 32,
			"meter" : 97
		},
		"lastUpdated" : ISODate("2015-09-15T17:02:34Z"),
		"consensus" : "...",
		"rotten" : 1,
		"production" : "Cohen Media Group",
		"fresh" : 31
	}
}
```

Quelques points à noter :

- Un même film peut donc avoir plusieurs genres (cf champs `genres`), contenus dans un tableau
- Il en est de même pour les acteurs principaux (champs `cast`), les pays du film (champs `countries`), les langues (champs `languages`), les directeurs (champs `directors`), et les scénaristes (champs `writers`)
- Le champs `imdb` reprend les éléments importants du site [IMDB](https://www.imdb.com/), sur lequel il est possible d'évaluer le film (sous-champs [`rating`](https://help.imdb.com/article/imdb/track-movies-tv/ratings-faq/G67Y87TFYYP6TWAV?ref_=helpsect_cons_2_4#ratings) - de 1 à 10)
- Le champs `tomatoes` fait lui référence au site [Rotten Tomatoes](https://www.rottentomatoes.com/), proposant aussi une évaluation du film (sous-champs `critic` pour la critique et `viewer` pour le public, en particulier `rating` et [`meter`](https://www.rottentomatoes.com/about#whatisthetomatometer) en pourcentage - donc sur 100)

Pour rappel, si vous ne l'avez pas fait, vous devez déjà télécharger [le fichier `movies.json`](https://fxjollois.github.io/cours-2020-2021/stid-2afi--nosql/movies.json), et le mettre dans la collection `movies` de la base de données `test` (via *Compass* donc). 

## Demande

Nous souhaitons donc avoir un tableau de bord, composé de plusieurs parties, avec le détail décrit ci-dessous.

- **Général** donnant des informations globales sur les films
    - Nombre de films (bloc 1 ci-dessous), d'acteurs (bloc 2) et de pays (bloc 3)
    - TOP (en nombre de films) sur les genres (bloc 4), les acteurs (bloc 5) et les pays (bloc 6)
    - Distribution du nombre de films pour chaque année de sortie (bloc 7)
    
    <style>
    .bloc { stroke: black; fill: transparent; }
    </style>
    <svg width="300" height="200">
        <rect x=  5 y=  5 width= 90 height= 20 class="bloc" />    <text x= 50 y= 20>1</text>
        <rect x=105 y=  5 width= 90 height= 20 class="bloc" />    <text x=150 y= 20>2</text>
        <rect x=205 y=  5 width= 90 height= 20 class="bloc" />    <text x=250 y= 20>3</text>
        <rect x=  5 y= 35 width= 90 height=100 class="bloc" />    <text x= 50 y= 90>4</text>
        <rect x=105 y= 35 width= 90 height=100 class="bloc" />    <text x=150 y= 90>5</text>
        <rect x=205 y= 35 width= 90 height=100 class="bloc" />    <text x=250 y= 90>6</text>
        <rect x=  5 y=145 width=290 height= 50 class="bloc" />    <text x=150 y=170>7</text>
    </svg>
    
- **Notation** donnant des informations sur les notations obtenues
    - Choix du genre (tous ou un seul - bloc 1), Choix de l'année (toutes ou une seul - bloc 2)
    - Distribution (en densité et en histogramme - bloc 3) des notes pour IMDB et Rotten Tomatoes (2 notes ici : viewer et critic)
    - Choix TOP ou FLOP (bloc 4), Choix de la taille (5, 10 ou 20 - bloc 5)
    - TOP/FLOP (titre et année de sortie) sur les notes IMDB (bloc 6), viewer Rotten Tomatoes (bloc 7), critic Rotten Tomatoes (bloc 8)
        - ces TOP/FLOP doivent prendre en compte le genre et l'année choisie ci-dessus
    
    <svg width="300" height="230">
        <rect x=  5 y=  5 width= 90 height= 20 class="bloc" />    <text x= 50 y= 20>1</text>
        <rect x=105 y=  5 width= 90 height= 20 class="bloc" />    <text x=150 y= 20>2</text>
        <rect x=  5 y= 35 width=290 height= 50 class="bloc" />    <text x=150 y= 60>3</text>
        <rect x=  5 y= 95 width= 90 height= 20 class="bloc" />    <text x= 50 y=110>4</text>
        <rect x=105 y= 95 width= 90 height= 20 class="bloc" />    <text x=150 y=110>5</text>
        <rect x=  5 y=125 width= 90 height=100 class="bloc" />    <text x= 50 y=180>7</text>
        <rect x=105 y=125 width= 90 height=100 class="bloc" />    <text x=150 y=180>8</text>
        <rect x=205 y=125 width= 90 height=100 class="bloc" />    <text x=250 y=180>9</text>
    </svg>

Pour réaliser cela, vous devez effectuer les étapes suivantes :

1. Créer une nouvelle application Shiny, à 2 fichiers
1. Créer le squelette de l'interface (partie UI donc)
	- Pour l'utilisation de `shinydashboard`, n'hésitez pas à aller sur [cette page](https://rstudio.github.io/shinydashboard/)
	- Quelques éléments d'information sont disponibles aussi sur [cette page](https://fxjollois.github.io/cours-2020-2021/lp-sante--tdb/shiny.html)
1. Créer la partie serveur
	- En amont de la fonction `shinyServer()`, il est possible de créer les `data.frame` et le `ggplot` nécessaires pour notre application
1. On pourra idéalement intégrer des éléments communs à l'UI et au serveur dans le fichier `global.r`, qui est automatiquement appelé lors du démarrage d'une application shiny.

**ATTENTION** : vous devez considéré que les données puissent être dynamiques, c'est-à-dire qu'il faut que vous fassiez les récupérations de données à la volée, et pas tout intégrer à R puis faire les calculs ensuite.



<!--
		- Tableau des restaurants n'ayant que des évaluations à 0 (nom, quartier et rue)
	- Tableau des restaurants avec les dernières évaluations les plus élevées (20 restaurants affichés ici)
-->
