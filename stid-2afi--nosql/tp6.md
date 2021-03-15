class: middle, center, inverse, title

# Dashboard dans R

## Explicatifs de la correction

---
## Dashboard dans R

On fait le choix d'utiliser 3 fichiers :
- `ui.R` : définition de l'interface utilisateur
- `server.R` : définition des outputs
- `global.R` : initialisation de l'application (et fin)

--
### Plan

1. Création de l'interface pour chaque onglet
1. Initialisation de l'application
1. Partie serveur pour l'onglet *Général*
  - Comment minimiser le temps de chargement de l'application
1. Partie serveur pour l'onglet *Carte*
  - Comment créer les requêtes MongoDB en direct

---

## Création de l'interface

Nous souhaitions 2 onglets :

- **Général** : donnant des informations globales sur les données
	- Distribution des scores selon le grade
	- Tableau du nombre de restaurants pour chaque grade (en ne regardant que la dernière visite)
	- Tableau du nombre de restaurants pour chaque quartier
	- Nombre de restaurants au total
	- Nombre d'évaluations
	- Nombre d'évaluations avec un score à 0
	- Nombre d'évaluations avec un score supérieur ou égal à 50
- **Carte** : représentant la localisation des restaurants, et qui permettra une recherche
  - Critères de recherche : *quartier* et *cuisine*

---

### Interface `ui.R`

<div class="code_moi code_gauche r hljs">
library(shiny)
library(shinydashboard)

shinyUI(dashboardPage(
    dashboardHeader(title = "Restaurants"),
    dashboardSidebar(
      sidebarMenu(
        menuItem("Général", tabName = "global", icon = icon("dashboard")),
        menuItem("Carte", tabName = "carte", icon = icon("map"))
      )
    ),
    dashboardBody(
      tabItems(
        tabItem(
          "global",
          ...
          )
        ),
        tabItem(
          "carte",
          ...
        )
      )
    ),
    title = "Restaurants"
))
</div>
<div class="code_moi code_droite">
Chargement librairies


Création de la page
Titre en haut à gauche
Définition du menu à gauche

Onglet "Général"
Onglet "Carte"


Définition du contenu de droite



On mettra donc ici tout ce qui
input/output pour l'onglet Général



On mettra donc ici tout ce qui
input/output pour l'onglet Carte


Titre de la page dans le navigateur
</div>
---

### Interface pour onglet *Général*

<div class="code_moi code_gauche r hljs" style="width: 25%;">
h2("Vue globale"),
fluidRow(
  column(
    width = 7,
    box(...)
  ),
  column(
    width = 3,
    box(...),
    box(...)
  ),
  column(
    width = 2,
    valueBox(...),
    valueBox(...),
    valueBox(...),
    valueBox(...)
  )
)
</div>
<div class="code_moi code_droite" style="width: 35%;">
Titre de niveau 2
Permet la gestion par colonnes
Première colonne

box 1 pour box plot



box 2 pour nb restaurants / grade
box 3 pour nb restaurants / quartier



valueBox 4 pour nb restaurants
valueBox 5 pour nb évaluations
valueBox 6 pour nb évaluations à 0
valueBox 7 pour nb évaluations >= 50
</div>

<div class="code_moi">
Au final, on veut une organisation
comme celle-ci

<svg width="300px" height="150px" viewBox="0 0 1200 400">
<rect x="1" y="1" width="690" height="300" fill="none" stroke-width="2" stroke="black"/>
<text x="350" y="150" font-size="60">1</text>

<rect x="701" y="1" width="290" height="160" fill="none" stroke-width="2" stroke="black"/>
<text x="850" y="80" font-size="60">2</text>
<rect x="701" y="171" width="290" height="160" fill="none" stroke-width="2" stroke="black"/>
<text x="850" y="250" font-size="60">3</text>

<rect x="1001" y="1" width="190" height="90" fill="none" stroke-width="2" stroke="black"/>
<text x="1100" y="60" font-size="60">4</text>
<rect x="1001" y="101" width="190" height="90" fill="none" stroke-width="2" stroke="black"/>
<text x="1100" y="160" font-size="60">5</text>
<rect x="1001" y="201" width="190" height="90" fill="none" stroke-width="2" stroke="black"/>
<text x="1100" y="260" font-size="60">6</text>
<rect x="1001" y="301" width="190" height="90" fill="none" stroke-width="2" stroke="black"/>
<text x="1100" y="360" font-size="60">7</text>
</svg>
</div>


