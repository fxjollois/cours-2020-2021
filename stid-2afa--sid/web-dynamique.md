# Programmation web dynamique

Comme vu précédemment, les langages HTML, CSS et SVG sont statiques. Aucune programmation n'est réalisable d'une part, et aucune interaction réelle avec l'utlisateur n'est possible d'autres part (sauf comportement lors de déplacement de la souris, mais uniquement cosmétiques).

## Introduction à JS

- `JavaScript` (ou `JS`) basé sur [ECMAScript](https://www.ecmascript.org/)
- Script interprété côté client 
    - Possibilité de l'interpréter côté serveur avec des outils comme [NodeJS](https://nodejs.org)
- Utilisé aussi dans des outils autres (*CouchDB*, *MongoDB*, ...)
- Manipulation totale du **DOM**
- Exécuter directement lors de la lecture de la page (attention au placement des commandes)
- Possibilité de demander l'exécution à la fin du chargement de la page (en particulier des images et vidéos par exemple)
- Quelques outils disponibles de validation du code
- Commentaires sur une ligne avec `//` et sur plusieurs lignes avec `/* */`

### Exécution et intégration

Code exécutable directement dans la **console** `JS` présente dans tous les navigateurs

- Affichage de la console
- Ecriture de commandes `JS`
- Très utile pour le débogage 

Deux possibilités d'intégration du script :

- dans une balise `<script>code JS</script>`
- dans un fichier texte appelé avec `<script src = "code.js"></script>`

### Typage des variables

Typage faible :

- pas de déclaration de type lors de la création de la variable
- pas de déclaration de la variable nécessaire avant utilisation
- pas de vérification de type lors d'une affectation
- **ATTENTION** donc

```js
const pi = 3.14;    // pi sera en lecture seule par la suite
var a = 5, b = "b"; // globale ou locale en fonction du placement de var
d = a;              // var implicite ici, d sera globale
a = b;              // a devient une chaîne
var z;              // utilisation de var possible à tout moment
let temp;           // durée de vie = bloc en cours
```

### Type des variables

- Déclarée mais sans valeur : `undefined`
- Nul : `null` 
- Booléen :`true` et `false`
- Numérique : pour les entiers et réels
- Chaîne de caractère : définie avec `"chaîne"` ou `'chaîne'`
- Tableau : sans contrainte de type (mélange possible)
- Objet : type complexe structuré composé lui-même de variables nommées sans contrainte de type (fonctions possibles)

```js
var tab = [1, "deux", true]; // tab[0] vaut 1
var obj = {
    n: "blablabla",     // on y accède avec obj.n
    p1: 12,             // idem pour les autres
    p2: 3.214325,
    t: [12, 23, 98]
};
```

### Format JSON

- `JSON` pour **JavaScript Object Notation**
- Utilisé de plus en plus souvent pour le stockage de données et surtout par les API
- Basé sur les types précédemment citées
- `GeoJSON` : format spécifique pour stocker les données géographiques (coordonnées et formes)

Exemple 

- Données fournies Open Street View pour la localisation de la Tour Eiffel :
    - [données](http://nominatim.openstreetmap.org/search?q=tour+eiffel+paris+france&format=json) (à ouvrir dans une autre fenêtre)
- Activer le plugin `JSONView` de votre navigateur (ou tout autre plugin permettant de visualiser correctement les données `JSON`)

## Syntaxe

Est présenté ci-dessous l'ensemble des éléments classiques de syntaxe. 

### Opérations 

#### Mathématiques

- Opérateurs usuels : `+`, `-`, `*`, `/`, `()`, ...
- Convertion automatique si nécessaire : attention aux mélanges entier/chaîne

#### Logiques

- Opérateurs usuels : `==`, `!=`, `<`, `<= `, ` >`, `>=`
- Opérateurs complémentaires : `===`, `!==`
    - Vérifie l'égalité parfaite (i.e. même type - cf convertion automatique)
    - `5 == "5"` renvoie `true`
    - `5 === "5"` renvoie `false`

### Traitement conditionnel : `if`

```js
if (condition) {
    ligne(s) de code;
}
```

```js
if (condition) {
    ligne(s) de code;
} else {
    ligne(s) de code;
}
```

```js
if (condition) {
    ligne(s) de code;
} else if {
    ligne(s) de code;
} else {
    ligne(s) de code;
}
```

### Traitement conditionnel : `switch`

```js
switch (expression) {
    case valeurA:
        ligne(s) de code;
        break;              // optionnel
    case valeurB:
        ligne(s) de code;
        break;              // optionnel
    case valeurC:
        ligne(s) de code;
        break;              // optionnel
    ...
    default:                // comportement si pas de correspondance
        ligne(s) de code;
}
```

### Traitement itératif : `for`

Boucle classique

```js
for (initialisation; condition; incrémentation) {
    ligne(s) de code;
}
```

Boucle sur les éléments d'un objet

```js
for (variable in objet) {
    ligne(s) de code;
}
```

Boucle sur les éléments d'un tableau

```js
for (variable of tableau) {
    ligne(s) de code;
}
```

### Traitement itératif : `while`

#### `do ... while`

```js
do {
    ligne(s) de code;
} while (condition);
```

#### `while`

```js
while (condition) {
    ligne(s) de code;
}
```

### Fonctions

```js
function nomFonction (paramètre(s)) {
    ligne(s) de code;
    return valeur;          // optionnel
}
// appel classique
```

```js
var nomFonction = function (paramètre(s)) {
    ligne(s) de code;
    return valeur;          // optionnel
};
// idem pour l'appel
```

L'objet `arguments` contient les paramètres utilisés lors de l'appel de la fonction

La plus utile, `console.log(chaîne)`, permet d'afficher du contenu dans la console du navigateur


## Manipulation du **DOM** 

Deux objets présents :

- `document` : contient le **DOM** justement
- `window` : contient tous les informations de la page (dont les variables et fonctions `JS`), ainsi que `document`

Quelques fonctions utiles de `document` ou des éléments du DOM :

- `getElementById("nom")` renvoie un pointeur vers l'élément identifié par `"nom"`
- `getElementsByClassName("classe")` renvoie un tableau de pointeur vers les éléments de la classe donnée
- `getElementsByTagName("balise")` idem mais pour les éléments de la balise
- `createElement("balise")` créé un élément de type spécifié
- `innerHTML` contient le contenu `HTML` de l'élément
- `appendChild`, `removeChild`, `insertBefore` permet d'ajouter ou de supprimer des éléments du DOM

## Exemple 

Dans cet exemple, on réalise les étapes suivantes :

- Sélection d'une div créée, mais vide, identifiée par un nom
- Modification du contenu HTML de cette div
- Modification du style (texte écrit en rouge)

### Résultat

<div id="exjs">
</div>
<script>
var exjs = document.getElementById("exjs");
exjs.innerHTML = "Remplissage d'un div en rouge";
exjs.style.color = "red";
</script>

### Code

```html
<div id="exjs">
</div>
<script>
	var exjs = document.getElementById("exjs");
	exjs.innerHTML = "Remplissage d'un div en rouge";
	exjs.style.color = "red";
</script>
```