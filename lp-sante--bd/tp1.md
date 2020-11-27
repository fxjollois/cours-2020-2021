# Langage SQL

Nous allons travailler avec [SQLite](https://www.sqlite.org/) via cette [application web](https://sqliteonline.com/). 

Nous utiliserons la base de données [Sakila](http://fxjollois.github.io/donnees/sakila.sqlite) (à télécharger, puis à charger dans l'appli web), dont vous trouverez le MRD ci-dessous. Il représente la BD d'une chaîne de location de DVDs (oui, oui, cela a existé fut un temps pas si lointain...) Quelques remarques :

- La base de données est restreinte (uniquement 1000 films par exemple) ;
- Ce qui a pour effet que, pour certaines questions, le résultat sera limité (*A vous d'être sûr de faire des requêtes correctes*) ;
- Un film peut bien évidemment être en plusieurs exemplaires.

![MRD sakila](https://fxjollois.github.io/cours-sql/bases/sakila.png)

## Questions

- Quels sont les actrices ayant comme prénom "Penelope" ?
- Quels sont les clients inactifs (`active` est égal à 0) ?
- Quels sont les 10 films les plus longs ?
- Quels films ont le mot "dinosaur" dans leur titre ?
- Quels sont les films ayant le mot "scientist" dans leur description ? 

- Afficher pour chaque film son titre, son "âge", sa durée en heures (de type "1h43")
- Calculer pour chaque location (`rental`) la durée en jours de celle-ci

- Pour chaque type de film (`rating`), donner le nombre de films
- Quelle est l'année où il y a le plus de films sortis ?
- Quels sont les 10 prénoms d'acteur/actrice les plus utilisés ?

- Pour chaque catégorie, donner le nombre de films
- Quels sont les 10 films dont on a le plus de copies en stock ?
- Dans quels pays y a t'il des locations ?
- Quels sont les 10 acteurs ayant joué dans le plus de films ?
- Donner pour chaque client le nombre de ses réservations ?
- Donner le montant total des paiements par pays
- Quels sont les 10 films les plus rentables (qui ont généré le plus gros montant de paiement) ?
- Quels sont les prix moyens de location par catégorie ?

- Existe-t'il des clients ayant le même nom et le même prénom que des acteurs ? (si oui, lesquels)
- Existe-t'il un pays (si oui le(s)quel(s)) pour lequel nous avons des clients, sans avoir de magasins ?
- Combien y a t'il de réservations en moyenne par client ? (donner aussi le minimum et le maximum)
- Des clients louent parfois plusieurs fois le même film : quel est le record ? Donner le nom des clients et des films concernés.

- Combien de films avons-nous pour chaque nombre de copies de films ?
- Partant du principe que le prix de remplacement (`replacement_cost`) est une estimation du coût du film, et que pour chaque location, le bénéfice est de seulement 10% du prix, quels sont les 10 films les plus rentables ? les 10 les moins rentables ?
- Existe-t'il  (si oui le(s)quel(s)) un paiement pour lequel le numéro de client est différent du numéro de client de la location associée ?
- Existe-t'il  (si oui le(s)quel(s)) des clients qui ont commandé dans plusieurs magasins ?
- Est-il possible qu'un film puisse être loué à des prix différents ? Si oui, explorez un la table pour essayer de comprendre pourquoi.