---

### box

Largeur égale à 12, car les box doivent prendre toute la place dans leur propre colonne

<div class="code_moi code_gauche r hljs">
box(
  width = 12,
  title = "Répartition des scores selon le grade obtenu",
  footer = "plus le score est élevé, plus les infractions sont nombreuses",
  status = "info",
  solidHeader = TRUE,
  plotOutput("global_distri")
)
box(
  width = 12,
  title = "Nombre de restaurants par grades",
  solidHeader = TRUE,
  tableOutput("global_grade")
)
box(
  width = 12,
  title = "Nombre de restaurants par quartier",
  solidHeader = TRUE,
  tableOutput("global_quartier")
)
</div>
<div class="code_moi code_droite">
Cette box va donc recevoir le
graphique des boîtes à moustaches
- titre
- aide écrite en bas
- changement de couleur
- couleur de fond au niveau du titre
- place du graphique

Celle-ci recevra le tableau du nombre
de restaurants par grades (A, B, C...)
- titre
- couleur de fond au niveau du titre
- place du tableau

Celle-ci recevra le tableau du nombre
de restaurants par quartier
- titre
- couleur de fond au niveau du titre
- place du tableau
</div>


---

### valueBox

<div class="code_moi code_gauche r hljs" style="width: 45%">
valueBox(
  width = 12,
  value = nb_restaurants,
  subtitle = "restaurants dans la base",
  icon = icon("utensils"),
  color = "aqua"
)
valueBox(
  width = 12,
  value = nb_visites,
  subtitle = "évaluations",
  icon = icon("pencil-ruler"),
  color = "teal"
)
valueBox(
  width = 12,
  value = nb_visites_0,
  subtitle = "évaluations avec score = 0",
  icon = icon("thumbs-up"),
  color = "green"
)
valueBox(
  width = 12,
  value = nb_visites_bcp,
  subtitle = "évaluations avec score >= 50",
  icon = icon("thumbs-down"),
  color = "red"
)
</div>
<div class="code_moi code_droite">
Cette valueBox va recevoir le nombre de
restaurants
- variable à calculer avant
- ce qui écrit en dessous
- choix de l'icône
- choix de la couleur

Cette valueBox va recevoir le nombre
d'évaluations
- variable à calculer avant
- ce qui écrit en dessous
- choix de l'icône
- choix de la couleur

Cette valueBox va recevoir le nombre
d'évaluations avec un score de 0
- variable à calculer avant
- ce qui écrit en dessous
- choix de l'icône
- choix de la couleur

Cette valueBox va recevoir le nombre
d'évaluations avec un score >= 50
- variable à calculer avant
- ce qui écrit en dessous
- choix de l'icône
- choix de la couleur
</div>

---
## Initialisation

Comme indiqué précédemment, le script `global.R` permet de définir :

- Les opérations à réaliser en début d'application ;
- Ce qu'il faut faire à la fin de l'application dans la fonction `onStop()`

Nommé correctement et dans le même répertoire que les fichiers `ui.R` et `server.R`, ce fichier est pris en compte automatiquement par RStudio.

<div class="code_moi code_gauche r hljs" style="width: 50%;">
library(shiny)
library(shinydashboard)
library(leaflet)
library(mongolite)
library(geojsonio)
library(jsonlite)

load("data_global.RData")

</div>
<div class="code_moi code_droite">
Chargement de toutes les libraires
nécessaires





Chargement des variables créées
précédemment, pour l'onglet Général
</div>

---
### Connexion à Mongo

<div class="code_moi code_gauche r hljs" style="width: 50%;">
m = mongo(
  collection = "restaurants",
  db = "test"
)

onStop(function() {
  cat("Nettoyage à la fin de l'application\n")
  m$disconnect()
})
</div>
<div class="code_moi code_droite" style="width: 45%;">
Création de la connexion à MongoDB,
spécifiquement à la collection "restaurants"
dans la base "test"


Cette fonction permet donc de dire à R quoi
faire lorsque l'application s'arrête. Ici,
le seul point important est de se déconnecter
de MongoDB
</div>

On peut aussi envisager de ne réaliser la connexion que sur la durée d'une session :

- en déclarant la connexion dans la fonction passée en paramètre de `shinyServer()`
- avec la fonction `onSessionEnded()` pour gérer la fin de session

---
### Préparation pour les cartes

