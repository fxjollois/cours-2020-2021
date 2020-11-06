# Modèle relationnel et SQL

## Ecrire les requêtes SQL permettant de créer les tables de ce MRD

- VILLE(<u>CodeVille</u>, ANomVille, MNomVille)
```
CREATE TABLE VILLE (
    CodeVille INT NOT NULL PRIMARY KEY,
    ANomVille VARCHAR2(100),
    MNomVille VARCHAR2(100)
);
```

- MUSEE(<u>CodeMusee</u>, NomMusee, #CodeVille)
```
CREATE TABLE MUSEE (
    CodeMusee INT NOT NULL PRIMARY KEY,
    NomMusee VARCHAR2(100),
    CodeVille INT REFERENCES VILLE
);
```
ou
```
CREATE TABLE MUSEE (
    CodeMusee INT NOT NULL PRIMARY KEY,
    NomMusee VARCHAR2(100),
    CodeVille INT,
    FOREIGN KEY (CodeVille) REFERENCES VILLE
);
```

- SITE(<u>CodeSite</u>, DesSite, CivSite)
```
CREATE TABLE SITE (
    CodeSite INT NOT NULL PRIMARY KEY,
    DesSite VARCHAR2(100),
    CivSite VARCHAR2(100)
);
```

- OBJET(<u>NumObj</u>, DesObj, TypeObj, DateObj, #CodeMusee, #CodeSite)
```
CREATE TABLE OBJET (
    NumObj INT NOT NULL PRIMARY KEY,
    DesObj VARCHAR2(100),
    TypeObj VARCHAR2(50),
    DateObj DATE,
    CodeMusee INT REFERENCES MUSEE,
    CodeSite INT REFERENCES SITE
);
```

- AUTEUR(<u>NumAuteur</u>, NomAuteur, PrenomAuteur)
```
CREATE TABLE AUTEUR (
    NumAuteur INT NOT NULL PRIMARY KEY,
    NomAuteur VARCHAR2(50),
    PrenomAuteur VARCHAR2(50)
);
```

- EDITEUR(<u>NumEdi</u>, DesEdi)
```
CREATE TABLE EDITEUR (
    NumEdi INT NOT NULL PRIMARY KEY,
    DesEdi VARCHAR2(100)
);
```

- OUVRAGE(<u>NumOuv</u>, TitreOuv, #NumEdi)
```
CREATE TABLE OUVRAGE (
    NumOuv INT NOT NULL PRIMARY KEY,
    TitreOuv VARCHAR2(100),
    NumEdi INT REFERENCES EDITEUR
);
```

- LOCALISE(<u>#CodeVille, #CodeSite</u>)
```
CREATE TABLE LOCALISE (
    CodeVille INT NOT NULL REFERENCES VILLE,
    CodeSite INT NOT NULL REFERENCES SITE,
    PRIMARY KEY (CodeVille, CodeSite)
);
```

- EXPOSE(<u>#NumObj, #CodeMusee, DateDeb</u>, DateFin)
```
CREATE TABLE EXPOSE (
    NumObj INT NOT NULL REFERENCES OBJET,
    CodeMusee INT NOT NULL REFERENCES MUSEE,
    DateDeb DATE NOT NULL,
    DateFin DATE,
    PRIMARY KEY (NumObj, CodeMusee, DateDeb)
);
```

- REFOBJ(<u>#NumOuv, #NumObj</u>)
```
CREATE TABLE REFOBJ (
    NumOuv INT NOT NULL REFERENCES OUVRAGE,
    NumObj INT NOT NULL REFERENCES OBJET,
    PRIMARY KEY (NumOuv, NumObj)
);
```

- REFSITE(<u>#NumOuv, #CodeSite</u>)
```
CREATE TABLE REFSITE (
    NumOuv INT NOT NULL REFERENCES OUVRAGE,
    CodeSite INT NOT NULL REFERENCES SITE,
    PRIMARY KEY (NumOuv, CodeSite)
);
```

- ECRIT(<u>#NumAuteur, #NumOuv</u>)
```
CREATE TABLE ECRIT (
    NumAuteur INT NOT NULL REFERENCES AUTEUR,
    NumOuv INT NOT NULL REFERENCES OUVRAGE,
    PRIMARY KEY (NumAuteur, NumOuv)
);
```


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
            INNER JOIN ECRIT ON OUVRAGE.NumOuv = ECRIT.NumOuv
            INNER JOIN AUTEUR ON ECRIT.NumAuteur = AUTEUR.NumAuteur
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
SELECT MNomVille, ANomVille
    FROM VILLE
    WHERE CodeVille IN (SELECT CodeVille FROM MUSEE)
    AND CodeVille IN (SELECT CodeVille FROM LOCALISE);
```

#### A la date d'aujourd'hui, calculez le nombre d'objets exposés dans chaque musée.
```
SELECT CodeMusee, NomMusee, COUNT(*) AS "Nb Objet"
    FROM MUSEE INNER JOIN EXPOSE ON MUSEE.CodeMusee = EXPOSE.CodeMusee
    WHERE DateDeb <= DATE("now")
    AND DateFin >= DATE("now")
    GROUP BY CodeMusee, NomMusee;
```
ou
```
SELECT CodeMusee, NomMusee, COUNT(*) AS "Nb Objet"
    FROM MUSEE INNER JOIN EXPOSE ON MUSEE.CodeMusee = EXPOSE.CodeMusee
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

#### Donnez les 10 villes les plus référencées dans les ouvrages (via les sites donc).
```
SELECT MNomVille, ANomVille, COUNT(*) AS "Nb Références"
    FROM VILLE, LOCALISE, REFSITE
    WHERE VILLE.CodeVille = LOCALISE.CodeVille
    AND   LOCALISE.CodeSite = REFSITE.CodeSite
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
            WHERE NOT EXISTS 
                (SELECT *
                    FROM ECRIT, REFSITE
                    WHERE ECRIT.NumOuv = REFSITE.NumOuv
                    AND ECRIT.NumAuteur = AUTEUR.NumAuteur
                    AND CodeSite = SITE.CodeSite));
```

    
