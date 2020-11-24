
class: middle, center, inverse, title

# Initiation au NoSQL
## STID 2ème année

---

# Plan

Ce cours est une introduction aux nouveaux outils de gestion de bases de données massives NoSQL,
utilisés dans des environnements *Big Data*.

- Retour sur les BD relationnelles
- Contexte
- Typologie
- Compléments

---

# Retour sur les BD relationnelles

A l'heure actuelle, les BD classiquement utilisées sont les BD relationnelles :

- ensemble structuré d'informations (*structure explicite*) :
    - tables décrites par des attributs
    - reliées entre elles par des relations
- stockage persistant

--

Celles-ci sont gérées dans un SGBD permettant :

- l'accès aux fichiers sur le disque
- la création, la suppression, l'insertion, la modification et la recherche de valeurs (via **SQL**)
- la sécurisation et la gestion des accès concurrents

---

# Retour sur les BD relationnelles (suite)

Utilisées dans quasiment toutes les applications, elles ont pour avantages :

- Maturité importante des logiciels

- Documentation souvent très complète

- Performances globalement satisfaisantes

---

# Nouveau contexte

Mais un **nouveau contexte** est apparu :

- Applications basées sur le Web (Google, Yahoo, Amazon, LinkedIn, ...)
    - Utilisation de ressources non ou faiblement structurées (page web, textes, images, ...)
    - Explosion de la taille mémoire des données
- BD relationnelles classiques montrant leurs limites
    - Recherche dans des documents pas optimale
    - Capacités de stockage limités

--

Il a donc fallu développer de nouveaux outils avec les caractéristiques suivantes :

- Distribution des données pour résister à la montée en charge
- Gestion des données non structurées, complexes et hétérogènes (sans déclaration préalable du format des données - *structure implicite*)

---

# Premiers éléments pour la passage à l'échelle

On distingue deux grands types de passage à l'échelle

--
**Vertical scaling** (ou *scaling up*)

- on augmente la capacité de l'unique serveur

--
**Horizontal scaling** (ou *scaling out*)

- on ajoute des petits serveurs

---

# Passage à l'échelle

La première coûtant rapidement très chère, la deuxième solution est celle privilégiée, selon deux possibilités :

--
- Paradigme *Maître/Esclave*
    - Ecritures par le maître, lecture par les esclaves
    - Réplication directe des écritures aux esclaves (donc lecture éventuellement fausse car avant fin de la réplication)
    - temps de réplication pouvant être très long

--
- *Partitionnement*
    - Répartition des données dans les différents noeuds
    - Pas transparent : la répartition doit potentiellement être connue des applications
    - Problème sur les contraintes d'intégrité à prévoir

---

# Quelques autres possibilités

D'autres solutions sont envisageables :

- Plusieurs *Maîtres*, avec réplication
    - gestion d'accès concurrents

--
- Ne permettent que des `INSERT`, sans `UPDATE` ou `DELETE`
    - les données sont seulement inactivées, et non supprimées

--
- Limiter au maximum (voire les supprimer) les `JOIN`
    - dénormalisation des données
    - tables de taille (très) importantes

--
- Bases de données *In-Memory*
    - données stockées sur la **RAM**
    - suppression des temps d'accès aux disques

---

# Bases de données NoSQL

On parle maintenant de systèmes **NoSQL** (pour *Not Only SQL*)

- Classe de BD non relationnelles
    - Rien de nouveau réellement, existent depuis plus longtemps que les SBGDR

--
- Pas forcément de schéma fixe des données
- Pas forcément d'utilisation du concept de **jointure**

--
- Relaxation d'au moins une des propriétés **ACID** :
    - **A**tomicity
    - **C**onsistancy
    - **I**solation
    - **D**urability

---

# Bases de données NoSQL (suite)

Pourquoi on en (re)parle

- Explosion des réseaux sociaux

--
- Croissance de l'utilisation du stockage en ligne, distribué

--
- Grande dynamique de la communauté open-source

---

# Théorème CAP

Proposé par Brewer (2000), puis amélioré par la suite par Gilbert et Lynch.

--
Il existe trois propriétés essentielles d'un système :

- **Consistency** (cohérence) : les données sont cohérentes entre tous les noeuds
- **Availability** (disponibilité) : les données sont disponibles à n'importe quel moment
- **Partition Tolerance** (resistance au partitionnement) : le système continue de fonctionner même si un des noeuds est inopérant

