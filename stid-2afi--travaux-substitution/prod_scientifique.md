# Production scientifique mondiale

Le site de [Scimago](https://www.scimagojr.com) permet d'avoir un certain nombre d'indicateurs sur les publications scientifiques, au niveau d'une revue ou d'un pays (ce qui nous intéresse ici). En particulier, la page [*Country Ranking*](https://www.scimagojr.com/countryrank.php) permet de récupérer ces indicateurs. Le détail de ces indicateurs est expliqué sur [cette page](https://www.scimagojr.com/help.php#understand_countries), mais voici les principaux que nous utiliserons :

- `Rank` : rang du pays en terme de production (par rapport au nombre de documents) pour l'année indiquée
- `Documents` : nombre de documents produits
- `Citable.documents` : nombre de documents citables (articles, reviews et conférences)
- `Citations` : nombre de citations de documents produits
- `Self.Citations` : nombre de citations dans un document du même pays
- `Citations.per.Document` : nombre moyen de citations
- `H.index` : nombre $h$ d'articles ayant eu au moins $h$ citations (pour plus d'information : [h-index sur Wikipedia](https://fr.wikipedia.org/wiki/Indice_h))

Dans ce travail, il y a deux parties à réaliser :

- un portail dataviz permettant d'avoir une visualisation de ces données 
    + Graphiques à définir en amont
    + Vues à prévoir :
        + Vue globale : évolution sur la période, au niveau mondial
        + Vue par pays : choix un pays dans une liste pour voir son évolution sur la période 
        + Vue comparative : choix de plusieurs pays pour les comparer sur leur production
- une analyse statistique fin de l'évolution de la production scientifique des pays sur la période 1996-2020
    + Quels sont les pays qui ont particulièrement progressé ? ou regressé ?
    + Y-a-t'il une tendance globale ?
    + Existe-t'il un comportement général et quelques outliers ? Ou des comportements clairement différents ?
    + Peut-on faire une segmentation des pays sur la base de leur production ?
        * Comportement global sur toute la période
        * Comportement sur un indicateur spécifique tout au long de la période
    + ...