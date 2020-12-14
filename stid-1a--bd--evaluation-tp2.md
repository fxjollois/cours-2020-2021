# Bases de données - TP noté 2

## Données

Nous allons ré-utiliser la base de données **`world`**. Pour pouvoir exécuter les requêtes, merci de suivre la procédure suivante :

- Aller sur l'<a href="https://fxjollois.github.io/cours-sql" target="_blank">application</a>
- Choisir **Requêtage direct**
- Choisir **`world`**

Vous pouvez exécuter toutes les requêtes sur cette base maintenant. Pour avoir la liste des tables, vous pouvez bien évidemment cliquer sur le bouton **Tables**. Vous verrez qu'il y en a trois :

- **`Country`** : liste des pays du monde (tel qu'il était à la fin des années 90), avec en particulier un `code` par pays (**clé primaire** donc)
- **`City`** : liste de villes importantes, avec un identifiant `ID` (**clé primaire** de la table) et le code du pays correspondant `CountryCode`
- **`CountryLanguage`** : liste des langues les plus parlées dans chaque pays, avec une **clé primaire** double (code du pays `CountryCode` et langue `Language` - plusieurs langues pouvant être parlées dans un même pays)
    - L'attribut `IsOfficial` indique si la langue est officielle (`T`) dans le pays ou non (`F`)
    - L'attribut `Percentage` indique le pourcentage d'habitants parlant principalement cette langue

En cliquant sur le bouton **Schéma**, vous aurez une vision plus synthétique des tables.


## Rendu

Vous devez utiliser le formulaire ci-dessous pour envoyer vos réponses. Attention à bien écrire votre nom et votre prénom (ainsi que votre groupe). Tout étudiant n'ayant pas envoyé de formulaire aura la note de 0.


<strong><a href="https://forms.microsoft.com/Pages/ResponsePage.aspx?id=motuTZeCNEOC9mhoHTSpT3koJdJ7tCVLohD99orTllhUODVOSlM3TTNKTkVCRjdYRFY0VU9FR080Ry4u" target="_blank">LIEN VERS LE FORMULAIRE</a></strong>