--
**Problème** : Aucun système distribué ne peut respecter ces trois propriétés.

---

# Théorème CAP (suite)

On a donc le choix entre :

- **C + A** : un problème sur un des noeuds fait stopper le système (les SGBDR classiques sont plutôt dans cette catégorie)

--
- **C + P** : les données ne sont pas forcément disponibles au moment de la requête

--
- **A + P** : les données renvoyées ne sont pas toujours cohérentes

---

# Conséquence du passage à l'échelle

- Le passage à l'échelle implique (presque obligatoirement) le *partitionnement* des données
- Il faut donc faire le choix entre *cohérence* et *disponibilité*
- Dans pratiquement tous les systèmes, la disponibilité est préférée, et donc la cohérence stricte est abandonnée (d'où le non-respect de *ACID*)
- Heureusement, une réponse existe - **BASE** :
    - **Basically Available** : il y aura une réponse à toute requête, même si c'est du genre *failure* ou *inconsistent data*
    - **Soft State** : le système n'est pas consistent à tout instant
    - **Eventually consistent** : le système deviendra finalement consistent, lorsqu'il ne recevra plus d'entrées

Tous les systèmes actuels des géants du web sont dans cette configuration **BASE**

---

# Typologie NoSQL

Quatre principaux types NoSQL (voir [ce site web](http://nosql-database.org/))

Scofield a proposé un comparatif de ceux-ci sur quelques critères :

Data Model | Performance | Scalability | Flexibility | Complexity | Functionality
-|-|-|-|-|-
**Key-Value Store**            | high | high | high | none | variable (none)
**Document-Oriented Store** | high | variable (high) | high | low | variable (low)
**Column-Oriented Store**   | high | high | moderate | low | minimal
**Graph Database**          | variable | variable | high | high | graph theory
**Relational Database**     | variable | variable | low | moderate | relational algebra

---

# Key-Value Store

- Système à base de couples *clé / valeur*
- Tableau associant des clés à un espace mémoire où sont stockées les valeurs
- Une valeur peut être n'importe quel objet (chaîne, numérique, objet, ...)
- On ne peut requêter le système que sur la clé, et pas sur le contenu de la valeur
- Structure de la valeur inconnue par le système (c'est l'applicatif qui gère)
- Modèle assimilé à une table de hashage

Exemples :

- [DynamoDB](http://aws.amazon.com/dynamodb/)
- [Redis](http://redis.io/)
- [Voldemort](http://project-voldemort.com/)

---

# Key-Value Store (suite)

4 opérations possibles (**CRUD**) :

- `create(key, value)` : on associe une valeur à la clé
- `read(key)` : on renvoie la valeur qui correspond à la clé
- `update(key, value)` : on met à jour la valeur correspondant à la clé
- `delete(key)` : on supprime la valeur correspondant à la clé

---

# Key-Value Store (suite)

**Pour** :

- Interface de requêtage très simple et souvent accessible facilement, par n'importe quel langage
- Performances très élevées en lecture et en écriture

--
**Contre** :

- Modèle très (trop ?) simple
- Traitements complexes à faire du côté de l'application

---

# Document-Oriented Store

- Documents stockés dans un format clé/valeur, où la valeur est structuré
- Structure d'un document sous forme arborescente
- Pas de schéma pré-définis des documents, d'où une grande adaptabilité
- Interface de requêtage simple
- Contrairement au modèle *key-value*, on peut requêter sur les valeurs

Exemples :

- [MongoDB](http://www.mongodb.org/)
- [CouchDB](http://couchdb.apache.org/)
- [Elasticsearch](http://www.elasticsearch.org/)

---

# Document-Oriented Store (suite)

Un document est composé de champs associés à des valeurs (entier, numérique, chaîne, liste, tableau), dans un format type JSON ou XML

Grande hétérogénéité permise entre les documents, puisque la structure de ceux-ci n'est jamais pré-supposée

Pas de prototypage ou de modélisation des données en amont nécessaires

---

# Document-Oriented Store (suite)

**Pour**

- Modèle de données simple et puissant
- Mise à l'échelle aisée
- Requêtage sur le contenu des documents possible

--
**Contre**

- pas fait pour des données liées
- lenteur éventuelle sur des requêtes complexes

---

# Column-Oriented Store

- Données stockées par colonnes, et non par lignes
- A chaque valeur possible d'un attribut, on indique l'objet ayant cette valeur
(compression possible de la colonne si regroupement des valeurs identiques)
- Ajout d'une colonne simple, mais ajout d'une ligne complexe
- Modèle très efficace pour l'analyse de données

Exemples :

- [HBase](http://hbase.apache.org/)
- [Cassandra](https://cassandra.apache.org/)
- [Hypertable](http://hypertable.org/)

---

# Column-Oriented Store (suite)

Il existe deux sous-types de ce genre de système :

- Stockage des colonnes sans compression et de manière séparée
- Regroupement de plusieurs colonnes dans des familles de colonnes

Bien qu'ils soient étiquetés dans le même groupe pour les BD NoSQL, ces deux types ne répondent pas aux mêmes besoins et il est important de savoir ce qu'on veut faire pour choisir entre les deux

---

# Column-Oriented Store (suite)

**Pour**

- Prise en compte très facile de données *sparse* (type **B**) (pas de valeur `NULL` présente dans les données)
- Parfait pour les datawarehouses (type **A**) et pour les opérations de type agrégation
- Très grande flexibilité (type **B**)

--
**Contre**

- Pas adapté aux données reliées ou complexes
- Maintenance lourde

---

# Graph Database

- Modèle basé sur la théorie des graphes
- Adapté à la manipulation d'objets structuré en réseau : cartographie, réseaux sociaux, ...
- 2 composants principaux :
    - Base de stockage des objets (chaque objet est un noeud du graphe)
    - Description des relations entre objets (avec possiblement des propriétés)
- Capacité à manipuler des relations non-triviales et/ou variables

Exemples :

- [OrientDB](http://www.orientechnologies.com/)
- [Neo4J](http://www.neo4j.org/)
- [Infinite Graph](http://www.infinitegraph.com/)

---

# Graph Database (suite)

Typiquement adapté aux traitements des problématiques de type réseaux sociaux ou de cartographie, et donc beaucoup plus rapide qu'un SGBDR dans un tel cadre

Particulièrement adapté à ce qu'on appelle le *Web sémantique* et les moteurs de recommandation

--
**Pour**

- Très efficace pour les données liées
- Modèles d'interrogation établis et performant
- Capacité de gérer des (très) grosses quantités de données

--
**Contre**

- Partitionnement (de type *sharding*)

---

# Lequel prendre ?

- Faire un tour sur [db-engines.com](http://db-engines.com/en/) pour voir les BD existantes et les tendances du moment
- Benchmarking possible avec [YCSB](http://labs.yahoo.com/news/yahoo-cloud-serving-benchmark/)
    - *Yahoo! Cloud Serving Benchmark* (code disponible sur [GitHub](https://github.com/brianfrankcooper/YCSB/))
- Il y a un très bon [comparatif](http://www.altoros.com/vendor_independent_comparison_of_nosql_databases.html) fait par un cabinet indépendant
    - rapport disponible sur demande
    - basé sur *YCSB*
- Test possible à faible coût avec [Amazon Web Service](http://aws.amazon.com/)
- Réfléchir à l'utilisation à venir et surtout
    - Quelles requêtes je vais avoir besoin de faire ?
    - Quelles performances je veux avoir en lecture ? en écriture ?
- Ne pas forcément rejeter les BD relationnelles sans avoir peser le pour et le contre

---

# Utilisations principales par type de BD

- *Key-Value Store*
    - dépôt de données avec besoins de requêtage très simples
    - système de stockage de cache ou dÊ¼information de sessions distribuées
    - profils, préférences dÊ¼utilisateur, paniers d'achat, capteurs, logs

--
- *Column Store*
    - logging et analyse de clientèle (NetFlix)
    - optimisation de recherche (eBay)
    - BI (Adobe)
    - Analyse d'audience

---

# Utilisations principales par type de BD (suite)

- *Document Store*
    - Enregistrement dÊ¼événements
    - Systèmes de gestion de contenu (CMS)
    - Web analytique ou analytique temps-réel
    - Catalogue de produits
    - Systèmes d'exploitation

--
- *Graph database*
    - Moteurs de recommandation
    - BI, Semantic Web
    - Social Computing
    - Données géospatiales

    