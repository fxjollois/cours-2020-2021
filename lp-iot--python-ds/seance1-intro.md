# Introduction à `Python`

[`Python`](https://www.python.org/) est un langage de programmation en pleine croissance dans le domaine de la **Data Science** et du **Big Data**. Il a une syntaxe particulière pour certains aspects, avec des points communs tout de même avec de nombreux autres. Nous allons ici aborder les éléments suivants sur ce langage :

- les premiers éléments de syntaxe ;
- l'importation et la manipulation de données ;
- la visualisation de données.



## Eléments de base

### Utilisation en mode console

`python` est un langage scripté, dont l'exécution se fait dans une console. Dans celle-ci, il est donc possible d'exécuter les commandes les unes après les autres. Il est aussi possible (et recommander) d'écrire son script dans un fichier texte (souvent avec l'extension `.py`) et de l'exécuter via `execfile()`.

Pour accéder à l'aide d'une fonction, il existe la fonction `help()`, prenant éventuellement en paramètre une fonction directement, ou une chaîne de caractère. Si la fonction n'a pas de paramètre, elle démarre l'aide interactive.

### *Notebook*

Le module `jupyter` permet de travailler avec des *notebooks*, qui sont des documents contenant à la fois le code, les résultat et du texte. Ce document est ainsi un *notebook*. 

### Types de données

Comme tous les autres langages, `python` a plusieurs types de base possibles pour les données. En voici quelques uns. Vous pouvez exécuter les commandes dans une console pour voir le résultat.

| type | valeur | type() | commentaires |
|:-|:-:|:-|:-|
|entier | 1 |int | |
|réel | 1.234 | float | |
|chaîne de caractères | "un mot" | str | on peut utiliser indifférement `""` ou `''` |
|liste | [1, 2] | list | chaque élément peut être différent des autres |
|tuple | (1, 2) | tuple | similaire à une liste mais **constante** |
|dictionnaire | {"a": 1, "b": "deux"} | dict | ensemble de valeurs quelconques **nommées** |

Les `tuples`, `lists` et les `dicts` peuvent s'imbriquer les uns dans les autres.

```
(1, (2, 3), [4, 5], {"a": 1, "b": "deux"})
[1, [2, 3], (4, 5), {"a": 1, "b": "deux"}]
{"a": 1, "b": "deux", "c": (5, 6), "d": [7, 8]}
```

Il existe des fonctions permettant de passer d'un type à l'autre (quand cela est possible), telles que `int()`, `float()`, `str()`, `tuple()` et `list()`.

Il existe aussi des valeurs prédéfinies, telles que `True` (vrai), `False` (faux) et `None` (donnée absente).

### Création et suppression de variables

Il n'y a pas de mot-clé pour la définition d'une variable. Celle-ci est définie/créée lors de sa première affectation. Si elle n'existe pas mais qu'on essaie de l'utiliser, alors un message d'erreur apparaît. Il est aussi possible de la supprimer via la fonction `del()`.

### Type dynamique

Bien que `python` soit rigoureux dans l'évaluation des expressions (il ne fait pas de `cast` automatique - i.e. changement de type des données), le type d'une variable est dit **dynamique**. Le type d'une variable dépend uniquement de la valeur de son affectation. 

### Affichage

Comme vu précédemment, il existe la fonction `print()` permettant d'afficher du texte et/ou le contenu des variables dans la console. Celle-ci peut prendre les paramètres `sep`, qui permet d'indiquer le ou les caractères séparant les champs (un espace `" "` par défaut), et `end`, qui permet d'indiquer le caractère de fin de ligne (retour à la ligne `"\n"` par défaut).

### Opérateurs

Il existe bien évidemment tous les opérateurs classiques, tels que présentés ci-dessous.

| Type | Opérateurs |
|:-|:-|
| Arithmétiques | `+ - * / // % **` |
| Comparaisons | `> >= < <= == !=` |
| Booléens | `\| & not()` |


## Eléments de langage

### Traitement conditionnel

Comme dans tout langage, le traitement conditionnel se fait à partir d'un `if`. Une particularité de `python` est d'utiliser l'indentation (*i.e.* le décalage à droite à l'aide d'au moins une tabulation) pour définir les opérations à réaliser dans un bloc. Les clauses `elif` et `else` sont bien évidemment optionnelles.

```
if condition:
    ...
elif condition:
    ...
else:
    ...
```  

### Traitement itératif

On utilise en premier la boucle `for` dans laquelle on peut utiliser la fonction `range()` pour avoir les valeurs entre `0` (par défaut) et la valeur passée en paramètre - 1. Pour information, `i` est persistant à la boucle et garde la dernière valeur. 

```
for i in range(5):
    print(i)
```

La fonction `range()` peut prendre deux ou trois paramètres, et dans ce cas, génère la boucle entre les deux par pas de 1 (ou autre selon le troisième paramètres - celui-ci doit être cohérent par rapport aux deux premières valeurs).

Il est aussi possible d'utiliser :

- une chaîne de caractère (une itération par caractère) ;
- une `list` ou un `tuple` pour définir les valeurs à prendre ;
- un `dict`, l'itérateur prenant les valeurs des champs de celui-ci ;
- la fonction `enumerate()` sur une liste, permettant de récupérer 2 valeurs (dont 2 variables à mettre à gauche), qui seront l'indice de la position et la valeur ;
- la fonction `zip()` permettant de combiner 2 listes (élément par élément), et retournant elle aussi 2 valeurs.

Enfin, on dispose aussi de la boucle `while` qui teste en début de boucle si une condition est toujours vérifiée. 

```
while condition:
    ...

## Création et manipulations d'objets 

Comme indiqué, il existe différents types d'objets en `python`. Sont présentés ici des exemples de créations et de manipulations de chaînes (`str`), de `tuples`, de `list` et de dictionnaires (`dict`).

### Chaînes

Une chaîne de caractère se définit à l'aide des quotes simples (`''`) ou doubles (`""`). Par défaut, `python` présentera les chaînes avec des simples quotes. Mais en présence d'une apostrophe dans la chaîne, il faut la déclarer avec des doubles quotes. Il est possible de connaître la longueur de la chaîne avec la fonction `len()`.

Sur ces chaînes, on peut réaliser un certain nombre d'opérations classiques, telles que le changement de casse (`upper()` ou `lower()`), la mise en majuscule des premières lettres de chaque mot (`capitalize()`), la recherche d'une sous-chaîne (`find()` - première occurence), le remplacement d'une sous-chaîne (`replace()`), le dénombrement de sous-chaînes (`count()`) ou le découpage en sous-chaînes selon un caractère (`split()`). 

### Tuples

Un `tuple` en `python` est un ensemble déclaré via des `()`, composé de valeurs pas forcément de même type et éventuellement complexe, qu'il n'est pas possible de modifier. C'est une constante, une fois déclarée.

### Listes

Une `list` est aussi un ensemble déclarée via des `[]`, composé d'éléments pas forcément tous du même type et possiblement complexe. A la différence d'un tuple, une liste est modifiable.

Nous disposons sur ces listes de plusieurs fonctions tels que `reverse()` (pour inverser la liste), `sort()` (tri, avec l'option `reverse` pour le choix du tri), `pop()` (pour récupérer et supprimer le dernier élément), `append()` (pour ajouter un élément à la fin), `insert()` (pour insérer un élément dans la liste, à la position indiquée - paramètres = position suivie de la valeur), `remove()` (pour supprimer les valeurs passées en paramètre). Toutes ces fonctions modifient directement la liste sur laquelle on les applique.

Un autre moyen d'insérer une valeur, voire plusieurs, à une liste est d'utiliser l'opérateur `+`, tel qu'indiqué ci-dessous. Celui-ci permet une concaténation des deux listes en une seule. L'opérateur `*` permet lui de répéter une liste autant de fois que désiré.

Par contre, il faut faire très attention au **passage de référence** lorsqu'on copie une liste. En effet, dans le code suivant, on copie `a` dans `b`. Et en modifiant `a`, on remarque que `b` est aussi modifié. Et l'inverse est aussi vrai. Pour remédier à ce problème, on doit dupliquer la liste avec la fonction `copy()` de la liste initiale.

### Dictionnaires

Les **dictionnaires** (`dict` en `python`) sont des listes nommées (définies via des `{}`), c'est-à-dire que chaque élément a un nom (appelé aussi clé). Ces éléments ne sont pas forcément tous du même type, et peuvent aussi être complexe. Ils sont similaires (pour ne pas dire identique) à des littéraux **JSON**.

Pour accéder aux élements d'un dictionnaire, on utlise le nom du champs dont on veut la valeur entre `[]`. Il existe aussi des fonctions utiles sur ces objets, telles que `get()` (pour récupérer la valeur d'une clé), `keys()` (pour avoir la liste des clés de l'objet), `values()` (pour avoir les valeurs des clés, dans le même ordre que listé dans `keys()`), `popitem()` (pour récupérer un dictionnaire avec le dernier item, et le supprimer du dictionnaire initiale) et `pop()` (pour récupérer la valeur de l'item passé en paramètre, et le supprimer de l'élément de départ).

On peut ajouter facilement un item à un dictionnaire, en lui affectant simplement une valeur.

De même que pour les listes, il faut faire attention lors de l'affectation d'un dictionnaire à un autre. La fonction `copy()` permet donc d'obtenir une copie indépendante de l'objet initial.

### Indexation

Pour indexer une liste, un tuple, voire une chaîne de caractères, nous passons entre `[]` les valeurs de la position, avec plusieurs possibilités :

- `a[p]` : élément de `a` à la position `p` (pour rappel, 1ère position = 0)
- `a[:p]` : tous les élements de 0 à `p-1`
- `a[p:]` : tous les élements de `p` jusqu'à la fin
- `a[p:q]` :  tous les éléments de `p` à `q-1`
- `a[:]` ou `a[::]` : tous les élements
- `a[::-1]` : tous les éléments dans l'ordre inverse
- `a[p:q:r]` : les élements de `p` à `q` par pas `r` (celui-ci peut être négatif : dans ce cas `q`
 < `p`)

### Manipulation de type *comprehension*

On peut utiliser un mécanisme spécifique, appelé *list comprehension* (fonctionnant aussi sur les chaînes et les tuples), permettant de récupérer les valeurs (ou un calcul sur chaque valeur) pour tous les éléments de la liste (ou certains si on applique un `if`).


```python
a = [3, 1, 9, 7]
b = [x**2 for x in a]
print('b = ', b)

