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


