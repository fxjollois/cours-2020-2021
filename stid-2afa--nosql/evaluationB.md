# Evaluation 2

Pendant cette évaluation, nous allons travailler sur des données de vente, stockées dans le fichier [`sales.json`](sales.json), à importer dans une collection `sales` de la base de données `test`, sur votre serveur Mongo.

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

> **Avant toute chose** : 
> - Calcul du montant total pour le premier produit, du premier achat (*i.e* donc du premier document)
> - Calcul du montant total du premier achat

## Demande

Vous devez réaliser un tableau de bord, basé sur Shiny, répondant aux demandes suivantes (organisation des blocs au choix) :

- un onglet **global** :
    - Tableau avec nombre de ventes et CA (montant total des ventes) par magasin
    - Tableau avec mêmes informations par méthode de vente
    - Graphique double montrant l'évolution de ces informations par mois sur la période des ventes
    - Boîtes d'information :
        - Nombre de ventes total
        - CA total
        - Satisfaction moyenne
- un onglet **produit** :
    - Sélection d'un produit (par défaut : `"laptop"`)
    - Tableau croisé du CA par magasin et par méthode de vente (avec les marges - *i.e.* les sommes en lignes et en colonnes)
    - Graphique double (nb ventes + CA) par mois sur la période
    - Boîtes d'information :
        - Prix moyen
        - Quantité totale vendue
        - Quantité moyenne par vente
        - Âge moyen des clients de ce produit
        - Répartition H/F des clients (représentation au choix)

## Rendu

Vous devez faire votre travail en groupe (3 maximums), et fournir les fichiers sources dans l'espace dédié sur [la page Moodle](https://moodle.u-paris.fr/course/view.php?id=10312) du cours.


        