c = [x**2 for x in a if x >= 4]
print('c = ', c)
```

    b =  [9, 1, 81, 49]
    c =  [81, 49]


Le mécanisme de *list comprehension* est aussi utilisable pour créer un dictionnaire. Il faut dans ce cas indiquer deux valeus : la clé et sa valeur. Dans notre cas, la fonction `dict()` appliqué sur le résultat de la fonction `zip()` des deux listes nous permet d'avoir le même résultat.


```python
fruits = ["pommes", "bananes", "poires", "oranges"]
nombres = [5, 2, 10, 4]

d1 = {fruits[i]:nombres[i] for i in range(4)}
print('d1 = ', d1)

d2 = dict(zip(fruits, nombres))
print('d2 = ', d2)
```

    d1 =  {'pommes': 5, 'bananes': 2, 'poires': 10, 'oranges': 4}
    d2 =  {'pommes': 5, 'bananes': 2, 'poires': 10, 'oranges': 4}


## Fonctions

### Définition

L'opérateur `def` permet de créer une fonction (ou une procédure qui sera juste une fonction ne renvoyant rien). L'opérateur `return` indiquant le résultat à renvoyer le cas échéant. Comme pour un `if`, le bloc d'instructions est défini selon l'indentation. 

Il est bien évidemment possible de passer un paramètre à une fonction, sans qu'on ait à déclarer son type. 

Lorqu'il y a plus d'un paramètre, on peut faire un appel classique. Mais il est aussi possible de nommer explicitement les paramètres. Avec ce mécanisme, il est ainsi possible de les déclarer dans l'ordre que l'on veut. Mais si l'on nomme un paramètre, il est obligatoire de nommer les autres (erreur d'exécution sinon).

Il existe la possibilité de définir une valeur par défaut à un paramètre dans une fonction. Ceci permet d'appeler la fonction sans donner de valeur pour ce paramètre (la fonction utilisera la valeur par défaut donc). 

```
def f(...):
    ...
    return ...
```


Il est possible d'ajouter une condition `if` dans la fonction `lambda` avec un formalisme de type `valeurTrue if condition else valeurFalse`. Ci-après, nous calculons le carré de chaque valeur, multiplié par `-1` pour celles inférieur ou égale à 8.


```python
b = map(lambda v: v **2 if v > 8 else -(v ** 2), a)
print(list(b))
```

    [-9, -1, 81, -49]


## Manipulation de données

Nous allons utiliser dans ce TP le module `pandas` permettant la gestion de données avec Python dans un format (individus décrits par des variables) plus classique pour les méthodes statistiques. 

### Importation de données avec `pandas`

Nous allons travailler sur les données [tips](tips.csv). Vous pouvez trouver des informations ([ici](https://www.rdocumentation.org/packages/reshape2/versions/1.4.2/topics/tips)). Voici comment lire ces données dans `python` avec `read_csv()` de `pandas`.


```python
import pandas

# Lecture d'un fichier texte
tips = pandas.read_csv("tips.csv", header = 0, sep = ",")
tips.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16.99</td>
      <td>1.01</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>10.34</td>
      <td>1.66</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>21.01</td>
      <td>3.50</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>23.68</td>
      <td>3.31</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>24.59</td>
      <td>3.61</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>



Sur ces données, il est bien évidemment possible de voir quelques informations classiques.


```python
# Type de la variable
type(tips)
```




    pandas.core.frame.DataFrame




```python
# nombre de lignes et de colonnes de la table
tips.shape
```




    (244, 7)




```python
# nombre de valeurs présentes dans chaque colonne
tips.count()
```




    total_bill    244
    tip           244
    sex           244
    smoker        244
    day           244
    time          244
    size          244
    dtype: int64




```python
# détail complet de la table
tips.info()
```

    <class 'pandas.core.frame.DataFrame'>
    RangeIndex: 244 entries, 0 to 243
    Data columns (total 7 columns):
     #   Column      Non-Null Count  Dtype  
    ---  ------      --------------  -----  
     0   total_bill  244 non-null    float64
     1   tip         244 non-null    float64
     2   sex         244 non-null    object 
     3   smoker      244 non-null    object 
     4   day         244 non-null    object 
     5   time        244 non-null    object 
     6   size        244 non-null    int64  
    dtypes: float64(2), int64(1), object(4)
    memory usage: 13.5+ KB



```python
# nom des colonnes (au format liste)
list(tips.columns)
```




    ['total_bill', 'tip', 'sex', 'smoker', 'day', 'time', 'size']




```python
# idem
list(tips)
```




    ['total_bill', 'tip', 'sex', 'smoker', 'day', 'time', 'size']



### Manipulation *à la SQL*

Une fois qu'on a des données, la première chose qu'on souhaite savoir faire souvent, est de pouvoir manipuler ces données; C'est-à-dire réaliser les opérations classiques en bases de données, à savoir :

- Restriction
- Projection
- Tri et limitation des résultats
- Ajout de nouvelles variables (via des valeurs ou un calcul à partir des autres)
- Agrégats
- Jointures

Il y a bien évidmement d'autres opérations possibles, spécifiques ou non à Python.

*Note Bene* : certaines fonctions renvoient un nouvel objet qu'il faudra donc stocker dans une variable (nouvelle ou la même). Par contre, d'autres fonctions modifient directement l'objet en question.

### Restriction

Première étape essentielle, cela consiste à sélectionner un certain nombre de lignes de la table, selon une condition sur les valeurs des variables. Il exite pour cela la fonction `query()` prenant en paramètre une chaîne de caractères contenant la condition à appliquer. Voici quelques exemples de condition. Il y a bien évidemment beaucoup d'autres fonctions existantes, en particuliers pour les chaînes.


```python
tips.query('total_bill > 48') # que les factures de plus de 48$
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>59</th>
      <td>48.27</td>
      <td>6.73</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>156</th>
      <td>48.17</td>
      <td>5.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>6</td>
    </tr>
    <tr>
      <th>170</th>
      <td>50.81</td>
      <td>10.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>212</th>
      <td>48.33</td>
      <td>9.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
  </tbody>
</table>
</div>




```python
tips.query('day in ("Sat", "Sun")') # que les factures ayant eu lieu un samedi ou un dimanche
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16.99</td>
      <td>1.01</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>10.34</td>
      <td>1.66</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>21.01</td>
      <td>3.50</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>23.68</td>
      <td>3.31</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>24.59</td>
      <td>3.61</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>238</th>
      <td>35.83</td>
      <td>4.67</td>
      <td>Female</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>239</th>
      <td>29.03</td>
      <td>5.92</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>240</th>
      <td>27.18</td>
      <td>2.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>241</th>
      <td>22.67</td>
      <td>2.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>242</th>
      <td>17.82</td>
      <td>1.75</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
<p>163 rows × 7 columns</p>
</div>




```python
tips.query('size > 4 & sex == "Male"') # que les tables de plus de 4 convives et payées par un homme
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>141</th>
      <td>34.30</td>
      <td>6.7</td>
      <td>Male</td>
      <td>No</td>
      <td>Thur</td>
      <td>Lunch</td>
      <td>6</td>
    </tr>
    <tr>
      <th>142</th>
      <td>41.19</td>
      <td>5.0</td>
      <td>Male</td>
      <td>No</td>
      <td>Thur</td>
      <td>Lunch</td>
      <td>5</td>
    </tr>
    <tr>
      <th>156</th>
      <td>48.17</td>
      <td>5.0</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>6</td>
    </tr>
    <tr>
      <th>185</th>
      <td>20.69</td>
      <td>5.0</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>5</td>
    </tr>
    <tr>
      <th>187</th>
      <td>30.46</td>
      <td>2.0</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>5</td>
    </tr>
    <tr>
      <th>216</th>
      <td>28.15</td>
      <td>3.0</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>5</td>
    </tr>
  </tbody>
</table>
</div>



### Projection

Deuxième étape, celle-ci consiste tout simple à sélectionner certaines colonnes de la tables. En python, on utilise la fonction `filter()`. Il faut noter que celle-ci peut aussi fonctionner sur les lignes (quand celles-ci ont un index - pas vu ici).


```python
tips.filter(["sex", "total_bill"])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sex</th>
      <th>total_bill</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>16.99</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>10.34</td>
    </tr>
    <tr>
      <th>2</th>
      <td>Male</td>
      <td>21.01</td>
    </tr>
    <tr>
      <th>3</th>
      <td>Male</td>
      <td>23.68</td>
    </tr>
    <tr>
      <th>4</th>
      <td>Female</td>
      <td>24.59</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>239</th>
      <td>Male</td>
      <td>29.03</td>
    </tr>
    <tr>
      <th>240</th>
      <td>Female</td>
      <td>27.18</td>
    </tr>
    <tr>
      <th>241</th>
      <td>Male</td>
      <td>22.67</td>
    </tr>
    <tr>
      <th>242</th>
      <td>Male</td>
      <td>17.82</td>
    </tr>
    <tr>
      <th>243</th>
      <td>Female</td>
      <td>18.78</td>
    </tr>
  </tbody>
</table>
<p>244 rows × 2 columns</p>
</div>



