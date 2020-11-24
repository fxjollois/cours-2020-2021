# Shiny - évaluation

## A FAIRE

Vous devez améliorer le tableau de bord, en réalisant les éléments suivants :

- Ajouter les trois TOP 5 dans la seconde page
- Intégrer le choix de la ville pour la `valueBox`
- En testant "Kerrville" par exemple, vous verrez qu'il y a des valeurs manquantes en début de période`infoBox`
    - gérer ce problème en modifiant les valeurs à `0` en `NA` dans la fonction `reactive`
    - modifier la couleur (à rouge) et l'icône (de type `warning`) de l'infoBox` si le calcul n'est pas possible entre 2000 et 2015
- Modifier la `valueBox` pour afficher une couleur en fonction du volume des ventes :
    - si inférieur à 2’000’000’000 : rouge
    - entre 2’000’000’000 et 50’000’000’000 : bleu clair
    - supérieur à 50’000’000’000 : vert
    - Afficher le volume en milliards pour simplifier la lecture
    - Tester les villes “San Angelo”, “San Antonio”, “San Marcos”
- Ajouter un choix de taille de TOP (cf `radioButtons()`) : 3, 5 ou 10
    - ce choix sera utiliser pour les trois TOPs

Questions complémentaires :

- Ajouter la possibilité de faire un TOP inversé (pour voir les moins bons)
- Ajouter la possibilité d’avoir la droite de régression linéaire sur le graphique (cf geom_smooth)
- Ajouter un graphique d’évolution en base 100 pour la ville, à mettre en dessous du premier graphique, avec l’évolution globale en plus sur le graphique
- La progression est en fait le pourcentage de la valeur de 2015 par rapport à celle de 2000. Modifier le code pour avoir le delta entre cette valeur et 100%
    - par exemple : 169% deviendra +69%, et 85% deviendra -15%
    - modifier les couleurs pour avertir du problème (vert si > 0 et orange sinon)



