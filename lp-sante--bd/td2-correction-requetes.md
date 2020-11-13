# Modèle relationnel et SQL

## Répondez en SQL aux demandes suivantes :

#### Quels sont les sites de la civilisation "Maya" ?
```
SELECT DesSite
    FROM SITE
    WHERE LOWER(CivSite) = "maya";
```
ou incluant le terme "Maya"
```
SELECT DesSite
    FROM SITE
    WHERE CivSite LIKE "%maya%";
```


#### Quels sont les différents types d'objets possibles ?
```
SELECT DISTINCT TypeObj
    FROM OBJET;
```

#### Quels sont les auteurs de l'ouvrage "Mémoire sur quelques antiquités remarquables du département des Vosges" ?
```
SELECT NomAuteur, PrenomAuteur
    FROM OUVRAGE 
        INNER JOIN ECRIT USING (NumAuteur)
        INNER JOIN AUTEUR USING (NumOuv)
    WHERE TitreOuv = "Mémoire sur quelques antiquités remarquables du département des Vosges";
```
ou
```
SELECT NomAuteur, PrenomAuteur
    FROM OUVRAGE, ECRIT, AUTEUR
    WHERE OUVRAGE.NumOuv  = ECRIT.NumOuv
    AND   ECRIT.NumAuteur = AUTEUR.NumAuteur
    AND   TitreOuv = "Mémoire sur quelques antiquités remarquables du département des Vosges";
```


#### Quelles sont les villes où sont présents à la fois un musée et un site archéologique ?
```
SELECT DISTINCT ANomVille, MNomVille
    FROM VILLE
        INNER JOIN MUSEE USING (CodeVille)
        INNER JOIN LOCALISE USING (CodeVille);
```

```
SELECT MNomVille, ANomVille
    FROM VILLE
    WHERE CodeVille IN (SELECT CodeVille FROM MUSEE)
    AND CodeVille IN (SELECT CodeVille FROM LOCALISE);
```

#### A la date d'aujourd'hui, calculez le nombre d'objets exposés dans chaque musée.
```
SELECT CodeMusee, NomMusee, COUNT(*) AS "Nb Objet"
    FROM MUSEE 
        INNER JOIN EXPOSE USING (CodeMusee)
        INNER JOIN VILLE USING (CodeVille)
    WHERE DateDeb <= DATE("now")
    AND DateFin >= DATE("now")
    GROUP BY CodeMusee, NomMusee;
```
ou
```
SELECT CodeMusee, NomMusee, COUNT(*) AS "Nb Objet"
    FROM MUSEE
        INNER JOIN EXPOSE USING (CodeMusee)
        INNER JOIN VILLE USING (CodeVille)
    WHERE DATE("now") BETWEEN DateDeb AND DateFin
    GROUP BY CodeMusee, NomMusee;
```

#### Donnez les 5 auteurs ayant écrit le plus d'ouvrages.
```
SELECT NumAuteur, NomAuteur, PrenomAuteur, COUNT(*) AS "Nb Livres"
    FROM AUTEUR, ECRIT
    WHERE AUTEUR.NumAuteur = ECRIT.NumAuteur
    GROUP BY NumAuteur, NomAuteur, PrenomAuteur
    ORDER BY 4 DESC
    LIMIT 5;
```


##### Exemple sur COUNT()

- Compter le nombre de sites : `COUNT(*)`
- Compter le nombre de sites pour lesquels je connais la civilisation : `COUNT(CivSite)`
- Compter le nombre de civilisations différentes : `COUNT(DISTINCT CivSite)`

```
SELECT COUNT(*) AS "Nb sites",
    COUNT(CivSite) AS "Nb sites avec civ connue",
    COUNT(DISTINCT CivSite) AS "Nb civilisations"
  FROM SITE;
```


#### Donnez les 10 villes les plus référencées dans les ouvrages (via les sites donc).
```
SELECT MNomVille, ANomVille, COUNT(*) AS "Nb Références"
    FROM VILLE
        INNER JOIN LOCALISE USING (CodeVille)
        INNER JOIN REFSITE USING (CodeSite)
    GROUP BY MNomVille, ANomVille
    ORDER BY 3 DESC
    LIMIT 10;
```

#### Quels sont les objets n'ayant jamais été exposé dans le musée auquel ils appartiennent ?
```
SELECT DesObjet
    FROM OBJET
    WHERE NOT EXISTS (SELECT *
                        FROM EXPOSE
                        WHERE NumObj = OBJET.NumObj
                        AND   CodeMusee = OBJET.CodeMusee);
```
ou
```
SELECT DesObjet
    FROM OBJET
    WHERE NumObj NOT IN (SELECT NumObj
                            FROM EXPOSE
                            WHERE CodeMusee = OBJET.CodeMusee);
```

#### Quels sont les objets n'étant référencés dans aucun ouvrage ?
```
SELECT DesObj
    FROM OBJET
    WHERE NOT EXISTS (SELECT *
                        FROM REFOBJ
                        WHERE NumObj = OBJET.NumObj);
```
ou
```
SELECT DesObj
    FROM OBJET
    WHERE NumObj NOT IN (SELECT NumObj
                            FROM REFOBJ);
```

#### Existe-t'il un auteur ayant écrit sur toutes les civilisations connues ?
```
SELECT NumAuteur, NomAuteur, PrenomAuteur
    FROM AUTEUR, ECRIT, REFSITE, SITE
    WHERE AUTEUR.NumAuteur = ECRIT.NumAuteur
    AND   ECRIT.NumOuv = REFSITE.NumOuv
    AND   REFSITE.CodeSite = SITE.CodeSite
    GROUP BY NumAuteur, NomAuteur, PrenomAuteur
    HAVING COUNT(DISTINCT CivSite) = (SELECT COUNT(DISTINCT CivSite) 
                                        FROM SITE);
```
ou
```
SELECT NumAuteur, NomAuteur, PrenomAuteur
    FROM AUTEUR
    WHERE NOT EXISTS 
        (SELECT CivSite
            FROM SITE
            WHERE NOT IN
                (SELECT CivSite
                    FROM SITE
                        INNER JOIN REFISTE USING (CodeSite)
                        INNER JOIN ECRIT USING (NumOuv)
                    WHERE NumAuteur = AUTEUR.NumAuteur
                    AND CodeSite = SITE.CodeSite));
```

Ici, on cherche un auteur pour lequel il n'existe pas de civilisation dans la table site qui ne soit pas dans la liste des civilisations sur lequel cet auteur a écrit via les livres et les sites.

    