Quand on fait ce genre d'opérations, il est courant que nous nous retrouvions avec des lignes identiques. Pour supprimer les doublons, nous utilisons la fonction `drop_duplicates()` sur le résultat.


```python
tips.filter(["sex", "smoker"]).drop_duplicates()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>sex</th>
      <th>smoker</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>Female</td>
      <td>No</td>
    </tr>
    <tr>
      <th>1</th>
      <td>Male</td>
      <td>No</td>
    </tr>
    <tr>
      <th>56</th>
      <td>Male</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>67</th>
      <td>Female</td>
      <td>Yes</td>
    </tr>
  </tbody>
</table>
</div>



On peut aussi utiliser le formalisme `dataframe.colonne` pour accéder aux valeurs d'une seule colonne


```python
tips.total_bill
```




    0      16.99
    1      10.34
    2      21.01
    3      23.68
    4      24.59
           ...  
    239    29.03
    240    27.18
    241    22.67
    242    17.82
    243    18.78
    Name: total_bill, Length: 244, dtype: float64



### Tri et limitation des résultats

Pour le tri, il existe la fonction `sort_values()`, dans laquelle on indique la ou les variables à utiliser pour le tri. Si on veut un tri descendant, on modifie la valeur du paramètre `ascending` (`True` par défaut).


```python
tips.sort_values(by = "total_bill")
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>67</th>
      <td>3.07</td>
      <td>1.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>1</td>
    </tr>
    <tr>
      <th>92</th>
      <td>5.75</td>
      <td>1.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Fri</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>111</th>
      <td>7.25</td>
      <td>1.00</td>
      <td>Female</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>1</td>
    </tr>
    <tr>
      <th>172</th>
      <td>7.25</td>
      <td>5.15</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>149</th>
      <td>7.51</td>
      <td>2.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Thur</td>
      <td>Lunch</td>
      <td>2</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>182</th>
      <td>45.35</td>
      <td>3.50</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>156</th>
      <td>48.17</td>
      <td>5.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>6</td>
    </tr>
    <tr>
      <th>59</th>
      <td>48.27</td>
      <td>6.73</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>212</th>
      <td>48.33</td>
      <td>9.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>170</th>
      <td>50.81</td>
      <td>10.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
  </tbody>
</table>
<p>244 rows × 7 columns</p>
</div>




```python
tips.sort_values(by = "total_bill", ascending = False)
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>170</th>
      <td>50.81</td>
      <td>10.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>212</th>
      <td>48.33</td>
      <td>9.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>59</th>
      <td>48.27</td>
      <td>6.73</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>156</th>
      <td>48.17</td>
      <td>5.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>6</td>
    </tr>
    <tr>
      <th>182</th>
      <td>45.35</td>
      <td>3.50</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>149</th>
      <td>7.51</td>
      <td>2.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Thur</td>
      <td>Lunch</td>
      <td>2</td>
    </tr>
    <tr>
      <th>111</th>
      <td>7.25</td>
      <td>1.00</td>
      <td>Female</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>1</td>
    </tr>
    <tr>
      <th>172</th>
      <td>7.25</td>
      <td>5.15</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>92</th>
      <td>5.75</td>
      <td>1.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Fri</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>67</th>
      <td>3.07</td>
      <td>1.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>1</td>
    </tr>
  </tbody>
</table>
<p>244 rows × 7 columns</p>
</div>



Pour se limiter aux premières lignes (respectivement les dernières), on utilise la fonction `head()` (resp. `tail()`), qui affiche par défaut 5 lignes. Cette valeur est bien évidemment modifiable, comme vu ci-après.


```python
tips.head(10) # 5 premières lignes par défaut
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16.99</td>
      <td>1.01</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>1</th>
      <td>10.34</td>
      <td>1.66</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>2</th>
      <td>21.01</td>
      <td>3.50</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
    </tr>
    <tr>
      <th>3</th>
      <td>23.68</td>
      <td>3.31</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>4</th>
      <td>24.59</td>
      <td>3.61</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>5</th>
      <td>25.29</td>
      <td>4.71</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>6</th>
      <td>8.77</td>
      <td>2.00</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>7</th>
      <td>26.88</td>
      <td>3.12</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
    </tr>
    <tr>
      <th>8</th>
      <td>15.04</td>
      <td>1.96</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>9</th>
      <td>14.78</td>
      <td>3.23</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>




```python
tips.tail(3) # 5 dernières lignes par défaut
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>241</th>
      <td>22.67</td>
      <td>2.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>242</th>
      <td>17.82</td>
      <td>1.75</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
    <tr>
      <th>243</th>
      <td>18.78</td>
      <td>3.00</td>
      <td>Female</td>
      <td>No</td>
      <td>Thur</td>
      <td>Dinner</td>
      <td>2</td>
    </tr>
  </tbody>
</table>
</div>



### Ajout de nouvelles variables

Il y a 2 possibilités ici :

- à partir de valeurs déjà connues
- à partir d'un calcul basé sur les autres variables

A partir de valeurs, soit vous en fournissez autant que de lignes, soit une seule qui sera donc dupliquée à toutes les lignes


```python
tips['n_row'] = range(244)
tips['nouv'] = "nouvelle valeur"
tips.head()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
      <th>n_row</th>
      <th>nouv</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16.99</td>
      <td>1.01</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
      <td>0</td>
      <td>nouvelle valeur</td>
    </tr>
    <tr>
      <th>1</th>
      <td>10.34</td>
      <td>1.66</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
      <td>1</td>
      <td>nouvelle valeur</td>
    </tr>
    <tr>
      <th>2</th>
      <td>21.01</td>
      <td>3.50</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
      <td>2</td>
      <td>nouvelle valeur</td>
    </tr>
    <tr>
      <th>3</th>
      <td>23.68</td>
      <td>3.31</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
      <td>3</td>
      <td>nouvelle valeur</td>
    </tr>
    <tr>
      <th>4</th>
      <td>24.59</td>
      <td>3.61</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
      <td>4</td>
      <td>nouvelle valeur</td>
    </tr>
  </tbody>
</table>
</div>



Bien évidemment, on souhaite généralement faire un calcul à partir des autres variables. Ceci peut se faire avec la fonction `assign()`.

Notez l'utilisation du mot-clé `lambda` pour la définition d'une fonction anonyme.


```python
# attention ici, l.size fait référence à la taille de l, car c'est un mot clé de python
tips.assign(per_person = lambda l: round(l.total_bill / l['size'], 2)) 
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>sex</th>
      <th>smoker</th>
      <th>day</th>
      <th>time</th>
      <th>size</th>
      <th>n_row</th>
      <th>nouv</th>
      <th>per_person</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>16.99</td>
      <td>1.01</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
      <td>0</td>
      <td>nouvelle valeur</td>
      <td>8.49</td>
    </tr>
    <tr>
      <th>1</th>
      <td>10.34</td>
      <td>1.66</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
      <td>1</td>
      <td>nouvelle valeur</td>
      <td>3.45</td>
    </tr>
    <tr>
      <th>2</th>
      <td>21.01</td>
      <td>3.50</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>3</td>
      <td>2</td>
      <td>nouvelle valeur</td>
      <td>7.00</td>
    </tr>
    <tr>
      <th>3</th>
      <td>23.68</td>
      <td>3.31</td>
      <td>Male</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>2</td>
      <td>3</td>
      <td>nouvelle valeur</td>
      <td>11.84</td>
    </tr>
    <tr>
      <th>4</th>
      <td>24.59</td>
      <td>3.61</td>
      <td>Female</td>
      <td>No</td>
      <td>Sun</td>
      <td>Dinner</td>
      <td>4</td>
      <td>4</td>
      <td>nouvelle valeur</td>
      <td>6.15</td>
    </tr>
    <tr>
      <th>...</th>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
      <td>...</td>
    </tr>
    <tr>
      <th>239</th>
      <td>29.03</td>
      <td>5.92</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>3</td>
      <td>239</td>
      <td>nouvelle valeur</td>
      <td>9.68</td>
    </tr>
    <tr>
      <th>240</th>
      <td>27.18</td>
      <td>2.00</td>
      <td>Female</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
      <td>240</td>
      <td>nouvelle valeur</td>
      <td>13.59</td>
    </tr>
    <tr>
      <th>241</th>
      <td>22.67</td>
      <td>2.00</td>
      <td>Male</td>
      <td>Yes</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
      <td>241</td>
      <td>nouvelle valeur</td>
      <td>11.34</td>
    </tr>
    <tr>
      <th>242</th>
      <td>17.82</td>
      <td>1.75</td>
      <td>Male</td>
      <td>No</td>
      <td>Sat</td>
      <td>Dinner</td>
      <td>2</td>
      <td>242</td>
      <td>nouvelle valeur</td>
      <td>8.91</td>
    </tr>
    <tr>
      <th>243</th>
      <td>18.78</td>
      <td>3.00</td>
      <td>Female</td>
      <td>No</td>
      <td>Thur</td>
      <td>Dinner</td>
      <td>2</td>
      <td>243</td>
      <td>nouvelle valeur</td>
      <td>9.39</td>
    </tr>
  </tbody>
</table>
<p>244 rows × 10 columns</p>
</div>



### Agrégat

Le calcul d'un agrégat permet de calculer une statistique de base (dénombrement, somme, moyenne, minimum, maximum - rarement autre chose) sur un tableau de données. On peut soit calculer globalement, soit pour chaque modalité d'une variable (voire chaque couple de modalités de plusieurs variables). 

Pour le faire globalement, on utilise la fonction `aggregate()` (ou `agg()`).


```python
tips.filter(["total_bill", "tip", "size"]).aggregate(['count', "mean"])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>size</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>count</th>
      <td>244.000000</td>
      <td>244.000000</td>
      <td>244.000000</td>
    </tr>
    <tr>
      <th>mean</th>
      <td>19.785943</td>
      <td>2.998279</td>
      <td>2.569672</td>
    </tr>
  </tbody>
