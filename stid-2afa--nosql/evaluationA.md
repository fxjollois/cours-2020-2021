# Evaluation A

## Données

Dans cette évaluation, nous allons travailler sur des données concernant des films. Vous trouverez ci-dessous le contenu du premier document (réduit aux éléments importants pour cette évaluation - les textes longs ont été remplacé par `"..."`).

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

## Questions

Vous devez déjà télécharger [le fichier `movies.json`](https://fxjollois.github.io/cours-2020-2021/stid-2afi--nosql/movies.json), et le mettre dans la collection `movies` de la base de données `test` (via *Compass* donc). Vous devez répondre par binôme, en m'envoyant vos réponses par mail.

**ATTENTION A BIEN METTRE LE CODE MONGO ET PAS LE RESULTAT !!!**

1. Combien y-a-t'il de films en tout dans la base ?
1. Combien y-a-t'il de films en Français ?
1. Combien y-a-t'il de films franco-canadien ? (pays égal à France et Canada)
1. Quels sont les genres (champs `genres`) existant dans la base ?
1. Retrouver toutes les informations du film dont le titre (champs `title` donc) est "Jurassic Park", en les affichant proprement (avec retour à la ligne et indentation)
1. Retrouver tous les films ayant le mot "jurassic" dans leur titre (avec ou sans majuscule), et lister leur titre et l'année de sortie uniquement
1. Donner uniquement les titres des films ayant une note de 3 sur le site IMDB (champs `rating` dans le champs `imdb`)
1. Donner les titres des films et leur note IMDB, pour ceux dont elle est inférieure ou égale à 3
1. Donner la note du public Rotten Tomatoes moyenne (chanmps `rating` de `viewer` dans `tomatoes`), ainsi que la maximale et la minimale, pour tous les films
1. Donner par année (champs `year` donc) le nombre de films dans la base (en veillant à faire attention à l'ordre du résultat)
1. Donner par genre le nombre de films, en triant les genres par nombre de films décroissant
1. Donner par genre la liste des types de films (champs `type`)
1. Quels sont les 5 directeurs ayant dirigé le plus de films (nom du directeur, avec le nombre de films dirigés)
1. Combien y-a-t'il de directeurs dans la base ?
1. Donner par nombre d'acteurs, le nombre de films (attention, certains films n'ont pas d'acteurs, et donc pas le champs correspondant - On n'affichera pas le cas 0 acteurs)
