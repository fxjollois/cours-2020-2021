# Evaluation 1 - Sujet B

## Données

Dans cette évaluation, nous allons travailler sur des données concernant des logement AirBnB. Vous trouverez ci-dessous le contenu du premier document (réduit aux éléments importants pour cette évaluation - les textes longs ont été remplacé par `"..."`).

```json
{
	"_id" : "10677883",
	"listing_url" : "https://www.airbnb.com/rooms/10677883",
	"name" : "Great location in Barcelona",
	"summary" : "...",
	"space" : "Is like seen in the pictures, not new but functional.",
	"description" : "...",
	"neighborhood_overview" : "One of the best in town",
	"notes" : "",
	"transit" : "Bus, train, metro and taxi.",
	"access" : "Whole apartment.",
	"interaction" : "No estare infelizmente",
	"house_rules" : "...",
	"property_type" : "Apartment",
	"room_type" : "Entire home/apt",
	"bed_type" : "Real Bed",
	"minimum_nights" : "200",
	"maximum_nights" : "1125",
	"cancellation_policy" : "strict_14_with_grace_period",
	"last_scraped" : ISODate("2019-03-08T05:00:00Z"),
	"calendar_last_scraped" : ISODate("2019-03-08T05:00:00Z"),
	"first_review" : ISODate("2016-01-19T05:00:00Z"),
	"last_review" : ISODate("2016-03-01T05:00:00Z"),
	"accommodates" : 5,
	"bedrooms" : 4,
	"beds" : 4,
	"bathrooms" : NumberDecimal("1.0"),
	"amenities" : [
		"Internet",
		"Air conditioning",
		"Kitchen",
		"Smoking allowed",
		"Elevator",
		"Family/kid friendly",
		"Washer",
		"Fire extinguisher",
		"Hangers"
	],
	"price" : NumberDecimal("31.00"),
	"security_deposit" : NumberDecimal("100.00"),
	"cleaning_fee" : NumberDecimal("7.00"),
	"extra_people" : NumberDecimal("0.00"),
	"guests_included" : NumberDecimal("2"),
	"images" : {
		"thumbnail_url" : "",
		"medium_url" : "",
		"picture_url" : "https://a0.muscache.com/im/pictures/209da3b7-8831-4b36-8abf-a81fd1f91f82.jpg?aki_policy=large",
		"xl_picture_url" : ""
	},
	"host" : {
		"host_id" : "6151720",
		"host_url" : "https://www.airbnb.com/users/show/6151720",
		"host_name" : "Marina E Mickael",
		"host_location" : "Portimão, Faro District, Portugal",
		"host_about" : "Familia multicultural!!!",
		"host_response_time" : "within an hour",
		"host_thumbnail_url" : "https://a0.muscache.com/im/pictures/user/7b0aef6d-6e58-4ba8-a89e-7e07913af208.jpg?aki_policy=profile_small",
		"host_picture_url" : "https://a0.muscache.com/im/pictures/user/7b0aef6d-6e58-4ba8-a89e-7e07913af208.jpg?aki_policy=profile_x_medium",
		"host_neighbourhood" : "El Clot",
		"host_response_rate" : 100,
		"host_is_superhost" : false,
		"host_has_profile_pic" : true,
		"host_identity_verified" : false,
		"host_listings_count" : 3,
		"host_total_listings_count" : 3,
		"host_verifications" : [
			"email",
			"phone",
			"google",
			"reviews",
			"jumio",
			"government_id"
		]
	},
	"address" : {
		"street" : "Barcelona, Catalunya, Spain",
		"suburb" : "Sant Martí",
		"government_area" : "el Clot",
		"market" : "Barcelona",
		"country" : "Spain",
		"country_code" : "ES",
		"location" : {
			"type" : "Point",
			"coordinates" : [
				2.19057,
				41.41254
			],
			"is_location_exact" : true
		}
	},
	"availability" : {
		"availability_30" : 23,
		"availability_60" : 53,
		"availability_90" : 83,
		"availability_365" : 358
	},
	"review_scores" : {
		"review_scores_accuracy" : 10,
		"review_scores_cleanliness" : 8,
		"review_scores_checkin" : 10,
		"review_scores_communication" : 10,
		"review_scores_location" : 6,
		"review_scores_value" : 8,
		"review_scores_rating" : 60
	},
	"reviews" : [
		{
			"_id" : "60192990",
			"date" : ISODate("2016-01-19T05:00:00Z"),
			"listing_id" : "10677883",
			"reviewer_id" : "2526217",
			"reviewer_name" : "Ronnay",
			"comments" : "..."
		},
		{
			"_id" : "64271851",
			"date" : ISODate("2016-03-01T05:00:00Z"),
			"listing_id" : "10677883",
			"reviewer_id" : "60514860",
			"reviewer_name" : "Samir",
			"comments" : "... "
		}
	]
}
```

