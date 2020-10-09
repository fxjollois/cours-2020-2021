# Modèle relationnel et SQL


## Ecrire le MRD à partir du MCD

- VILLE(<u>CodeVille</u>, ANomVille, MNomVille)
- MUSEE(<u>CodeMusee</u>, NomMusee, #CodeVille)
- SITE(<u>CodeSite</u>, DesSite, CivSite)
- OBJET(<u>NumObj</u>, DesObj, TypeObj, DateObj, #CodeMusee, #CodeSite)
- AUTEUR(<u>NumAuteur</u>, NomAuteur, PrenomAuteur)
- EDITEUR(<u>NumEdi</u>, DesEdi)
- OUVRAGE(<u>NumOuv</u>, TitreOuv, #NumEdi)

- LOCALISE(<u>#CodeVille, #CodeSite</u>)
- EXPOSE(<u>#NumObj, #CodeMusee, DateDeb</u>, DateFin)
- REFOBJ(<u>#NumOuv, #NumObj</u>)
- REFSITE(<u>#NumOuv, #CodeSite</u>)
- ECRIT(<u>#NumAuteur, #NumOuv</u>)



1. Ecrire les requêtes SQL permettant de créer les tables de ce MRD
1. Répondez en SQL aux demandes suivantes :
    1. Quels sont les sites de la civilisation "Maya" ?
    1. Quels sont les différents types d'objets possibles ?
    1. Quels sont les auteurs de l'ouvrage "Mémoire sur quelques antiquités remarquables du département des Vosges" ?
    1. Quelles sont les villes où sont présents à la fois un musée et un site archéologique
    1. A la date d'aujourd'hui, calculez le nombre d'objets exposés dans chaque musée.
    1. Donnez les 5 auteurs ayant écrits le plus d'ouvrages
    1. Donnez les 10 villes les plus référencées dans les ouvrages (via les sites donc) ?
    1. Quels sont les objets n'ayant jamais été exposé dans le musée auquel ils appartiennent ?
    1. Quels sont les ouvrages n'étant référencés dans aucun ouvrage ?
    1. Existe-t'il un auteur ayant écrit sur toutes les civilisations connues ?
    