</table>
</div>



Pour le faire pour chaque modalité d'une variable, on utilise la fonction `groupby()` en plus. Si on ne réalise qu'un seul calcul, on a directement les fonctions associées.


```python
tips.filter(["sex", "total_bill", "tip", "size"]).groupby("sex").mean()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>size</th>
    </tr>
    <tr>
      <th>sex</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Female</th>
      <td>18.056897</td>
      <td>2.833448</td>
      <td>2.459770</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>20.744076</td>
      <td>3.089618</td>
      <td>2.630573</td>
    </tr>
  </tbody>
</table>
</div>



On peut aussi définir plusieurs opérateurs d'agrégations.


```python
tips.filter(["sex", "total_bill", "tip", "size"]).groupby("sex").aggregate(['count', "mean"])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead tr th {
        text-align: left;
    }

    .dataframe thead tr:last-of-type th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr>
      <th></th>
      <th colspan="2" halign="left">total_bill</th>
      <th colspan="2" halign="left">tip</th>
      <th colspan="2" halign="left">size</th>
    </tr>
    <tr>
      <th></th>
      <th>count</th>
      <th>mean</th>
      <th>count</th>
      <th>mean</th>
      <th>count</th>
      <th>mean</th>
    </tr>
    <tr>
      <th>sex</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Female</th>
      <td>87</td>
      <td>18.056897</td>
      <td>87</td>
      <td>2.833448</td>
      <td>87</td>
      <td>2.459770</td>
    </tr>
    <tr>
      <th>Male</th>
      <td>157</td>
      <td>20.744076</td>
      <td>157</td>
      <td>3.089618</td>
      <td>157</td>
      <td>2.630573</td>
    </tr>
  </tbody>
</table>
</div>



Si on a plusieurs variables dans le regroupement, le calcul se fait donc pour chaque couple de modalités de celles-ci.


```python
tips.filter(["sex", "smoker", "total_bill", "tip", "size"]).groupby(["sex", "smoker"]).mean()
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th></th>
      <th>total_bill</th>
      <th>tip</th>
      <th>size</th>
    </tr>
    <tr>
      <th>sex</th>
      <th>smoker</th>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th rowspan="2" valign="top">Female</th>
      <th>No</th>
      <td>18.105185</td>
      <td>2.773519</td>
      <td>2.592593</td>
    </tr>
    <tr>
      <th>Yes</th>
      <td>17.977879</td>
      <td>2.931515</td>
      <td>2.242424</td>
    </tr>
    <tr>
      <th rowspan="2" valign="top">Male</th>
      <th>No</th>
      <td>19.791237</td>
      <td>3.113402</td>
      <td>2.711340</td>
    </tr>
    <tr>
      <th>Yes</th>
      <td>22.284500</td>
      <td>3.051167</td>
      <td>2.500000</td>
    </tr>
  </tbody>
</table>
</div>



## Visualisation de données

Le module `seaborn` est basé sur matplotlib. Il faut donc ajouter la ligne %matplotlib inline dans un notebook, pour pouvoir voir les graphiques.

Ce module contient toutes les fonctions directement, l'importation est donc assez simple.


```python
import seaborn

%matplotlib inline
```

### Variable quantitative

La fonction `displot()` nous permet de réaliser les graphiques de distribution d'une variable quantitative. Par défaut, elle réaliser un histogramme.


```python
seaborn.displot(data = tips, x = "total_bill")
```




    <seaborn.axisgrid.FacetGrid at 0x13ba0a4f0>




    
![png](seance1-intro_files/seance1-intro_54_1.png)
    


C'est la fonction `boxplot()` qui nous permet de réaliser une boîte à moustache (soit verticale en mettant la variable en `y`, soit horizontale en la mettant en `x`).


```python
seaborn.boxplot(data = tips, y = "total_bill")
```




    <AxesSubplot:ylabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_56_1.png)
    



```python
seaborn.boxplot(data = tips, x = "total_bill")
```




    <AxesSubplot:xlabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_57_1.png)
    


Une autre représentation possible est obtenue avec la fonction `pointplot()`, qui représente la moyenne et l'écarte-type, avec le choix entre vertical (y) ou horizontal (x).


```python
seaborn.pointplot(data = tips, y = "total_bill")
```




    <AxesSubplot:ylabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_59_1.png)
    



```python
seaborn.pointplot(data = tips, x = "total_bill")
```




    <AxesSubplot:xlabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_60_1.png)
    


Un autre graphique possible est celui obtenu avec `violinplot()`, qui représente la densité d'une variable, toujours avec le choix vertical/horizontale (y/x).


```python
seaborn.violinplot(data = tips, y = "total_bill")
```




    <AxesSubplot:ylabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_62_1.png)
    



```python
seaborn.violinplot(data = tips, x = "total_bill")
```




    <AxesSubplot:xlabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_63_1.png)
    


Enfin, il est possible de représenter toutes les valeurs sur un pseudo nuage de points. Avec `striplot()` dont l'option `jitter` a été activée, les points sont aléatoirement répartis sur l'axe des $x$  (si on utilise y - inversement sinon).


```python
seaborn.stripplot(data = tips, y = "total_bill", jitter = True)
```




    <AxesSubplot:ylabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_65_1.png)
    



```python
seaborn.stripplot(data = tips, x = "total_bill", jitter = True)
```




    <AxesSubplot:xlabel='total_bill'>




    
![png](seance1-intro_files/seance1-intro_66_1.png)
    


### Variable qualitative

Le diagramme en barres en effectifs est obtenu via la fonction `countplot()`. Il est soit horizontal (avec la variable en `x`), soit vertical (en `y`).


```python
seaborn.countplot(data = tips, x = "sex")
```




    <AxesSubplot:xlabel='sex', ylabel='count'>




    
![png](seance1-intro_files/seance1-intro_68_1.png)
    



```python
seaborn.countplot(data = tips, y = "sex")
```




    <AxesSubplot:xlabel='count', ylabel='sex'>




    
![png](seance1-intro_files/seance1-intro_69_1.png)
    


Pour avoir la version en pourcentages (ou en proportions) de ce graphique, nous devons utiliser la fonction `barplot()`, sur la table de proportions calculée avant. Cette fonction réalise un calcul (moyenne par défaut) sur une variable (ici `freq`) en fonction des modalités d'une autre variable (`sex` ici donc).


```python
t = pandas.crosstab(tips.sex, "freq", normalize=True)
t = t.assign(sex = t.index, freq = 100 * t.freq)
seaborn.barplot(data = t, x = "sex", y = "freq")
```




    <AxesSubplot:xlabel='sex', ylabel='freq'>




    
![png](seance1-intro_files/seance1-intro_71_1.png)
    


Pour réaliser un diagramme en barres empilées, il faudra le créer soi-même. Nous ne verrons pas ici.

### Var quantitative - Var quantitative

Pour réaliser le nuage de points, on utilise la fonction `jointplot()`. Elle a l'avantage d'ajouter par défaut les histogrammes de chaque variable. Elle réalise par défaut le nuage de points simple (scatter). 


```python
seaborn.jointplot(data = tips, x = "total_bill", y = "tip")
```




    <seaborn.axisgrid.JointGrid at 0x13df5a3d0>




    
![png](seance1-intro_files/seance1-intro_74_1.png)
    


En choississant le type `reg` avec le paramètre `kind`, on obtient en plus l'ajustement linéaire de la variable en y par celle en x.


```python
seaborn.jointplot(data = tips, x = "total_bill", y = "tip", kind = "reg")
```




    <seaborn.axisgrid.JointGrid at 0x13e03b6a0>




    
![png](seance1-intro_files/seance1-intro_76_1.png)
    


Si on souhaite ne pas avoir les distributions marginales, la fonction` regplot()` nous permet de réaliser le nuage de points avec ou sans ajustement (paramètre `fit_reg`).


```python
seaborn.regplot(data = tips, x = "total_bill", y = "tip")
```




    <AxesSubplot:xlabel='total_bill', ylabel='tip'>




    
![png](seance1-intro_files/seance1-intro_78_1.png)
    



```python
seaborn.regplot(data = tips, x = "total_bill", y = "tip", fit_reg = False)
```




    <AxesSubplot:xlabel='total_bill', ylabel='tip'>




    
![png](seance1-intro_files/seance1-intro_79_1.png)
    



```python
seaborn.regplot(data = tips, x = "total_bill", y = "tip", scatter = False)
```




    <AxesSubplot:xlabel='total_bill', ylabel='tip'>




    
![png](seance1-intro_files/seance1-intro_80_1.png)
    


Il est possible d'obtenir directement tous les nuages de points 2 à 2, avec la fonction `pairplot()`. Le paramètre `vars` permet de sélectionner certaines variables. Par défaut, la fonction utilise toutes les variables numériques.


```python
seaborn.pairplot(data = tips, vars = ["total_bill", "tip", "size"])
```




    <seaborn.axisgrid.PairGrid at 0x13e2f2910>




    
![png](seance1-intro_files/seance1-intro_82_1.png)
    


### Var qualitative - Var qualitative

Pour obtenir le diagramme en barres séparées (en effectifs), nous utilisons la fonction `countplot()` avec le paramètre `hue` pour indiquer la variable servant de *coloriage* aux barres.


```python
seaborn.countplot(data = tips, x = "sex", hue = "smoker")
```




    <AxesSubplot:xlabel='sex', ylabel='count'>




    
![png](seance1-intro_files/seance1-intro_84_1.png)
    


### Var quantitative - Var qualitative

Pour réaliser les boîtes à moustaches de la variable quantitative pour chaque modalité de la variable qualitative, on utilise la fonction `catplot()`.


```python
seaborn.catplot(data = tips, x = "sex", y = "total_bill", kind = "box")
```




    <seaborn.axisgrid.FacetGrid at 0x13e737c40>




    
![png](seance1-intro_files/seance1-intro_86_1.png)
    


On peut aussi représenter la moyenne et l'écart-type à l'aide du graphique `pointplot` (qu'on réalise ici via `catplot()`).


```python
seaborn.catplot(data = tips, x = "sex", y = "total_bill", kind = "point", join = False)
```




    <seaborn.axisgrid.FacetGrid at 0x13e823d90>




    
![png](seance1-intro_files/seance1-intro_88_1.png)
    


### Compléments

Il est bien évidemment possible de personnaliser le graphique de différentes façons, dont certains sont présentées ci-dessous. On accède aux fonctions de personnalisation soit via des paramètres de la fonction, soit via l'objet renvoyé par la fonction utilisée pour créer le graphique, soit via le module directement. Dans ce cas, ce sont des changements qui affecteront aussi les graphiques futurs.

- `suptitle` dans `fig` : titre global
- `set_axis_labels` : titre des axes
- `palette` : choix d'une palette de couleurs
- `size` et `aspect` : hauteur et ratio entre hauteur et largeur, pour chaque facette (une seule ici)


```python
seaborn.set_style("white")
p = seaborn.catplot(data = tips, x = "size", y = "tip", hue = "sex", 
                    kind = "box", 
                    palette = "Set2", height = 4, aspect = 2)
