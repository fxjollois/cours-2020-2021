# Programmation web statique
### HTML, CSS, SVG

- *Programmation* car langages spécifiques permettant de spécifier des éléments particuliers et le traitement à faire sur eux
- *Web* car développé pour un usage sur un navigateur
- *Statique* car (quasiment) pas de notions de variables dans les langages vus ici

## Quel langage pour quoi ?

- **HTML** : langage de description de textes
- **CSS** : langage de formatage d'éléments (texte, image, graphique)
- **SVG** : langage de description de graphiques
- **JavaScript** (non vu dans cette présentation) : langage de programmation 

## HTML

Langage de description de textes

- `HTML` : **HyperText Markup Language**
- Ici = HTML5 (cf [W3C](http://www.w3.org/TR/html5/))
- Utilisation de **balises**
    - double : `<balise paramètre(s)>...</balise>`
    - simple : `<balise paramètre(s)>`
- Définition de la sémantique du texte
- Structuration des éléments du texte : **DOM** (*Document Object Model*)

Le navigateur **traduit** selon sa propre interprétation des recommandations le contenu de la page

- Résultat pouvant être différent d'un navigateur à l'autre
- Syntaxe eronnée complétée à la volée, par le navigateur = gros risque d'erreur

### Schéma de base

```html
<!doctype html>
<html>
    <head>
        <!-- 
            méta-données sur la page :
                - titre (i.e. nom de l'onglet)
                - encodage, auteur, mots-clés, description
                - ...
        -->
    </head>
    <body>
        <!-- 
            corps de la page (ce qui sera donc affiché)
                - en-tête et pied de page, menu
                - contenu
                - ...
        -->
    </body>
</html>
```

### Méta-données

#### Importance de ces méta-données

- Pour le navigateur, encodage et lien avec les scripts et les feuilles de styles absolument nécessaire pour bien afficher la page
- Pour les moteurs de recherche, titre, auteur, mots-clés, description sont utilisés pour l'indexation de la page

#### Quelques méta-données usuelles

- Titre de la page à afficher dans le titre de l'onglet du navigateur
```html
<title>Page d'exemple HTML</title>
```

- Indique que c'est une page HTML**5**
```html
<!doctype html>
```

- Encodage de la page (ici `UTF-8`)
```html
<meta charset = "utf-8">
```

- Auteur, mots-clés et description de la page
```html
<meta name = "author" content = "FX Jollois">
<meta name = "keywords" content = "html, css, truc super bien">
<meta name = "description" content = "Super cours !!">
```

- Écriture de script `JS` (ou importation du fichier source avec `src="script.js"` en paramètre)
```html
<script></script>
```

- Définition du style `CSS` de la page
```html
<style></style>
```

- Importation d'une feuille de style `CSS`
```html
<link rel = "stylesheet" href="style.css">
```

Les balises `script` et `style` peuvent aussi être intégré dans le corps (dans la balise `body` donc), selon les besoins.

### Contenu du document

Le contenu est donc placé dans différentes balises, et intégré à la balise `<body>`. Ces balises sont de 2 types :

- Balise de type **`div`** : *bloc* de la largeur de la page (ou de l'élément parent)
- Balise de type **`span`** : élément dit *en ligne*, tel un mot dans une phrase

<div style="width: 80%; margin: 0 auto;">
<div style="border: solid 1px black; margin: 5px; padding: 5px;">
Ceci est un <code>div</code>
<div style="border: solid 1px black; margin: 5px; padding: 5px;">
Toujours un <code>div</code>, dans le premier <code>div</code>
</div>
Ici, un <span style="background-color: #ddd;"><code>span</code></span>
<div style="border: solid 1px black; margin: 5px; padding: 5px;">
Idem (un <code>div</code>), mais ici avec <span style="background-color: #ddd;">un <code>span</code></span> et <span style="background-color: #ddd;">un autre <code>span</code></span>
</div>
Et enfin <span style="background-color: #ddd;">un <code>span</code> avec un <div style="border: solid 1px black; margin: 5px; padding: 5px;"><code>div</code> dedans</div></span> 
</div>
</div>

#### Balises sémantiques principales 

Depuis HTML5, il existe des balises dites sémantiques, c'est-à-dire qu'elles ont du sens. Cela est important pour 2 choses

- Indexation des pages par les moteurs de recherche
- Analyse des pages par des outils d'aide dédiés aux personnes mal-voyantes

| balise | définition |
|-|-|
| `header` et `footer` | en-tête et pied de page |
| `nav` | menu de la page |
| `aside` | partie annexe de la page (type pub) |
| `section` et `article` | parties nous permettant d'insérer le contenu de la page |
| `h1, h2, ..., h6` | titres et sous-titres |
| `strong` et `em` | mot(s) important(s) et un peu moins important(s) |

#### Balises autres 

Il existe d'autres balises utiles.

| balise | définition |
|-|-|
| `p` | paragraphe |
| `ol` et `ul` | liste ordonnée et non-ordonnée |
| `li` | élément d'une liste |
| `dl`, `dt` et `dd` | liste de définition, terme à définir et définition donc |
| `img` | insertion d'une image |
| `b` et `i` | mise en gras ou en italique |
| `pre` | texte préformaté sans compactage d'espaces |
| `code` | code en ligne |
| `br` | saut à la ligne |
| `hr` | ligne horizontale |
| `table` | tableau |
| `tr`, `td`, `th` | ligne, cellule et en-tête de colonnes d'un tableau |

Liste non-exhaustive !

### DOM

Comme indiqué plus tôt, la structure de la page est connue sous le nom de **DOM** ou **Document Object Model**

Pour avoir une idée de ce qu'est le DOM :

- Ouvrir une page dans un autre onglet
- Afficher les outils de développements de votre navigateur


### Paramètres communs des balises

On peut appliquer certains paramètres aux balises, permettant de les identifier (via un nom unique ou via une classe) ou de leur appliquer directement un style.

- Appliquer un style `CSS` spécifique (cf plus bas) à l'élément

```html
<balise style = "code CSS">
```

- Déterminer la largeur et la hauteur de l'élément (`valeur` relative ou absolue)

```html
<balise width = "valeur" height = "valeur">
```

- Définir la ou les classes de l'élément (utile en `CSS` ou en `JS`)

```html
<balise class = "classe(s)">
```

- Donner un identifiant (qui doit être unique dans la page - sinon risque de confusion) à l'élément (idem, utile en `CSS` et en `JS`)

```html
<balise id = "identifiant">
```


## CSS

Langage de formattage d'éléments d'une page web, de tous types (texte, image, vidéo, dessin)

- `CSS` : **Cascading Style Sheets**
- Ici = CSS3 (cf [W3C](http://www.w3.org/TR/css3/))
- Langage script exécuté via un navigateur
- Utilisation de paramètres prédéfinis, à appliquer sur les balises 
- Définition de la forme des éléments (couleur, police, taille, position, ...)

Trois possibilités de définition du style :

- dans la balise `HTML` avec le paramètre `style` 
- dans la partie `head` de la page (dans la balise `<style>...</style>`
- dans un fichier `CSS` à part (ou plusieurs), à appeler avec `<link ...>` 

### Syntaxe

Définition des valeurs de paramètres à appliquer sur les éléments correspondants au sélecteur (soit une `balise`, soit une `classe`, soit un `identifiant`) 

```css
balise {
    parametre: valeur;
    ...
}
.classe {
    parametre: valeur;
    ...
}
#identifiant {
    parametre: valeur;
    ...
}
```

### Quelques paramètres à connaître

| Paramètre | Informations |
|-|-|
| `width`, `height` | largeur et hauteur |
| `color`| couleur de la police |
| `background-color` | couleur de fond |
| `font-size` | taille de la police |
| `text-align` | alignement du texte (justifié, centré, ...) |
| `display` | type d'affichage (permet de passer du bloc à en ligne et inversement par exemple) |
| `z-index` | niveau d'affichage (grand = devant) |

Les valeurs peuvent être déterminées :

- soit en valeur absolue :
	- en pixels (`px`), 
	- via le système métrique (`cm` u `mm` - à éviter)
	- ou système anglais (pouces - `in`)
- soit en valeur relative :
	- en pourcentage (`%`), 
	- par rapport à la taille de la police (`em`)

### Exemple (dans le code HTML)

<div style = "background-color: #ddd;">
 Une balise à fond gris, sauf pour <span style = "background-color: #fdb;">cette partie de phrase</span>, avec un <div style = "display: inline;">div qui n'en est pas un finalement</div> et ce <span style = "display: block; position: relative; bottom: -50px">span qui s'échappe</span>
</div>

<div style = "visibility: hidden; ">blablabl<br>blabla</div>

```html
<div style = "background-color: #ddd;">
 Une balise à fond gris, sauf pour 
 <span style = "background-color: #fdb;">cette partie de phrase</span>, 
 avec un <div style = "display: inline;">div qui n'en est pas un 
 finalement</div> et ce <span style = "display: block; 
 position: relative; bottom: -50px">span qui s'échappe</span>
</div>
```

### Sélecteurs 

Pour appliquer un style à certains éléments, il faut les sélectionner. Pour cela, nous avons des sélecteurs simples.

- Eléments correspondants à la balise (par exemple, tous les `h1`, tous les `p`, ...)
```html
balise
```
- Eléments correspondants à la classe
```html
.classe
```
- Elément (le premier trouvé) nommé `identifiant` (via `id = "identifiant`)
```html
#identifiant
```

Mais on peut aussi les combiner entre eux pour préciser la sélection

- Eléments correspondants à la balise B qui sont des *fils* de la balise A (`p strong` sélectionne tous les `strong` qui sont dans un `p`), avec possibilité de compléter sur plusieurs niveaux
```html
baliseA baliseB
```
- Eléments de la balise A, et éléments de la balise B (`h1, h2` sélectionne les titres de niveau 1 et les titres de niveau 2)
```html
baliseA, baliseB
```
- Eléments de la balise qui sont des fils de la classe indiquée (`.maClasse strong` sélectionne tous les `strong` présents dans un élément de classe `maClasse`)
```html
.classe balise
```
- Eléments qui sont de classe A ET de classe B 
```html
.classeA.classeB
```
- Eléments de la balise qui sont aussi de la classe donnée (`div.maClasse` sélectionne tous les `div` qui ont la classe `maClasse`)
```html
balise.classe
```
- Eléments de la balise qui sont dans l'élément nommé `identifiant`
```html
#identifiant balise
```
- Elément nommé `identifiant` uniquement lorsque la classe indiquée lui est affectée (intéressant lors d'une modification du *DOM* en `JS` par exemple)
```html
#identifiant.classe
```

### Quelques compléments

Les couleurs peuvent être déclarées :

- soit par leur nom (140 couleurs définies : cf [ici](http://www.w3schools.com/cssref/css_colornames.asp))
- soit par leur code hexadécimal (`#rrggbb` ou `#rgb` : `r` pour rouge, `g` pour vert et `b` pour bleu)
- soit par la fonction `rgb(r, g, b)` (les valeurs devant être entre 0 et 255)
- soit par la fonction `rgba(r, g, b, t)` identique à la précédente avec la définition de la transparence (avec `t` entre 0 et 1)

```css
/*
    Les commentaires se font avec cette syntaxe 
    (comme dans beaucoup d'autres langages)
*/
```

Voici la [liste exhaustive](https://developer.mozilla.org/en/CSS/CSS_Reference) des éléments `CSS`

## SVG

Langage de description de dessin

- **SVG** : *Scalable Vector Graphics*
- Basé sur du `XML`
- Permet de créer des dessins vectoriels
- `D3.js` et beaucoup d'autres librairies de dessin sont basées sur cette technologie
- Pas supporté par tous les navigateurs (en particulier les plus anciens)

### Exemple de SVG

<div style = "text-align: center;">
<svg width = "250" height = "50" style = "border: solid 1px black;">
  <rect x = "50" y = "0" width = "200" height = "45" fill = "orange" />
</svg>
</div>

```svg
<svg width = "250" height = "50" style = "border: solid 1px black;">
    <rect x = "50" y = "0" width = "200" height = "45" fill = "orange" />
</svg>
```

- le rectangle commence au point $(50,0)$ 
- ce qui indique le point $(0,0)$ est en **haut** à **gauche** du dessin

### Compléments

- 2 types de balises comme en `HTML` 
    - double : `<balise> ... </balise>`
    - simple : `<balise />`
- Le point d'origine `(0,0)` est situé en haut à gauche (comme pour un écran d'ordinateur)
- Quelques balises de forme de base :
    - `<rect x="" y="" width="" height="" />` pour un rectangle
    - `<circle cx="" cy="" r="" />` pour un cercle
    - `<ellispe cx="" cy="" rx="" ry="" />` pour une ellipse
    - `<line x1="" y1="" x2="" y2="" />` pour une ligne
    - `<text x="" y="">texte à insérer</text>` pour du texte
- Possibilité d'affecter des classes ou un identifiant à chaque élément

### Ordre de dessin

- Pas de notion de couches, contrairement à `CSS` 
- Dernier dessiné -> forme *au-dessus* du reste

```css
<rect x=  "0" y=  "0" width="70" height="70" fill="purple"/>
<rect x= "50" y= "25" width="70" height="70" fill="blue"/>
<rect x="100" y= "50" width="70" height="70" fill="green"/>
<rect x="150" y= "75" width="70" height="70" fill="yellow"/>
<rect x="200" y="100" width="70" height="70" fill="red"/>
```

<div style = "text-align: center;">
 <svg width = "300" height = "200">
  <rect x=  "0" y=  "0" width="70" height="70" fill="purple"/>
  <rect x= "50" y= "25" width="70" height="70" fill="blue"/>
  <rect x="100" y= "50" width="70" height="70" fill="green"/>
  <rect x="150" y= "75" width="70" height="70" fill="yellow"/>
  <rect x="200" y="100" width="70" height="70" fill="red"/>
 </svg>
</div>

## Outils pour développer

Sites permettant d'écrire du code web directement dans le navigateur, et de le partager :

- [CodePen.io](http://codepen.io)
- [JSFiddle](http://jsfiddle.net)
- [JSBin](http://jsbin.com)
- [Plunker](http://plnkr.co/)

Site permettant de faire plein choses très bien :

- [GitHub](http://github.com)

Sites d'apprentissage et forums

- [w3schools](http://www.w3schools.com)
- [CodeAcademy](https://www.codecademy.com/fr/tracks/web)
- [StackOverFlow](http://stackoverflow.com)
- [Developpez.net](http://developpez.com)

