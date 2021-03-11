# Données climatiques

A l'aide des [données climatiques](http://www.cru.uea.ac.uk/data/) fournies par le [Climatic Research Unit](http://www.cru.uea.ac.uk/), vous devez créer un portail dédié à l'évolution de la température sur la France (métropolitaine et d'outre-mer). Idéalement, celui-ci sera créé en pur javascript avec les librairies [d3js](https://d3js.org/) et [leaflet](https://leafletjs.com/), mais pourra être fait en R avec [shiny](https://shiny.rstudio.com/) (et le package [leaflet](https://rstudio.github.io/leaflet/)).

Ces données présentent les *anomalies de températures* mensuelles et annuelles relevées depuis 1850, avec un quadrillage plus ou moins fin selon les cas. La référence est la période 1961-1990. Cela veut dire qu'une valeur de +0.5 indique que la température a été plus élevée de 0.5 °C par rapport à cette période. Il y a bien évidemment de nombreuses données manquantes (en particulier sur les premières années).

Ce portail devra présenter la courbe d'évolution globale de la température soit au niveau mondial, soit sur un des hémisphères, voire sur une zone à définir ensemble. On pourra appliquer sur cette série les méthodes adaptées de lissage (idéalement en ayant le choix de la fenêtre), et de prévision pour les prochaines années. De plus, on présentera la situation sur le quadrillage, à la dernière date possible. Idéalement, lorsque l'utilisateur pointera la souris sur un carré, il faurait lui afficher l'évolution de la température à cet endroit.

Voici le plan de travail à suivre :

- Réflexion (*sur papier*) sur l'interface finale : choix des tableaux et graphiques à produire, choix des interactions possibles de l'utilisateur
- Importation des données et transformation 
    - création d'un code automatique permettant l'ensemble des opérations
- Création de l'interface utilisateur
- Ecriture du code permettant la création des tableaux et graphiques, ainsi que l'interactivité (choix utilisateur prévu en amont)

On pourra s'inspirer de [cette page](http://www.columbia.edu/~mhs119/Temperature/) pour certains graphiques, par exemple.

