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
    NumEdi INT REFERENCES EDITEUR,
    DateEdi DATE
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