Quelques points à noter :

- Un logement a un nom (champs `name`)
- Un logement peut avoir plusieurs équipements (cf champs `amenities`), contenus dans un tableau
- Il en est de même pour les avis principaux (champs `reviews`), avec entre autres l'identifiant et le nom de la personne ayant écrit l'avis (champs `reviewer_id` et `reviewer_name`)
- Le type de logement est dans le champs `room_type`
- Des notes sont présentes dans le champs `review_scores`, sur différents points (en particulier une évaluation globale dans `review_scores_rating`)

## Questions

Vous devez déjà télécharger [le fichier `airbnb.json`](airbnb.json), et le mettre dans la collection `airbnb` de la base de données `test` (via *Compass* donc). Ensuite, une fois que vous aurez vérifié dans la console que vos données sont bien importées, vous pouvez répondre aux questions dans le formulaire ci-dessous.

**ATTENTION A BIEN METTRE LE CODE MONGO ET PAS LE RESULTAT !!!**

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeeykS_UnnoSWQ8GFYSwaeePU4_OmhIEVWijvb4EldCE-QW9w/viewform?embedded=true" width="640" height="2784" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

<!--
1. Combien y-a-t'il de logements en tout dans la base ?
db.airbnb.count()
2. Combien y-a-t'il de logements de type chambre privé ?
db.airbnb.count({room_type: "Private room"})
3. Quels sont les types de logements existant dans la base ?
db.airbnb.distinct("room_type")
4. Retrouver toutes les informations du logement dont le nom (champs `name`) est "1BR 5 minute walk to Times Square", en les affichant proprement (avec retour à la ligne et indentation)
db.airbnb.findOne({name: "1BR 5 minute walk to Times Square"})
5. Donner uniquement les noms des logements ayant une évaluation de 100 (champs `review_scores_rating` dans le champs `review_scores`)
db.airbnb.find(
    {"review_scores.review_scores_rating": 100},
    {_id: 0, name: 1}
)
6. Donner les noms des logements et leur évaluation globale, pour ceux dont elle est inférieure strictement à 30
db.airbnb.find(
    {"review_scores.review_scores_rating": {$lt: 30}},     
    {_id: 0, name: 1, "review_scores.review_scores_rating": 1} 
)
7. Donner l'évaluation globale moyenne, ainsi que la maximale et la minimale, pour tous les logements
db.airbnb.aggregate([
    {$group: {_id: "Tous", moy: {$avg: "$review_scores.review_scores_rating"}}}
])
8. Donner par nombre de lits (champs `beds` donc) le nombre de logement dans la base (en veillant à faire attention à l'ordre du résultat)
db.airbnb.aggregate([
    {$group: {_id: "$beds", nb: {$sum: 1}}},
    {$sort: {_id: 1}}
])
9. Donner par équipements (champs `amenities`) le nombre de logements, en triant les équipements par nombre de films décroissant
db.airbnb.aggregate([
    {$unwind: "$amenities"},
    {$sortByCount: "$amenities"}
])
10. Quels sont les 5 noms de personnes (sans prendre en compte l'id) ayant écrit le plus de d'avis (nom du reviewer, avec le nombre de films joués)
db.airbnb.aggregate([ 
    {$unwind: "$reviews"},
    {$sortByCount: "$reviews.reviewer_name"},
    {$limit: 5}
])
11. Combien y-a-t'il d'équipements dans la base ?
db.airbnb.aggregate([ 
    {$unwind: "$amenities"},
    {$sortByCount: "$amenities"},
    {$group: {_id: "Nb équipements", nb: {$sum: 1}}}
])
12. Donner par nombre d'avis, le nombre de logements (attention, certains logements n'ont pas d'avis, et donc pas le champs correspondant - on n'affichera pas le cas 0 avis)
db.airbnb.aggregate([
    {$match: {reviews: {$exists: true}}},
    {$addFields: {nb_reviews: {$size: "$reviews"}}},
    {$group: {_id: "$nb_reviews", nb: {$sum: 1}}},
    {$sort: {_id: 1}}
])
-->