p.fig.suptitle("Taille et pourboire en fonction du sexe")
p.set_axis_labels("Nombre de convives", "Pourboire")
```




    <seaborn.axisgrid.FacetGrid at 0x13e7083a0>




    
![png](seance1-intro_files/seance1-intro_90_1.png)
    


## Données Velib

Nous allons travailler sur des données Velib en temps réel, qui sont disponibles sur [cette page](https://opendata.paris.fr/explore/dataset/velib-disponibilite-en-temps-reel/).

Pour cela, nous avons besoin du module `requests`, tel qu'utilisé ci-dessous.


```python
import requests

url = "https://opendata.paris.fr/api/records/1.0/search/"
par = dict(
    dataset = "velib-disponibilite-en-temps-reel"
)
r = requests.get(url = url, params = par)
r.json()

```




    {'nhits': 1396,
     'parameters': {'dataset': 'velib-disponibilite-en-temps-reel',
      'timezone': 'UTC',
      'rows': 10,
      'start': 0,
      'format': 'json'},
     'records': [{'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '5e1bb05303b7aae294afd812ec4a581cc033e909',
       'fields': {'ebike': 5,
        'capacity': 55,
        'name': 'André Mazet - Saint-André des Arts',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 12,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 7,
        'stationcode': '6015',
        'coordonnees_geo': [48.8537558106, 2.33909580857],
        'numdocksavailable': 42,
        'duedate': '2021-03-29T12:49:21+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.33909580857, 48.8537558106]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '713afacf0d05062badbf19c60addbbb346215ee6',
       'fields': {'ebike': 0,
        'capacity': 30,
        'name': 'Mairie du 12ème',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 3,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 3,
        'stationcode': '12109',
        'coordonnees_geo': [48.8408553118, 2.38755494356],
        'numdocksavailable': 27,
        'duedate': '2021-03-29T12:48:43+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.38755494356, 48.8408553118]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'e208d1615652a5427cbc0cf9befa658dac3d6b10',
       'fields': {'ebike': 11,
        'capacity': 46,
        'name': 'Harpe - Saint-Germain',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 27,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 16,
        'stationcode': '5001',
        'coordonnees_geo': [48.851518815, 2.34367031604],
        'numdocksavailable': 16,
        'duedate': '2021-03-29T12:48:44+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.34367031604, 48.851518815]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '85101add63d3280ffb804bf42ee14c34c769e420',
       'fields': {'ebike': 4,
        'capacity': 60,
        'name': 'Alibert - Jemmapes',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 13,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 9,
        'stationcode': '10013',
        'coordonnees_geo': [48.871044052, 2.36610446199],
        'numdocksavailable': 43,
        'duedate': '2021-03-29T12:49:17+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.36610446199, 48.871044052]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'b5b81df9fb6fd64faee7f853b7f639b1d48b6f61',
       'fields': {'ebike': 0,
        'capacity': 25,
        'name': 'Cassini - Denfert-Rochereau',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 5,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 5,
        'stationcode': '14111',
        'coordonnees_geo': [48.8375258391, 2.33603540808],
        'numdocksavailable': 19,
        'duedate': '2021-03-29T12:44:10+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.33603540808, 48.8375258391]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'a5c076923f4649866a71df22c30177d0b02b8bd8',
       'fields': {'ebike': 11,
        'capacity': 62,
        'name': 'Grande Armée - Brunel',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 15,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 4,
        'stationcode': '17038',
        'coordonnees_geo': [48.876116, 2.288124],
        'numdocksavailable': 45,
        'duedate': '2021-03-29T12:44:47+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.288124, 48.876116]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '49311913bdd1147e9df06ab0e8c5c6317c90cc87',
       'fields': {'ebike': 0,
        'capacity': 35,
        'name': 'Vaneau - Sèvres',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 14,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 14,
        'stationcode': '7002',
        'coordonnees_geo': [48.8485632331, 2.32042182593],
        'numdocksavailable': 19,
        'duedate': '2021-03-29T12:48:32+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.32042182593, 48.8485632331]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'd67f1bbc18b3de2767da3d50ac41d8e0364176f9',
       'fields': {'ebike': 8,
        'capacity': 17,
        'name': 'Thouin - Cardinal Lemoine',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 11,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 3,
        'stationcode': '5016',
        'coordonnees_geo': [48.8450471666, 2.34946478513],
        'numdocksavailable': 6,
        'duedate': '2021-03-29T12:48:14+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.34946478513, 48.8450471666]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '001c96af551cd580052a16fa25538bfaaa6c75d9',
       'fields': {'ebike': 1,
        'capacity': 52,
        'name': 'Morillons - Dantzig',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 5,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 4,
        'stationcode': '15047',
        'coordonnees_geo': [48.8331014995, 2.29938000441],
        'numdocksavailable': 46,
        'duedate': '2021-03-29T12:49:30+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.29938000441, 48.8331014995]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '236e61213ccdf742fc3a9e5e2f20a79b1a4272a9',
       'fields': {'ebike': 3,
        'capacity': 34,
        'name': 'Croulebarde - Corvisart',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 15,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 12,
        'stationcode': '13101',
        'coordonnees_geo': [48.8309816593, 2.34816469252],
        'numdocksavailable': 18,
        'duedate': '2021-03-29T12:47:18+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.34816469252, 48.8309816593]},
       'record_timestamp': '2021-03-29T13:39:00.469000+00:00'}]}



Dans ce résultat, nous voyons qu'il y a 1393 enregistrements à récupérer (`nhits`), et que nous en avons récupérer ici uniquement 10 (`parameters.rows`). Pour avoir les 10 suivants, on doit faire comme ci-dessous


```python
par = dict(
    dataset = "velib-disponibilite-en-temps-reel",
    start = 11
)
rsuite = requests.get(url = url, params = par)
rsuite.json()
```




    {'nhits': 1396,
     'parameters': {'dataset': 'velib-disponibilite-en-temps-reel',
      'timezone': 'UTC',
      'rows': 10,
      'start': 11,
      'format': 'json'},
     'records': [{'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '9770d9845aa9ddba684a31a15eee22157737b698',
       'fields': {'ebike': 3,
        'capacity': 44,
        'name': 'Ramponeau - Belleville',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 4,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 1,
        'stationcode': '20143',
        'coordonnees_geo': [48.8710311376, 2.37905685211],
        'numdocksavailable': 39,
        'duedate': '2021-03-29T12:49:51+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.37905685211, 48.8710311376]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'e0830cfa3bbcbfb3659f064f8eb5eeb9eb31f7fd',
       'fields': {'ebike': 0,
        'capacity': 21,
        'name': 'Le Brix et Mesmin - Jourdan',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 0,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 0,
        'stationcode': '14108',
        'coordonnees_geo': [48.8223409659, 2.3278616533],
        'numdocksavailable': 21,
        'duedate': '2021-03-29T12:49:02+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.3278616533, 48.8223409659]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'f211df17b631fed5330bbd42d8d528dfe9f395d8',
       'fields': {'ebike': 2,
        'capacity': 20,
        'name': 'Liberté - Vert-de-Maisons',
        'nom_arrondissement_communes': 'Maisons-Alfort',
        'numbikesavailable': 6,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 4,
        'stationcode': '47007',
        'coordonnees_geo': [48.7901478096, 2.43286281824],
        'numdocksavailable': 14,
        'duedate': '2021-03-29T12:42:07+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.43286281824, 48.7901478096]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '57de3b60f1d3c0e6e74c53916ec6ece6ed9052ac',
       'fields': {'ebike': 6,
        'capacity': 33,
        'name': 'Bir Hakeim',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 26,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 20,
        'stationcode': '15026',
        'coordonnees_geo': [48.8538440543, 2.28970534822],
        'numdocksavailable': 6,
        'duedate': '2021-03-29T12:49:53+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.28970534822, 48.8538440543]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'f636a3fa295ec37cd3f465099947aea7e3ced8cb',
       'fields': {'ebike': 6,
        'capacity': 30,
        'name': "Jules Guesde - Pont du Port à l'Anglais",
        'nom_arrondissement_communes': 'Vitry-sur-Seine',
        'numbikesavailable': 19,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 13,
        'stationcode': '44017',
        'coordonnees_geo': [48.7962880709, 2.41721212864],
        'numdocksavailable': 10,
        'duedate': '2021-03-29T12:50:00+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.41721212864, 48.7962880709]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '9b917df23721275acf9386344724377ab788cb7a',
       'fields': {'ebike': 0,
        'capacity': 26,
        'name': 'Michel-Ange - Parent de Rosan',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 1,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 1,
        'stationcode': '16118',
        'coordonnees_geo': [48.8405799237, 2.25841194391],
        'numdocksavailable': 25,
        'duedate': '2021-03-29T12:47:41+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.25841194391, 48.8405799237]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': '10b322d7068b19b6a1dc8cf762d016721074d328',
       'fields': {'ebike': 3,
        'capacity': 30,
        'name': 'Saint-Cloud - Hippodrome',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 9,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 6,
        'stationcode': '16138',
        'coordonnees_geo': [48.8577214889, 2.2549109906],
        'numdocksavailable': 21,
        'duedate': '2021-03-29T12:40:54+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.2549109906, 48.8577214889]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'b9512ba73549f09f1a4ea6ba5acd3e5491b7d119',
       'fields': {'ebike': 0,
        'capacity': 25,
        'name': 'Louis Lejeune - Barbès',
        'nom_arrondissement_communes': 'Montrouge',
        'numbikesavailable': 6,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 6,
        'stationcode': '21216',
        'coordonnees_geo': [48.8180741898, 2.32670098543],
        'numdocksavailable': 19,
        'duedate': '2021-03-29T12:45:56+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.32670098543, 48.8180741898]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'ff33e30b3135971f9bc6f4c622f66b731ea71cf7',
       'fields': {'ebike': 1,
        'capacity': 16,
        'name': 'Général Martial Valin - Pont du Garigliano',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 6,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 5,
        'stationcode': '15068',
        'coordonnees_geo': [48.8382309427, 2.27050602436],
        'numdocksavailable': 10,
        'duedate': '2021-03-29T12:49:34+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point',
        'coordinates': [2.27050602436, 48.8382309427]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'},
      {'datasetid': 'velib-disponibilite-en-temps-reel',
       'recordid': 'ec08bd53d41e0d9cb0f7c87426938d1fc677c7c3',
       'fields': {'ebike': 9,
        'capacity': 33,
        'name': 'Boétie - Ponthieu',
        'nom_arrondissement_communes': 'Paris',
        'numbikesavailable': 32,
        'is_installed': 'OUI',
        'is_renting': 'OUI',
        'mechanical': 23,
        'stationcode': '8050',
        'coordonnees_geo': [48.8714172844, 2.3076787591],
        'numdocksavailable': 1,
        'duedate': '2021-03-29T12:50:01+00:00',
        'is_returning': 'OUI'},
       'geometry': {'type': 'Point', 'coordinates': [2.3076787591, 48.8714172844]},
       'record_timestamp': '2021-03-29T13:40:00.505000+00:00'}]}



Ce qui nous intéresse ici est le champ `records`, qui contient les enregistrements de 10 premières stations donc. En le transformant en data frame avec `pandas`, on voit que le tableau obtenu n'est pas très lisible.


```python
records = r.json()['records']
df = pandas.DataFrame(records)

