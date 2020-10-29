# Evaluation

## Création de tables



## Requêtage

Nous allons utiliser la base de données **Chinook** [disponible ici au format SQLite](https://fxjollois.github.io/cours-sql/bases/Chinook.sqlite) (à télécharger donc, et à utiliser sur [SQLiteOnLine](https://sqliteonline.com/)).

![MRD Chinook](https://fxjollois.github.io/cours-sql/bases/Chinook.png)

1.	Fournissez une requête indiquant les clients qui ne se trouvent pas aux États-Unis (uniquement leur nom complet, leur identifiant client et leur pays) 
2.	Fournissez une requête montrant les employés qui sont des agents commerciaux.
3.	Fournissez une requête affichant une liste unique de pays de facturation (la table invoice est la table des factures).
4.	Quels sont les morceaux pour lesquels le nom du compositeur n'est pas renseigné ? 
5.	Quels sont les artistes n'ayant pas d'album dans la Base de données. 
6.	Fournissez une requête montrant les factures des clients du Canada (indiquer le nom complet du client, l'identifiant de la facture, la date de la facture et le pays de facturation).
7.	Fournissez une requête indiquant les factures associées à chaque agent commercial (identifié par l’attribut SupportRepId dans la table Customer). Le résultat doit inclure le nom complet de l’agent en plus des informations sur la facture.
8.	Quels sont les artistes dont au moins un album contient au moins un morceau du genre ‘Classical’
9.	Pour chaque morceau, on veut le titre du morceau, de l'album, de l'artiste, le genre et le média utilisé. Le tout trié par artiste puis album puis morceau. 
10.	Fournissez une requête indiquant le total de la facture, le nom du client, le pays et le nom de l'agent de vente pour toutes les factures et tous les clients.
11.	Afficher le montant moyen des factures par pays, arrondi à deux décimales. Ordonnés par ordre décroissant du montant
12.	Fournissez une requête qui inclut le nom du morceau acheté et le nom de l'artiste en complément de chaque ligne de facture.
13.	Fournissez une requête indiquant le nombre total de morceaux pour chaque playlist. Le nom de la playlist doit être inclus dans la table résultante.
14.	Combien de factures y avait-il et quel est le total des ventes entre 2009 et 2011? (le champ InvoiceDate est de type DataTime)
15.	Fournissez une requête qui affiche le nombre de lignes pour chaque facture en plus des autres informations sur la facture  (en vous basant sur la table InvoiceLine). 
16.	Fournissez une requête indiquant le nombre de factures par pays et l’afficher comme « # of invoices » et ordonnées par ordre décroissant du nombre de factures
17.	Fournissez une requête indiquant le total des ventes réalisées par chaque agent commercial.
18.	Combien de morceau pour chaque genre et chaque média
19.	Quel agent commercial a réalisé le plus gros chiffre d’affaires en 2010 ?
20.	Fournissez une requête indiquant le total des ventes par pays. Les clients de quel pays ont dépensé le plus ?
21.	Fournissez une requête indiquant le morceau le plus acheté en 2013.
22.	Quels sont les employés ayant au moins un client dans tous les pays ? 