<div class="code_moi code_gauche r hljs">
borough = geojson_read("new-york-city-boroughs.geojson", what = "sp")


pal = colorFactor("Set2", m$distinct("borough"))


infos = function(n, q, c, a, g) {
  msg = sprintf("&lsaquo;strong&rsaquo;%s&lsaquo;/strong&rsaquo;
                 &lsaquo;ul&rsaquo;&lsaquo;li&rsaquo;Cuisine : %s&lsaquo;/li&lsaquo;
                    &lsaquo;li&rsaquo;Adresse : %s %s, %s&lsaquo;/li&rsaquo;
                    &lsaquo;li&rsaquo;Dernière évaluation
                        &lsaquo;ul&rsaquo;&lsaquo;li&rsaquo;Date : %s</li>
                            &lsaquo;li&rsaquo;Grade obtenu : %s&lsaquo;/li&rsaquo;
                            &lsaquo;li&rsaquo;Score : %s&lsaquo;/li&rsaquo;
                        &lsaquo;/ul&rsaquo;
                 &lsaquo;/ul&rsaquo;",
                 n, c, a$building, a$street, q, g$date, g$grade, g$score)
  return (msg)
}


</div>
<div class="code_moi code_droite">
Importantion des contours geojson
des quartiers

Création d'une palette de couleurs
basée sur les quartiers

Fonction permettant l'affichage
personnalisée des informations
d'un restaurant







n : nom du restaurant
q : quartier
c : cuisine
a : adresse (avec plusieurs champs)
g : dernière évaluation (idem a)
</div>

---
## Partie serveur pour l'onglet *Général*

<div class="code_moi code_gauche r hljs" style="width: 50%;">
output$global_distri <- renderPlot({
  print(plot_grade_score)
})

output$global_grade <- renderTable({
  df_grade_nb
})

output$global_quartier <- renderTable({
  df_quartier_nb
})
</div>
<div class="code_moi code_droite" style="width: 45%;">
Graphique boîte à moustaches



Tableau du nombre de restaurants par grade



Tableau du nombre de restaurants par quartier



</div>


Ici, nous avons fait le choix de pré-calculer le graphique, les data.frames et les valeurs affichées dans les valueBox (présentes dans le fichier `ui.R`) :

- Calcul *fixe* (pas de possibilité d'interaction avec l'utilisateur)
- Améliore la rapidité de chargement de l'application

> Il est préférable de stocker toutes les variables possibles, en amont dans un fichier de type **`RData`**

---
### Script de pré-calculs

Fichier `creation_RData_global.R`

<div class="code_moi code_gauche r hljs" style="width: 50%;">
library(mongolite)
library(tidyverse)

rm(list = ls())
m = mongo(
  collection = "restaurants",
  db = "test"
)

...

m$disconnect()
rm(m)

save.image(file = "data_global.RData")
rm(list = ls())
</div>
<div class="code_moi code_droite">
Chargement des librairies


Suppression de toutes les variables
Connexion à MongoDB




Calculs

Déconnexion à MongoDB
Suppression de la variable m (qu'on ne souhaite pas garder)

Sauvegarde des toutes les variables dans un fichier RData
Suppression de toutes les variables
</div>

---
### Pré-Calculs pour UI

<div class="code_moi code_gauche r hljs" style="width: 50%;">
nb_restaurants = m$count()

nb_visites = m$aggregate(
  '[
  { "$unwind": "$grades" },
  { "$group": { "_id": "tous", "nb": { "$sum": 1 }}}
]')$nb

nb_visites_0 = m$aggregate(
  '[
  { "$unwind": "$grades" },
  { "$match": { "grades.score": 0 }},
  { "$group": { "_id": "tous", "nb": { "$sum": 1 }}}
]')$nb

nb_visites_bcp = m$aggregate(
  '[
  { "$unwind": "$grades" },
  { "$match": { "grades.score": { "$gte": 50 } }},
  { "$group": { "_id": "tous", "nb": { "$sum": 1 }}}
]')$nb
</div>
<div class="code_moi code_droite">
Nb de restaurants

Nb d'évaluations





Nb d'évaluations avec score = 0






Nb d'évaluations avec score >= 50
</div>

---
### Pré-Calculs pour serveur

<div class="code_moi code_gauche r hljs">
df_grade_score = m$aggregate(
'[
  { "$unwind": "$grades" },
  { "$project": { "grade": "$grades.grade", "score": "$grades.score" }}
]')
plot_grade_score = ggplot(df_grade_score, aes(grade, score, fill = grade)) +
  geom_boxplot(show.legend = FALSE) +
  theme_minimal() +
  labs(x = "", y = "Score")

df_grade_nb = m$aggregate(
  '[
  { "$project" : {
    "eval": { "$arrayElemAt": [ "$grades", 0 ]}
  }},
  { "$sortByCount": "$eval.grade" },
  { "$sort": { "_id": 1 }},
  { "$project": { "Grade": "$_id", "Nb restaurants": "$count", "_id": 0 }}
  ]'
)

