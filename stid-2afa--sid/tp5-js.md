# TP - Initiation à HTML, CSS et JS 

Nous allons partir d'une base de travail disponible sur ce [lien vers Plnkr](http://embed.plnkr.co/7pv3ri/preview). **Plnkr** est un site permettant de développer du code HTML, CSS et JS directement dans un navigateur. Voici les informations importantes concernant cet outil et ce travail :

- Vous voyez un aperçu du rendu dans la partie à droite (*Preview*)
    - ce rendu est mis à jour automatiquement lors de la modification d'un des fichiers normalement
- Dans la partie du milieu, vous pouvez voir le contenu de chaque fichier
    - vous pouvez sélectionner le fichier qui vous intéresse en clliquant sur son nom tout à gauche
    - vous pouvez éditer ces fichiers 
- Le code est écrit avec un maximum de commentaires pour que vous puissez comprendre le travail fait

## A faire

### Lire le code et le comprendre

- Ne pas hésiter à faire des modifications 
- Changer les valeurs du tableau, ajouter des modalités...
- Changer les couleurs 
- Gérer les multiples clics (par exemple en supprimant ce qui a été fait avant)
- ...

### Troisième script

Créer un script (dans `script3.js`) permettant de faire un diagramme avec les contraintes suivantes :

- barres verticales, 
- largeur du graphique égale à celle de la fenêtre,
- largeur des barres en fonction du nombre de celles-ci (et donc du nombre de modalités),
- modalités affichées en dessous de chaque barre,
- valeurs affichées au dessus de chaque barre,
- résultat fonctionnel quelque soit le nombre de modalités données (tester avec
  différentes valeurs)
- changement de couleur de la barre sur laquelle passe la souris
- gestion des plusieurs clics sur les boutons :
  - le premier clique créé et affiche le diagramme
  - le deuxième le cache, sans le supprimer
  - le troisième l'affiche de nouveau, sans le recréer donc

Pour améliorer le graphique, on choisit de ne plus afficher directement la
valeur sur le graphique. On veut une fenêtre *pop-up* qui s'affiche lorsque la
souris passe sur une barre. Dans cette fenêtre, on veut la modalité et la valeur
associée. On souhaite que cette fenêtre suive le curseur de la souris. On doit
faire attention à l'affichage si la souris est proche d'un bord de la fenêtre.

Pour encode améliorer, on souhaite récupérer les données à partir d'un fichier
texte au format **JSON**, de ce type :
```json
{
  "valeurs": [12, 5, 21, 18, 14],
  "modalites": ["A", "B", "C", "E", "Z"]
}
```
