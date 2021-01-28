

### Interaction avec `pandas`

```python
import pandas
```

```python
res = db.restaurants.find()
df = pandas.DataFrame(list(res))
df.head()
```

```python
df0 = df.loc[0,:]
df0.Sports
df0.Sports["Jouer"]
```





---

lecture AirBnB fichier json
import dans Mongo
relecture dans python à partir de Mongo

Nous allons travailler sur des données AirBnB. Celles-ci sont stockées sur le serveur Mongo dans la collection listingsAndReviews de la base sample_airbnb.

## A faire

### AirBnB

1. Créer la connexion à la collection dans python
1. Donner le nombre de logements
1. Lister les informations du logement “10545725” (cf _id)
1. Lister les différentes types de logements possibles cf (room_type)
1. Donner le nombre de logements par type
1. Représenter graphiquement la distribution des prix
1. Croiser numériquement et graphiquement le type et le prix (price)
1. Représenter la distribution du nombre d’avis (cf reviews - à calculer)
1. Croiser graphiquement le nombre d’avis et le prix, en ajoutant l’information du type de logement