df
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>datasetid</th>
      <th>recordid</th>
      <th>fields</th>
      <th>geometry</th>
      <th>record_timestamp</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>5e1bb05303b7aae294afd812ec4a581cc033e909</td>
      <td>{'ebike': 5, 'capacity': 55, 'name': 'André Ma...</td>
      <td>{'type': 'Point', 'coordinates': [2.3390958085...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>1</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>713afacf0d05062badbf19c60addbbb346215ee6</td>
      <td>{'ebike': 0, 'capacity': 30, 'name': 'Mairie d...</td>
      <td>{'type': 'Point', 'coordinates': [2.3875549435...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>2</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>e208d1615652a5427cbc0cf9befa658dac3d6b10</td>
      <td>{'ebike': 11, 'capacity': 46, 'name': 'Harpe -...</td>
      <td>{'type': 'Point', 'coordinates': [2.3436703160...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>3</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>85101add63d3280ffb804bf42ee14c34c769e420</td>
      <td>{'ebike': 4, 'capacity': 60, 'name': 'Alibert ...</td>
      <td>{'type': 'Point', 'coordinates': [2.3661044619...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>4</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>b5b81df9fb6fd64faee7f853b7f639b1d48b6f61</td>
      <td>{'ebike': 0, 'capacity': 25, 'name': 'Cassini ...</td>
      <td>{'type': 'Point', 'coordinates': [2.3360354080...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>5</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>a5c076923f4649866a71df22c30177d0b02b8bd8</td>
      <td>{'ebike': 11, 'capacity': 62, 'name': 'Grande ...</td>
      <td>{'type': 'Point', 'coordinates': [2.288124, 48...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>6</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>49311913bdd1147e9df06ab0e8c5c6317c90cc87</td>
      <td>{'ebike': 0, 'capacity': 35, 'name': 'Vaneau -...</td>
      <td>{'type': 'Point', 'coordinates': [2.3204218259...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>7</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>d67f1bbc18b3de2767da3d50ac41d8e0364176f9</td>
      <td>{'ebike': 8, 'capacity': 17, 'name': 'Thouin -...</td>
      <td>{'type': 'Point', 'coordinates': [2.3494647851...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>8</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>001c96af551cd580052a16fa25538bfaaa6c75d9</td>
      <td>{'ebike': 1, 'capacity': 52, 'name': 'Morillon...</td>
      <td>{'type': 'Point', 'coordinates': [2.2993800044...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
    <tr>
      <th>9</th>
      <td>velib-disponibilite-en-temps-reel</td>
      <td>236e61213ccdf742fc3a9e5e2f20a79b1a4272a9</td>
      <td>{'ebike': 3, 'capacity': 34, 'name': 'Crouleba...</td>
      <td>{'type': 'Point', 'coordinates': [2.3481646925...</td>
      <td>2021-03-29T13:39:00.469000+00:00</td>
    </tr>
  </tbody>
</table>
</div>



On souhaite finalement se restreindre qu'aux informations contenues dans le champs `fields`. Pour cela, on utilise le mécanisme de *dict comprehension*.


```python
pandas.DataFrame([s['fields'] for s in records])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ebike</th>
      <th>capacity</th>
      <th>name</th>
      <th>nom_arrondissement_communes</th>
      <th>numbikesavailable</th>
      <th>is_installed</th>
      <th>is_renting</th>
      <th>mechanical</th>
      <th>stationcode</th>
      <th>coordonnees_geo</th>
      <th>numdocksavailable</th>
      <th>duedate</th>
      <th>is_returning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5</td>
      <td>55</td>
      <td>André Mazet - Saint-André des Arts</td>
      <td>Paris</td>
      <td>12</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>7</td>
      <td>6015</td>
      <td>[48.8537558106, 2.33909580857]</td>
      <td>42</td>
      <td>2021-03-29T12:49:21+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>30</td>
      <td>Mairie du 12ème</td>
      <td>Paris</td>
      <td>3</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>3</td>
      <td>12109</td>
      <td>[48.8408553118, 2.38755494356]</td>
      <td>27</td>
      <td>2021-03-29T12:48:43+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>2</th>
      <td>11</td>
      <td>46</td>
      <td>Harpe - Saint-Germain</td>
      <td>Paris</td>
      <td>27</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>16</td>
      <td>5001</td>
      <td>[48.851518815, 2.34367031604]</td>
      <td>16</td>
      <td>2021-03-29T12:48:44+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>60</td>
      <td>Alibert - Jemmapes</td>
      <td>Paris</td>
      <td>13</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>9</td>
      <td>10013</td>
      <td>[48.871044052, 2.36610446199]</td>
      <td>43</td>
      <td>2021-03-29T12:49:17+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>25</td>
      <td>Cassini - Denfert-Rochereau</td>
      <td>Paris</td>
      <td>5</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>5</td>
      <td>14111</td>
      <td>[48.8375258391, 2.33603540808]</td>
      <td>19</td>
      <td>2021-03-29T12:44:10+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>5</th>
      <td>11</td>
      <td>62</td>
      <td>Grande Armée - Brunel</td>
      <td>Paris</td>
      <td>15</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>4</td>
      <td>17038</td>
      <td>[48.876116, 2.288124]</td>
      <td>45</td>
      <td>2021-03-29T12:44:47+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>6</th>
      <td>0</td>
      <td>35</td>
      <td>Vaneau - Sèvres</td>
      <td>Paris</td>
      <td>14</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>14</td>
      <td>7002</td>
      <td>[48.8485632331, 2.32042182593]</td>
      <td>19</td>
      <td>2021-03-29T12:48:32+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>7</th>
      <td>8</td>
      <td>17</td>
      <td>Thouin - Cardinal Lemoine</td>
      <td>Paris</td>
      <td>11</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>3</td>
      <td>5016</td>
      <td>[48.8450471666, 2.34946478513]</td>
      <td>6</td>
      <td>2021-03-29T12:48:14+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>8</th>
      <td>1</td>
      <td>52</td>
      <td>Morillons - Dantzig</td>
      <td>Paris</td>
      <td>5</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>4</td>
      <td>15047</td>
      <td>[48.8331014995, 2.29938000441]</td>
      <td>46</td>
      <td>2021-03-29T12:49:30+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>9</th>
      <td>3</td>
      <td>34</td>
      <td>Croulebarde - Corvisart</td>
      <td>Paris</td>
      <td>15</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>12</td>
      <td>13101</td>
      <td>[48.8309816593, 2.34816469252]</td>
      <td>18</td>
      <td>2021-03-29T12:47:18+00:00</td>
      <td>OUI</td>
    </tr>
  </tbody>
</table>
</div>



Ici, la colonne `station` ne nous est pas utile (les informations dedans sont déjà présentes). Toujours le même mécanisme de *list comprehension*, on peut la supprimer du résultat.


```python
pandas.DataFrame([{i:s['fields'][i] for i in s['fields'] if i!='station'} for s in records])
```




<div>
<style scoped>
    .dataframe tbody tr th:only-of-type {
        vertical-align: middle;
    }

    .dataframe tbody tr th {
        vertical-align: top;
    }

    .dataframe thead th {
        text-align: right;
    }
</style>
<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ebike</th>
      <th>capacity</th>
      <th>name</th>
      <th>nom_arrondissement_communes</th>
      <th>numbikesavailable</th>
      <th>is_installed</th>
      <th>is_renting</th>
      <th>mechanical</th>
      <th>stationcode</th>
      <th>coordonnees_geo</th>
      <th>numdocksavailable</th>
      <th>duedate</th>
      <th>is_returning</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>5</td>
      <td>55</td>
      <td>André Mazet - Saint-André des Arts</td>
      <td>Paris</td>
      <td>12</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>7</td>
      <td>6015</td>
      <td>[48.8537558106, 2.33909580857]</td>
      <td>42</td>
      <td>2021-03-29T12:49:21+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>1</th>
      <td>0</td>
      <td>30</td>
      <td>Mairie du 12ème</td>
      <td>Paris</td>
      <td>3</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>3</td>
      <td>12109</td>
      <td>[48.8408553118, 2.38755494356]</td>
      <td>27</td>
      <td>2021-03-29T12:48:43+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>2</th>
      <td>11</td>
      <td>46</td>
      <td>Harpe - Saint-Germain</td>
      <td>Paris</td>
      <td>27</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>16</td>
      <td>5001</td>
      <td>[48.851518815, 2.34367031604]</td>
      <td>16</td>
      <td>2021-03-29T12:48:44+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>3</th>
      <td>4</td>
      <td>60</td>
      <td>Alibert - Jemmapes</td>
      <td>Paris</td>
      <td>13</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>9</td>
      <td>10013</td>
      <td>[48.871044052, 2.36610446199]</td>
      <td>43</td>
      <td>2021-03-29T12:49:17+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>4</th>
      <td>0</td>
      <td>25</td>
      <td>Cassini - Denfert-Rochereau</td>
      <td>Paris</td>
      <td>5</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>5</td>
      <td>14111</td>
      <td>[48.8375258391, 2.33603540808]</td>
      <td>19</td>
      <td>2021-03-29T12:44:10+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>5</th>
      <td>11</td>
      <td>62</td>
      <td>Grande Armée - Brunel</td>
      <td>Paris</td>
      <td>15</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>4</td>
      <td>17038</td>
      <td>[48.876116, 2.288124]</td>
      <td>45</td>
      <td>2021-03-29T12:44:47+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>6</th>
      <td>0</td>
      <td>35</td>
      <td>Vaneau - Sèvres</td>
      <td>Paris</td>
      <td>14</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>14</td>
      <td>7002</td>
      <td>[48.8485632331, 2.32042182593]</td>
      <td>19</td>
      <td>2021-03-29T12:48:32+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>7</th>
      <td>8</td>
      <td>17</td>
      <td>Thouin - Cardinal Lemoine</td>
      <td>Paris</td>
      <td>11</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>3</td>
      <td>5016</td>
      <td>[48.8450471666, 2.34946478513]</td>
      <td>6</td>
      <td>2021-03-29T12:48:14+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>8</th>
      <td>1</td>
      <td>52</td>
      <td>Morillons - Dantzig</td>
      <td>Paris</td>
      <td>5</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>4</td>
      <td>15047</td>
      <td>[48.8331014995, 2.29938000441]</td>
      <td>46</td>
      <td>2021-03-29T12:49:30+00:00</td>
      <td>OUI</td>
    </tr>
    <tr>
      <th>9</th>
      <td>3</td>
      <td>34</td>
      <td>Croulebarde - Corvisart</td>
      <td>Paris</td>
      <td>15</td>
      <td>OUI</td>
      <td>OUI</td>
      <td>12</td>
      <td>13101</td>
      <td>[48.8309816593, 2.34816469252]</td>
      <td>18</td>
      <td>2021-03-29T12:47:18+00:00</td>
      <td>OUI</td>
    </tr>
  </tbody>
</table>
</div>



### Carte avec `leaflet`

Dans ce TP, nous allons aussi aborder l'aspect cartographie sous `python` avec le package `folium` (à installer donc). L'idée sera d'ajouter à un fond de carte des formes de couleurs, en fonction d'une information tierce. Le package `folium` est une interface entre `python` et la librairie [`leaflet`](https://leafletjs.com/). Elle s'utilise très facilement, comme nous pouvons le voir ci-dessous pour la création d'une carte. Les coordonnées indiquées sont la latitude et la longitude de Paris.


```python
import folium
centre = [48.87, 2.35]
paris = folium.Map(location = centre, zoom_start = 12)
paris
```




<div style="width:100%;"><div style="position:relative;width:100%;height:0;padding-bottom:60%;"><span style="color:#565656">Make this Notebook Trusted to load map: File -> Trust Notebook</span><iframe src="about:blank" style="position:absolute;width:100%;height:100%;left:0;top:0;border:none !important;" data-html=%3C%21DOCTYPE%20html%3E%0A%3Chead%3E%20%20%20%20%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22content-type%22%20content%3D%22text/html%3B%20charset%3DUTF-8%22%20/%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20L_NO_TOUCH%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20L_DISABLE_3D%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%0A%20%20%20%20%3Cstyle%3Ehtml%2C%20body%20%7Bwidth%3A%20100%25%3Bheight%3A%20100%25%3Bmargin%3A%200%3Bpadding%3A%200%3B%7D%3C/style%3E%0A%20%20%20%20%3Cstyle%3E%23map%20%7Bposition%3Aabsolute%3Btop%3A0%3Bbottom%3A0%3Bright%3A0%3Bleft%3A0%3B%7D%3C/style%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdn.jsdelivr.net/npm/leaflet%401.6.0/dist/leaflet.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//code.jquery.com/jquery-1.12.4.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdn.jsdelivr.net/npm/leaflet%401.6.0/dist/leaflet.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css%22/%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3Dno%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23map_fc3111f4d70d482ca6aa162b1e9ac043%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/style%3E%0A%20%20%20%20%20%20%20%20%0A%3C/head%3E%0A%3Cbody%3E%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22folium-map%22%20id%3D%22map_fc3111f4d70d482ca6aa162b1e9ac043%22%20%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%0A%3C/body%3E%0A%3Cscript%3E%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20map_fc3111f4d70d482ca6aa162b1e9ac043%20%3D%20L.map%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22map_fc3111f4d70d482ca6aa162b1e9ac043%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20center%3A%20%5B48.87%2C%202.35%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20crs%3A%20L.CRS.EPSG3857%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20zoom%3A%2012%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20zoomControl%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20preferCanvas%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20tile_layer_f025732817f7449e929e0066cea3fde3%20%3D%20L.tileLayer%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A//%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%22attribution%22%3A%20%22Data%20by%20%5Cu0026copy%3B%20%5Cu003ca%20href%3D%5C%22http%3A//openstreetmap.org%5C%22%5Cu003eOpenStreetMap%5Cu003c/a%5Cu003e%2C%20under%20%5Cu003ca%20href%3D%5C%22http%3A//www.openstreetmap.org/copyright%5C%22%5Cu003eODbL%5Cu003c/a%5Cu003e.%22%2C%20%22detectRetina%22%3A%20false%2C%20%22maxNativeZoom%22%3A%2018%2C%20%22maxZoom%22%3A%2018%2C%20%22minZoom%22%3A%200%2C%20%22noWrap%22%3A%20false%2C%20%22opacity%22%3A%201%2C%20%22subdomains%22%3A%20%22abc%22%2C%20%22tms%22%3A%20false%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_fc3111f4d70d482ca6aa162b1e9ac043%29%3B%0A%20%20%20%20%20%20%20%20%0A%3C/script%3E onload="this.contentDocument.open();this.contentDocument.write(    decodeURIComponent(this.getAttribute('data-html')));this.contentDocument.close();" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe></div></div>



### Avec des marqueurs

En reprenant le data frame vu juste avant (et en le stockant dans une variable), on peut créer une carte avec des marqueurs, qui affichent le nom de la station lorsqu'on clique dessus.


```python
df = pandas.DataFrame([{i:s['fields'][i] for i in s['fields'] if i!='station'} for s in records])
paris = folium.Map(location = centre, zoom_start = 12)
for station in [s['fields'] for s in records]:
    folium.Marker(station["coordonnees_geo"], 
                        popup = station["name"]).add_to(paris)
paris
```




<div style="width:100%;"><div style="position:relative;width:100%;height:0;padding-bottom:60%;"><span style="color:#565656">Make this Notebook Trusted to load map: File -> Trust Notebook</span><iframe src="about:blank" style="position:absolute;width:100%;height:100%;left:0;top:0;border:none !important;" data-html=%3C%21DOCTYPE%20html%3E%0A%3Chead%3E%20%20%20%20%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22content-type%22%20content%3D%22text/html%3B%20charset%3DUTF-8%22%20/%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20L_NO_TOUCH%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20L_DISABLE_3D%20%3D%20false%3B%0A%20%20%20%20%20%20%20%20%3C/script%3E%0A%20%20%20%20%0A%20%20%20%20%3Cstyle%3Ehtml%2C%20body%20%7Bwidth%3A%20100%25%3Bheight%3A%20100%25%3Bmargin%3A%200%3Bpadding%3A%200%3B%7D%3C/style%3E%0A%20%20%20%20%3Cstyle%3E%23map%20%7Bposition%3Aabsolute%3Btop%3A0%3Bbottom%3A0%3Bright%3A0%3Bleft%3A0%3B%7D%3C/style%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdn.jsdelivr.net/npm/leaflet%401.6.0/dist/leaflet.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//code.jquery.com/jquery-1.12.4.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js%22%3E%3C/script%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdn.jsdelivr.net/npm/leaflet%401.6.0/dist/leaflet.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css%22/%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20href%3D%22https%3A//cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css%22/%3E%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20initial-scale%3D1.0%2C%20maximum-scale%3D1.0%2C%20user-scalable%3Dno%22%20/%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cstyle%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%23map_e8a93654dfd14affa3d856675d42b762%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20relative%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20width%3A%20100.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20height%3A%20100.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200.0%25%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/style%3E%0A%20%20%20%20%20%20%20%20%0A%3C/head%3E%0A%3Cbody%3E%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22folium-map%22%20id%3D%22map_e8a93654dfd14affa3d856675d42b762%22%20%3E%3C/div%3E%0A%20%20%20%20%20%20%20%20%0A%3C/body%3E%0A%3Cscript%3E%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20map_e8a93654dfd14affa3d856675d42b762%20%3D%20L.map%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22map_e8a93654dfd14affa3d856675d42b762%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20center%3A%20%5B48.87%2C%202.35%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20crs%3A%20L.CRS.EPSG3857%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20zoom%3A%2012%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20zoomControl%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20preferCanvas%3A%20false%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29%3B%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20tile_layer_7b2d20c6ab6c4ae79257379a8eb62d25%20%3D%20L.tileLayer%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%22https%3A//%7Bs%7D.tile.openstreetmap.org/%7Bz%7D/%7Bx%7D/%7By%7D.png%22%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%22attribution%22%3A%20%22Data%20by%20%5Cu0026copy%3B%20%5Cu003ca%20href%3D%5C%22http%3A//openstreetmap.org%5C%22%5Cu003eOpenStreetMap%5Cu003c/a%5Cu003e%2C%20under%20%5Cu003ca%20href%3D%5C%22http%3A//www.openstreetmap.org/copyright%5C%22%5Cu003eODbL%5Cu003c/a%5Cu003e.%22%2C%20%22detectRetina%22%3A%20false%2C%20%22maxNativeZoom%22%3A%2018%2C%20%22maxZoom%22%3A%2018%2C%20%22minZoom%22%3A%200%2C%20%22noWrap%22%3A%20false%2C%20%22opacity%22%3A%201%2C%20%22subdomains%22%3A%20%22abc%22%2C%20%22tms%22%3A%20false%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_373b2edeca374d5ba787a5a886496b42%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8537558106%2C%202.33909580857%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_2453f2687b934ab2b11e0b8223dffef7%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_05f3aa854078465fa8c1ebc4d6cd342f%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_05f3aa854078465fa8c1ebc4d6cd342f%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EAndr%C3%A9%20Mazet%20-%20Saint-Andr%C3%A9%20des%20Arts%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_2453f2687b934ab2b11e0b8223dffef7.setContent%28html_05f3aa854078465fa8c1ebc4d6cd342f%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_373b2edeca374d5ba787a5a886496b42.bindPopup%28popup_2453f2687b934ab2b11e0b8223dffef7%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_b5a22be040484681b40573605b7b1480%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8408553118%2C%202.38755494356%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_63eca5657882421a9e9baf14bff078f3%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_b99df103c04f4697a4dc6a8b965373bf%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_b99df103c04f4697a4dc6a8b965373bf%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EMairie%20du%2012%C3%A8me%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_63eca5657882421a9e9baf14bff078f3.setContent%28html_b99df103c04f4697a4dc6a8b965373bf%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_b5a22be040484681b40573605b7b1480.bindPopup%28popup_63eca5657882421a9e9baf14bff078f3%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_66bf31f22fdd4808aded6a5c6440dbaf%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.851518815%2C%202.34367031604%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_4665ebca957d41f493cb36cfdd3f779c%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_a00521492e3f4d829e1e8b51209e05b5%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_a00521492e3f4d829e1e8b51209e05b5%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EHarpe%20-%20Saint-Germain%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_4665ebca957d41f493cb36cfdd3f779c.setContent%28html_a00521492e3f4d829e1e8b51209e05b5%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_66bf31f22fdd4808aded6a5c6440dbaf.bindPopup%28popup_4665ebca957d41f493cb36cfdd3f779c%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_79df260dd2434317a2a43baffa80fb9e%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.871044052%2C%202.36610446199%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_9fece4a46282441bbe74c479f05c0498%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_f95028100b384dacbcd8002eb7f1ba9f%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_f95028100b384dacbcd8002eb7f1ba9f%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EAlibert%20-%20Jemmapes%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_9fece4a46282441bbe74c479f05c0498.setContent%28html_f95028100b384dacbcd8002eb7f1ba9f%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_79df260dd2434317a2a43baffa80fb9e.bindPopup%28popup_9fece4a46282441bbe74c479f05c0498%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_8fee0b03d2484b25a68cf6f6ebe9f325%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8375258391%2C%202.33603540808%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_6145da5cb5464c98b2de204a436fc2da%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_4870a0c285304003a7513cbbaa9e36c3%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_4870a0c285304003a7513cbbaa9e36c3%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3ECassini%20-%20Denfert-Rochereau%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_6145da5cb5464c98b2de204a436fc2da.setContent%28html_4870a0c285304003a7513cbbaa9e36c3%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_8fee0b03d2484b25a68cf6f6ebe9f325.bindPopup%28popup_6145da5cb5464c98b2de204a436fc2da%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_ae7fb6f38e14492caf3c71e78338b006%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.876116%2C%202.288124%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_c6119a64532442b7b568933bf2a5e6c4%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_f1b3c5b383094dc9b73cb837c6f23b89%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_f1b3c5b383094dc9b73cb837c6f23b89%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EGrande%20Arm%C3%A9e%20-%20Brunel%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_c6119a64532442b7b568933bf2a5e6c4.setContent%28html_f1b3c5b383094dc9b73cb837c6f23b89%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_ae7fb6f38e14492caf3c71e78338b006.bindPopup%28popup_c6119a64532442b7b568933bf2a5e6c4%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_2599c80f3c3e40c990c98d9849e0b564%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8485632331%2C%202.32042182593%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_acbe1d8ceee443a597b0ac7e53294696%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_2b486be75b2549aa96b2e960a639c527%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_2b486be75b2549aa96b2e960a639c527%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EVaneau%20-%20S%C3%A8vres%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_acbe1d8ceee443a597b0ac7e53294696.setContent%28html_2b486be75b2549aa96b2e960a639c527%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_2599c80f3c3e40c990c98d9849e0b564.bindPopup%28popup_acbe1d8ceee443a597b0ac7e53294696%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_c6a499df2c874fbab96e2957fa17ab1f%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8450471666%2C%202.34946478513%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_2bbb869bf594454ea056805a8903aa77%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_fa7d96fa6af2416cafb4735bece3583e%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_fa7d96fa6af2416cafb4735bece3583e%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EThouin%20-%20Cardinal%20Lemoine%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_2bbb869bf594454ea056805a8903aa77.setContent%28html_fa7d96fa6af2416cafb4735bece3583e%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_c6a499df2c874fbab96e2957fa17ab1f.bindPopup%28popup_2bbb869bf594454ea056805a8903aa77%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_f4b4dc03d3044b03b14ffe4184192e97%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8331014995%2C%202.29938000441%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_efb2379e041a4c02b99fd80d301f50ec%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_1c505a6dc52345b39fb2ebf5658d4af1%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_1c505a6dc52345b39fb2ebf5658d4af1%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3EMorillons%20-%20Dantzig%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_efb2379e041a4c02b99fd80d301f50ec.setContent%28html_1c505a6dc52345b39fb2ebf5658d4af1%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_f4b4dc03d3044b03b14ffe4184192e97.bindPopup%28popup_efb2379e041a4c02b99fd80d301f50ec%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20marker_a2c1432e057b4bc2917da7fb689ec146%20%3D%20L.marker%28%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5B48.8309816593%2C%202.34816469252%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%29.addTo%28map_e8a93654dfd14affa3d856675d42b762%29%3B%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%20%20%20%20%20%20%20%20var%20popup_eb673068de6e4ac48f1e714214457d2c%20%3D%20L.popup%28%7B%22maxWidth%22%3A%20%22100%25%22%7D%29%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20html_934ade11d8d6463e9a70b00709dad596%20%3D%20%24%28%60%3Cdiv%20id%3D%22html_934ade11d8d6463e9a70b00709dad596%22%20style%3D%22width%3A%20100.0%25%3B%20height%3A%20100.0%25%3B%22%3ECroulebarde%20-%20Corvisart%3C/div%3E%60%29%5B0%5D%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20popup_eb673068de6e4ac48f1e714214457d2c.setContent%28html_934ade11d8d6463e9a70b00709dad596%29%3B%0A%20%20%20%20%20%20%20%20%0A%0A%20%20%20%20%20%20%20%20marker_a2c1432e057b4bc2917da7fb689ec146.bindPopup%28popup_eb673068de6e4ac48f1e714214457d2c%29%0A%20%20%20%20%20%20%20%20%3B%0A%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%0A%3C/script%3E onload="this.contentDocument.open();this.contentDocument.write(    decodeURIComponent(this.getAttribute('data-html')));this.contentDocument.close();" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe></div></div>



## A faire

- Ecrire le code permettant d'importer les informations de toutes les stations
- Stocker celles-ci dans un data frame `pandas`
- Représenter la distribution des capacités (`capacity`) des stations
- Faire de même en comparant les villes
- Afficher les stations sur une carte
- Pour chaque ville (`nom_arrondissement_communes`), calculer :
    - le nombre de stations
    - le nombre total de places (`capacity`)
    - le nombre total de vélos disponibles (`numbikesavailable`)
    - le nombre total de places disponibles (`numdocksavailable`) 
    - les coordonnées moyennes (pour permettre un affichage)
- Afficher un marqueur pour chaque ville avec les informations récupérées ci-dessous



```python

```
