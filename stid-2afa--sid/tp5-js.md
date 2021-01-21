# Javascript

A l'heure actuelle, de plus en plus d'entreprises utilisent des outils webs poru la génération de tableaux de bords, reporting et autres visualisations de données. En particulier, elles utilisent parfois des librairies dédiées comme [`d3js`](https://d3js.org) ou [`leafmmt`](https://leafletjs.com) que nous verrons par la suite.

Pour pouvoir les utiliser, il faut programmer en [`javascript`](https://fr.wikipedia.org/wiki/JavaScript) (ou `JS`), (presque) seul langage de scripts pour le web. Nous allons découvrir son utilisation lors de ce TP.

## Mise en place

Pour pouvoir tester le résultat de votre code, vous devez donc avoir 2 outils en parallèle :

- un éditeur de texte pour écrire le fichier HTML (Notepad++, Brackets, Bloc-notes, ...)
- un navigateur web

Une fois le fichier HTML modifié, vous devez donc reafraîchir la page web dans le navigateur pour voir les modifications (avec `Ctrl+R` par exemple).

Créer un fichier HTML (que vous nommerez comme vous l'entendez) et ouvrez le avec les 2 outils. Pour le moment, le contenu sera le suivant 

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>TP5 - JS</title>
</head>
<body>
	<h1>Premiers pas</h1>
	<p>Ce petit texte permet juste de tester le langage Javascript</p>
</body>
</html>
```

Ensuite, pour tester certaines commandes, et surtout voir le comportement (et les erreurs) de votre code, vous devez faire apparaître la console JS dans le navigateur. Voici quelques pistes en fonction de votre navigateur :

- Firefox
    - Raccourci : F12
    - Dans le menu : Développement web > Console Web
- Chrome
    - Raccourci : Crtl+Shift+J
    - Dans le menu : Outils > Console JavaScript
- Safari
    - Raccourci : option+command+C
    - Dans le menu :
        1. Aller dans Préférences > Avancées puis cocher "Afficher le menu Développement" 
        1. Aller dans Développement > Afficher la console Javascript

Une fois l'opération faite, vous devriez voir une console et d'autres outils permettant le développement web. Dans cette console, vous pouvez taper la commande suivante pour tester :

```js
console.log("Hello you")
```

Notez que la fonction `console.log()` nous permettra d'afficher des éléments dans la console, en particulier le contenu de valeurs, ce qui nous permettra de débuger notre code.

Si vous regardez la partie Eléments, vous avez le *DOM* (*Document Object Model*), qui est le contenu du document hiérarchisé en fonction de son organisation basée sur les balises et leur imbrication.

## Premiers pas en JS

Pour écrire du JS, nous avons 2 possibilités :

- Ecrire le code dans une balise `<script>`
- Ecrire le code dans un fichier (avec l'extension `.js`) et appeler celui-ci dans un balise `<script>`

Pour la première possibilité, nous avons aussi le choix de placer le balise contenant le code, soit au début (dans le `<head>`) ou dans le corps (`<body>`). Le placement est important, principalement si la page doit charger des sources externes (images, vidéos...). Dans notre cas, nous allons principalement placer le code à la fin (lorsque l'ensemble de la page est donc chargée).

Par exemmple, dans la page suivante, nous recherchons l'ensemble des éléments de type `<p>` et nous affichons la taille de cet ensemble.

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>TP5 - JS</title>
	<script>
		a = document.getElementsByTagName("p")
		console.log(a.length)
	</script>
</head>
<body>
	<script>
		b = document.getElementsByTagName("p")
		console.log(b.length)
	</script>
	<h1>Premiers pas</h1>
	<p>Ce petit texte permet juste de tester le langage Javascript</p>
	<script>
		c = document.getElementsByTagName("p")
		console.log(c.length)
	</script>
</body>
</html>
```

Dans la console, vous devriez voir afficher les valeurs 0, 0 et 1. Ce n'est qu'après sa déclaration que l'on peut accéder à un élément.

Notez que l'objet `document` contient les informations du documents, et la fonction `getElementsByTagName()` permet de sélectionner les objets en fonction de leur balise dans le document.


