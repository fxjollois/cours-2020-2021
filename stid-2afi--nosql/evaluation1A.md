# Evaluation 1 - Sujet A

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
- Il en est de même pour les acteurs principaux (champs `cast`), les pays du film (champs `countries`), les directeurs (champs `directors`), et les scénaristes (champs `writers`)
- Le champs `imdb` reprend les éléments importants du site [IMDB](https://www.imdb.com/), sur lequel il est possible d'évaluer le film (sous-champs [`rating`](https://help.imdb.com/article/imdb/track-movies-tv/ratings-faq/G67Y87TFYYP6TWAV?ref_=helpsect_cons_2_4#ratings) - de 1 à 10)
- Le champs `tomatoes` fait lui référence au site [Rotten Tomatoes](https://www.rottentomatoes.com/), proposant aussi une évaluation du film (sous-champs `critic`, en particulier [`meter`](https://www.rottentomatoes.com/about#whatisthetomatometer) en pourcentage - donc sur 100)

## Questions

Vous devez déjà télécharger [le fichier `movies.json`](movies.json), et le mettre dans la collection `movies` de la base de données `test` (via *Compass* donc). Ensuite, une fois que vous aurez vérifié dans la console que vos données sont bien importées, vous pouvez répondre aux questions dans le formulaire ci-dessous.

**ATTENTION A BIEN METTRE LE CODE MONGO ET PAS LE RESULTAT !!!**

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdI1QagGzdbpstGY_QnkYMiqoa6o1BWqfbxB0M9YEg_eK2gGQ/viewform?embedded=true" width="640" height="2660" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

<!--
- Combien y-a-t'il de films en tout dans la base ?
db.mflix.count()
- Combien y-a-t'il de films français ?
db.mflix.count({countries: "France"})
- Quels sont les types existant dans la base ?
db.mflix.distinct("type")
- Retrouver toutes les informations du film dont le titre (champs `title` donc) est "Wayne's World", en les affichant proprement (avec retour à la ligne et indentation)
db.mflix.find({title: "Wayne's World"})
- Donner uniquement les titres des films ayant une note de 9 sur le site IMDB (champs `rating` dans le champs `imdb`)
db.mflix.find(
    {"imdb.rating": 9},
    {_id: 0, title: 1}
)
- Donner les titres des films et leur note IMDB, pour ceux dont elle est inférieure strictement à 2
db.mflix.find(
    {"imdb.rating": {$lt: 2}},     
    {_id: 0, title: 1, "imdb.rating": 1} 
)
- Donner la note IMDB moyenne, ainsi que la maximale et la minimale, pour tous les films
db.mflix.aggregate([
    {$group: {_id: "Tous", moy: {$avg: "$imdb.rating"}}}
])
- Donner par année (champs `year` donc) le nombre de films dans la base (en veillant à faire attention à l'ordre du résultat)
db.mflix.aggregate([
    {$group: {_id: "$year", nb: {$sum: 1}}},
    {$sort: {_id: 1}}
])
- Donner par genre (champs `genres`) le nombre de films, en triant les genres par nombre de films décroissant
db.mflix.aggregate([
    {$unwind: "$genres"},
    {$sortByCount: "$genres"}
])
- Quels sont les 5 acteurs ayant joué le plus de films (nom de l'acteur, avec le nombre de films joués)
db.mflix.aggregate([ 
    {$unwind: "$cast"},
    {$sortByCount: "$cast"},
    {$limit: 5}
])
- Combien y-a-t'il d'acteurs dans la base ?
db.mflix.aggregate([ 
    {$unwind: "$cast"},
    {$sortByCount: "$cast"},
    {$group: {_id: "Nb acteurs", nb: {$sum: 1}}}
])
- Donner par nombre de directeurs, le nombre de films (attention, certains films n'ont pas de directeurs, et donc pas le champs correspondant - On n'affichera pas le cas 0 directeurs)
db.mflix.aggregate([
    {$match: {cast: {$exists: true}}},
    {$addFields: {nb_dir: {$size: "$cast"}}},
    {$group: {_id: "$nb_dir", nb: {$sum: 1}}},
    {$sort: {_id: 1}}
])
-->