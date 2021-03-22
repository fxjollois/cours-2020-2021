# Evaluation 2

Pendant cette évaluation, nous allons travailler sur des données de vente, stockées dans la collection `sales` de la base de données `sample_supplies`, disponible sur mon serveur.

Pour vous y connecter, uniquement via un ordinateur de l'IUT, vous devez utiliser le code suivant :

```r
library(mongolite)

m = mongo(
  collection = "sales",
  db = "sample_supplies",
  url = "mongodb+srv://user:user@cluster0.ougec.mongodb.net/")
```

Voici, ci-dessous, un exemple de document disponible dans cette collection.

```json
{
    "_id": "5bd761dcae323e45a93cd004",
    "saleDate": "2017-07-13T07:13:43.675Z",
    "items": [
        {
            "name": "binder",
            "tags": [
                "school",
                "general",
                "organization"
            ],
            "price": 21.66,
            "quantity": 3
        },
        {
            "name": "notepad",
            "tags": [
                "office",
                "writing",
                "school"
            ],
            "price": 7.67,
            "quantity": 5
        },
        {
            "name": "envelopes",
            "tags": [
                "stationary",
                "office",
                "general"
            ],
            "price": 13.91,
            "quantity": 1
        }
    ],
    "storeLocation": "Denver",
    "customer": {
        "gender": "F",
        "age": 70,
        "email": "wuulabeb@patsef.vu",
        "satisfaction": 4
    },
    "couponUsed": false,
    "purchaseMethod": "In store"
}
```

Nous remarquons que chaque document concerne les achats d'un client, dont les informations disponibles dans le champs `customer` :

- `gender` : genre de la personne
- `age` : âge de la personne (entier)
- `email` : adresse électronique (fictive bien évidemment)
- `satisfaction` : degré de satisfaction lors de l'achat

Pour chaque achat, certaines informations sont donc collectées :

- `date` : date de l'achat
- `storeLocation` : ville de l'achat
- `couponUsed` : utilisation d'un coupon de réduction ou non (booléen)
- `purchaseMethod` : moyen d'achat (en magasin, en ligne...)

Enfin, chaque achat contient un ou plusieurs produits (ici 3), dont les informations sont stockées dans le tableau `items` :

- `name` : nom du produit
- `tags` : ensemble de mots-clés associés à ce produit
- `price` : prix d'achat (à l'unité)
- `quantity` : quantité achetée

## Multiplication dans un agrégat

Dans cette évaluation, vous devrez utiliser la multiplication dans un agrégat. Vous trouverez des informations sur <a href="https://docs.mongodb.com/manual/reference/operator/aggregation/multiply/" target="_blank">cette page</a>.

Si dans un document dans une collection `rectangle`, vous avez un champs `largeur` et un champs `longueur`, vous pouvez obtenir la surface de cette façon (dans le shell de Mongo - à traduire en R):

```js
db.rectangle.aggregate([
  { $addFields: {
    $multiply: [ "$longueur", "$largeur" ]
  }}
])
```

## Demande

Merci de répondre aux questions en utilisant le formulaire ci-dessous :

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf80r1m6zj014FmQtGPOV74AWf4gx09bbtVAqxu0iqKhxdp2Q/viewform?embedded=true" width="640" height="3000" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>
