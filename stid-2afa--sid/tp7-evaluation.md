# TP7 : Evaluation

## Contexte

En se basant sur cette <a href="https://plnkr.co/edit/tRSrVuaeWGCWxxfV?preview" target="_blank">base de travail</a>, répondez au formulaire ci-dessous. Cette base est un tableau de bord sur un data-mart (simple), avec quelques interactions. Voici quelques informations compémentaires :

- Nous nous basons sur le data-mart utilisé dans le [TP3](https://fxjollois.github.io/cours-2020-2021/stid-2afa--sid/tp3)
![MRD CA](https://fxjollois.github.io/cours-sql/bases/ca.png)
- Les données ont déjà été *moulinées* pour créer les fichiers de données suivants :
    - `evol_ca.csv` : Evolution du CA total pour chaque mois entre 2003 et 2004
    - `evol_ca_dpt.csv` : Détails par départements sur chaque mois entre 2003 et 2004
    - `dpt_ca.csv` : CA total par département sur toute la période
    - `dpt_details.csv` : CA total par département, par groupe et par sous-groupe
    - `prov_ca.csv` : CA total par provenance sur toute la période
    - `prov_details.csv` : CA total par provenance et par département
- Le framework [Pure CSS](https://purecss.io/) est utilisé pour la mise en forme du tableau de bord.

Voici la version classique du rendu de cette base de travail : [dashboard](tp7-base/)

## Demandes

Merci d'y répondre dans le formulaire !

Voici les questions auxquelles vous devez répondre

#### Analyse 

Dans le fichier `index.html`
- Pourquoi doit-on mettre ce qu'il y a sur les lignes 87 et 88 à la fin du fichier ?

Dans le fichier `script.css`
- A quoi servent les lignes 4 à 9 ?
- Pourquoi avons-nous besoin des lignes 10 à 12 ?
- A quoi servent les lignes 13 à 18 ?

Dans le fichier `script_onglets.js`
- A quoi sert la ligne 4, et pourquoi en avons-nous besoin ?
- A quoi servent les lignes 6 et 7 ?
- A quoi servent les lignes 8 et 9 ?

Dans le fichier `script_chargement.js`
- A quoi sert la ligne 5 ?
- Que fait-on sur la ligne 8 ?
- Que fait la fonction exactement `tickFormat()` ligne 46 ?

#### Demandes

- Dans l'onglet **Global**, on veut que lorsqu'une souris passe sur un département (dans le graphique), cette zone soit plus visible que les autres zones. Vous devez utiliser l'opacité, en n'utilisant que du CSS. Quoi ajouter dans le fichier `style.css` ?
- Dans l'onglet **Départements**, on veut le département sur lequel on a cliqué soit plus visible que les autres, en changeant la couleur de fond de la ligne. Quoi ajouter dans le fichier `script_chargement.js` ?
- Dans l'onglet **Provenances**, on veut faire la même chose pour les provenances que pour les départements (tableau + graphique/tableau lors du clic sur une provenance). Quoi ajouter dans les fichiers `index.html` et `script_chargement.js` ?



<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeM0Hto8yQbEQGACkixq9nRdmuzs6lpUYvgRk9tbFfa9KtNXg/viewform?embedded=true" width="640" height="2000" frameborder="0" marginheight="0" marginwidth="0">Chargement…</iframe>