df_quartier_nb = m$aggregate(
  '[
  { "$sortByCount": "$borough" },
  { "$project": { "Quartier": "$_id", "Nb restaurants": "$count", "_id": 0 }}
  ]'
)
</div>
<div class="code_moi code_droite">
Récupération de tous les grades et
scores proprement (pour manipulation
plus simple dans R)


Création du graphique et stockage dans
une variable (possible uniquement avec
ggplot2)


Création du tableau avec les variables
- Grade
- Nb de restaurants pour chaque grade

Le 2ème project nous permet de
simplifier l'utilisation du résultat
dans R




Création du tableau avec les variables
- Quartier
- Nb de restaurants pour chaque quartier
</div>


---
## Partie serveur pour l'onglet *Carte*

Ici, nous n'avons qu'un seul output à gérer (la carte).

Pour simplifier le code (la lisibilité et le développement), nous utilisons une variable dite *réactive*

<div class="code_moi code_gauche r hljs">
restaurants_choisis <- reactive({
  ...
})
output$carte <- renderLeaflet({
  ...
})
</div>


---
### Requête adaptée pour Mongo

- Partie la plus compliquée
- Utilisation de la fonction `toJSON` de `jsonlite` pour créer la requête

<div class="code_moi code_gauche r hljs">
restaurants_choisis <- reactive({
  # on demande à MongoDB les restaurants selon les critères choisis
  requete = list(
    list(
      "$addFields" = list(
        "lng" = list("$arrayElemAt" = list("$address.coord", 0)),
        "lat" = list("$arrayElemAt" = list("$address.coord", 1)),
        "eval" = list("$arrayElemAt" = list("$grades", 0))
      )
    )
  )
  if (input$choix_quartier != "Tous") {
    requete[[length(requete) + 1]] = list("$match" = list("borough" = input$choix_quartier))
  }
  if (input$choix_cuisine != "Toutes") {
    requete[[length(requete) + 1]] = list("$match" = list("cuisine" = input$choix_cuisine))
  }
  requete_json = toJSON(requete, auto_unbox = T)
  res = m$aggregate(requete_json)
  return(res)
})
</div>
<div class="code_moi code_droite">
requete = liste des différentes
opérations du pipeline à envoyer
dans aggregate()

Ajoute de champs à chaque restaurant
- lng : longitude
- lat : latitude
- eval : dernière visite



Si on choisit un quartier, on ajoute
la sélection via un $match

Idem si on choisit une cuisine


Création de la requête en JSON
Envoi de la requête et récupération
du résultat
</div>

---
### Création de la carte

<div class="code_moi code_gauche r hljs">
output$carte <- renderLeaflet({
  res = restaurants_choisis()


  leaflet(res) %>% addTiles()  %>%
    setView(-74, 40.70, zoom = 10) %>%

    addPolygons(data = borough, stroke = TRUE, color = "black", weight = 2,
                fillOpacity = .5, fillColor = ~pal(name),
                label = ~name) %>%

    addMarkers(lng = ~lng, lat = ~lat,

               label = ~paste0(name, " (", lng, ", ", lat, ")"),

               popup = ~infos(name, borough, cuisine, address, eval),

               clusterOptions = markerClusterOptions()) %>%


    addLegend(pal = pal, values = ~borough, opacity = 1, title = "Quartier")
})

</div>
<div class="code_moi code_droite">

Récupération du résultat de la requête
dans MongoDB

Création de la carte et ajout des tuiles
Choix de la vue et du zoom

Ajout des quartiers en couleur



Ajout des markers par restaurant

Nom et coordonnées affichés au passage
de la souris
Utilisation de la fonction pour
affichage des infos (quand clic)
Groupes de markers créés
automatiquement

Ajout de la légende pour la couleur
des quartiers
</div>
