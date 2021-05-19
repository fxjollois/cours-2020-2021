# Visualisation de données - d3.js

> Data-Driven Documents

[d3.js](http://www.d3js.org) est une librairie `javascript` très complète avec beaucoup d'exemples à disposition, avec une personnalisation totale possible. Elle permet l'accès à des primitives `SVG` permettant toute innovation. Malheureusement, elle est peu accessible directement et assez technique.

L'idée principale est de lier les **données** au **DOM** (*Document Object Model*), et d'appliquer des transformations, basées sur les données, au document.

Les documents de cours sont disponibles sur [ObservableHQ](https://observablehq.com/collection/@fxjollois/d3js).

<iframe width="100%" height="500" frameborder="0"
  src="https://observablehq.com/embed/@fxjollois/initiation-a-d3js?cell=*"></iframe>

## A réaliser

En repartant des données de production scientifique (au format `CSV` cette fois) disponible via ce lien <https://fxjollois.github.io/donnees/scimagojr/scimagojr.csv>, refaire les demandes suivants :

1. **TOPn** : TOP de taille variable pour une année donnée par l'utilisateur
  - Choix de la taille entre 3, 5, 10 et 20
  - Choix de l'année basé sur les données (dernière année existante sélectionnée au départ)
1. **Nuage de points** : nuage de points entre le nombre de documents produits et le nombre moyen de citations pour la dernière année disponible, pour chaque pays, avec les contraintes suivantes :
    - couleur (entre du vert pour le 1er et du rouge pour le dernier) en fonction de son rang
    - taille en fonction du *H-index*
    - lignes de références au niveau des moyennes de chaque variable
    - axes logarithmiques
    - nom de chaque pays indiqué lorsque la souris passe dessus
