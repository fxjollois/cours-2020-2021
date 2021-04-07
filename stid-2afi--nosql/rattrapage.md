# Rattrapage

Nous travaillons sur des données AirBnB, présentes dans le format ci-dessous dans MongoDB. On se connecte à la base de la façon suivante dans R :

```r
library(mongolite)

m = mongo(
  collection = "airbnb",
  db = "rattrapage",
  url = "mongodb+srv://user:user@cluster0.ougec.mongodb.net/")
```

Voici le format des données :

```json
{
    "_id": "10006546",
    "name": "Ribeira Charming Duplex",
    "summary": "....",
    "description": "...",
    "property_type": "House",
    "room_type": "Entire home/apt",
    "bed_type": "Real Bed",
    "minimum_nights": 2,
    "maximum_nights": 30,
    "cancellation_policy": "moderate",
    "first_review": "2016-01-03T05:00:00.000Z",
    "last_review": "2019-01-20T05:00:00.000Z",
    "accommodates":8,
    "bedrooms":3,
    "beds":5,
    "number_of_reviews":51,
    "bathrooms": 1,
    "amenities": ["TV", "Cable TV", "Wifi", "Kitchen", "Paid parking off premises", "Smoking allowed", "Pets allowed", "Buzzer/wireless intercom", "Heating", "Family/kid friendly", "Washer", "First aid kit", "Fire extinguisher", "Essentials", "Hangers", "Hair dryer", "Iron", "Pack ’n Play/travel crib", "Room-darkening shades", "Hot water", "Bed linens", "Extra pillows and blankets", "Microwave", "Coffee maker", "Refrigerator", "Dishwasher", "Dishes and silverware", "Cooking basics", "Oven", "Stove", "Cleaning before checkout", "Waterfront"],
    "price": 80.00,
    "host":
        {
            "host_id": "51399391",
            "host_name": "Ana&Gonçalo",
            "host_location": "Porto, Porto District, Portugal",
            "host_is_superhost": false
        },
    "address":
        {
            "street": "Porto, Porto, Portugal",
            "suburb": "",
            "government_area": "Cedofeita, Ildefonso, Sé, Miragaia, Nicolau, Vitória",
            "market": "Porto",
            "country": "Portugal",
            "country_code": "PT",
            "location":
                {
                    "type":"Point",
                    "coordinates": [-8.61308,41.1413],
                    "is_location_exact": false
                }
        },
    "availability":
        {
            "availability_30":   28,
            "availability_60":   47,
            "availability_90":   74,
            "availability_365": 239
        },
    "review_scores":
        {
            "review_scores_accuracy": 9,
            "review_scores_cleanliness": 9,
            "review_scores_checkin": 10,
            "review_scores_communication": 10,
            "review_scores_location": 10,
            "review_scores_value": 9,
            "review_scores_rating": 89
        }
}
```