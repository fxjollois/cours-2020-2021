# Modèle relationnel et SQL

Nous reprenons le MCD de la société d'archéologie

<svg width="561" height="405" view_box="0 0 561 405" xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">\n\n<desc>Généré par Mocodo 2.3.7 le Mon, 05 Oct 2020 01:54:01</desc>

<rect id="frame" x="0" y="0" width="561" height="405" fill="#f7f7f7" stroke="#808080" stroke-width="1" stroke-dasharray="2,2"></rect>

<!-- Association Appartient -->
<line x1="169" y1="161" x2="58" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="112" y="140.253527251" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="169" y1="51" x2="58" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="102" y="43.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Appartient">
	<path d="M 83 26 a 14 14 90 0 1 14 14 V 51 h -78 V 40 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 97 51.0 v 11 a 14 14 90 0 1 -14 14 H 33 a 14 14 90 0 1 -14 -14 V 51.0 H 78" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="19" y="26" width="78" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="19" y1="51" x2="97" y2="51" stroke="#8073ac" stroke-width="1"></line>
	<text x="26" y="43.7" fill="#000000" font-family="Verdana" font-size="12">Appartient</text>
</g>

<!-- Association Edite -->
<line x1="299" y1="354" x2="401" y2="354" stroke="#8073ac" stroke-width="2"></line>
<text x="336" y="371.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="511" y1="354" x2="401" y2="354" stroke="#8073ac" stroke-width="2"></line>
<text x="455" y="371.0" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<g id="association-Edite">
	<path d="M 418 329 a 14 14 90 0 1 14 14 V 354 h -62 V 343 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 432 354.0 v 11 a 14 14 90 0 1 -14 14 H 384 a 14 14 90 0 1 -14 -14 V 354.0 H 62" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="370" y="329" width="62" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="370" y1="354" x2="432" y2="354" stroke="#8073ac" stroke-width="1"></line>
	<text x="385" y="346.7" fill="#000000" font-family="Verdana" font-size="12">Edite</text>
	<text x="377" y="371.8" fill="#000000" font-family="Verdana" font-size="12">DateEdi</text>
</g>

<!-- Association EstExposé -->
<line x1="169" y1="161" x2="58" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="111" y="178.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="169" y1="51" x2="58" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="132.665157063" y="102" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<g id="association-EstExposé">
	<path d="M 82 127 a 14 14 90 0 1 14 14 V 152 h -76 V 141 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 96 152.0 v 29 a 14 14 90 0 1 -14 14 H 34 a 14 14 90 0 1 -14 -14 V 152.0 H 76" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="20" y="127" width="76" height="68" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="20" y1="152" x2="96" y2="152" stroke="#8073ac" stroke-width="1"></line>
	<text x="27" y="144.7" fill="#000000" font-family="Verdana" font-size="12">EstExposé</text>
	<text x="27" y="169.8" fill="#000000" font-family="Verdana" font-size="12">DateDeb</text>
	<text x="27" y="186.8" fill="#000000" font-family="Verdana" font-size="12">DateFin</text>
</g>

<!-- Association RéférenceObj -->
<line x1="169" y1="161" x2="169" y2="262" stroke="#8073ac" stroke-width="2"></line>
<text x="174.0" y="229" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="299" y1="354" x2="169" y2="262" stroke="#8073ac" stroke-width="2"></line>
<text x="240" y="342.9700034" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-RéférenceObj">
	<path d="M 203 237 a 14 14 90 0 1 14 14 V 262 h -96 V 251 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 217 262.0 v 11 a 14 14 90 0 1 -14 14 H 135 a 14 14 90 0 1 -14 -14 V 262.0 H 96" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="121" y="237" width="96" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="121" y1="262" x2="217" y2="262" stroke="#8073ac" stroke-width="1"></line>
	<text x="128" y="254.7" fill="#000000" font-family="Verdana" font-size="12">RéférenceObj</text>
</g>

<!-- Association EstLocalisé -->
<line x1="401" y1="161" x2="511" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="439" y="137.929" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="401" y1="51" x2="511" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="443" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-EstLocalisé">
	<path d="M 538 26 a 14 14 90 0 1 14 14 V 51 h -82 V 40 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 552 51.0 v 11 a 14 14 90 0 1 -14 14 H 484 a 14 14 90 0 1 -14 -14 V 51.0 H 82" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="470" y="26" width="82" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="470" y1="51" x2="552" y2="51" stroke="#8073ac" stroke-width="1"></line>
	<text x="477" y="43.7" fill="#000000" font-family="Verdana" font-size="12">EstLocalisé</text>
</g>

<!-- Association Ecrit -->
<line x1="299" y1="354" x2="169" y2="354" stroke="#8073ac" stroke-width="2"></line>
<text x="240" y="371.0" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<line x1="58" y1="354" x2="169" y2="354" stroke="#8073ac" stroke-width="2"></line>
<text x="112" y="371.0" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<g id="association-Ecrit">
	<path d="M 176 329 a 14 14 90 0 1 14 14 V 354 h -42 V 343 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 190 354.0 v 11 a 14 14 90 0 1 -14 14 H 162 a 14 14 90 0 1 -14 -14 V 354.0 H 42" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="148" y="329" width="42" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="148" y1="354" x2="190" y2="354" stroke="#8073ac" stroke-width="1"></line>
	<text x="155" y="346.7" fill="#000000" font-family="Verdana" font-size="12">Ecrit</text>
</g>

<!-- Association Provient -->
<line x1="169" y1="161" x2="299" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="205" y="178.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="401" y1="161" x2="299" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="341" y="153.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Provient">
	<path d="M 318 136 a 14 14 90 0 1 14 14 V 161 h -66 V 150 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 332 161.0 v 11 a 14 14 90 0 1 -14 14 H 280 a 14 14 90 0 1 -14 -14 V 161.0 H 66" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="266" y="136" width="66" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="266" y1="161" x2="332" y2="161" stroke="#8073ac" stroke-width="1"></line>
	<text x="273" y="153.7" fill="#000000" font-family="Verdana" font-size="12">Provient</text>
</g>

<!-- Association RéférenceSite -->
<line x1="401" y1="161" x2="299" y2="262" stroke="#8073ac" stroke-width="2"></line>
<text x="341" y="192.698210575" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="299" y1="354" x2="299" y2="262" stroke="#8073ac" stroke-width="2"></line>
<text x="304.0" y="312" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-RéférenceSite">
	<path d="M 335 237 a 14 14 90 0 1 14 14 V 262 h -100 V 251 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 349 262.0 v 11 a 14 14 90 0 1 -14 14 H 263 a 14 14 90 0 1 -14 -14 V 262.0 H 100" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="249" y="237" width="100" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="249" y1="262" x2="349" y2="262" stroke="#8073ac" stroke-width="1"></line>
	<text x="256" y="254.7" fill="#000000" font-family="Verdana" font-size="12">RéférenceSite</text>
</g>

<!-- Association EstSitué -->
<line x1="169" y1="51" x2="299" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="214" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="401" y1="51" x2="299" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="337" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-EstSitué">
	<path d="M 318 26 a 14 14 90 0 1 14 14 V 51 h -66 V 40 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 332 51.0 v 11 a 14 14 90 0 1 -14 14 H 280 a 14 14 90 0 1 -14 -14 V 51.0 H 66" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="266" y="26" width="66" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="266" y1="51" x2="332" y2="51" stroke="#8073ac" stroke-width="1"></line>
	<text x="273" y="43.7" fill="#000000" font-family="Verdana" font-size="12">EstSitué</text>
</g>

<!-- Entity Ville -->
<g id="entity-Ville">
	<g id="frame-Ville">
		<rect x="364" y="9" width="74" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="364" y="34.0" width="74" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="364" y="9" width="74" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="364" y1="34" x2="438" y2="34" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="388" y="26.7" fill="#000000" font-family="Verdana" font-size="12">Ville</text>
	<text x="369" y="51.8" fill="#000000" font-family="Verdana" font-size="12">CodeVille</text>
	<line x1="369" y1="54" x2="426" y2="54" stroke="#000000" stroke-width="1"></line>
	<text x="369" y="68.8" fill="#000000" font-family="Verdana" font-size="12">ANomVille</text>
	<text x="369" y="85.8" fill="#000000" font-family="Verdana" font-size="12">MNomVille</text>
</g>

<!-- Entity Ouvrage -->
<g id="entity-Ouvrage">
	<g id="frame-Ouvrage">
		<rect x="267" y="320" width="64" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="267" y="345.0" width="64" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="267" y="320" width="64" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="267" y1="345" x2="331" y2="345" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="273" y="337.7" fill="#000000" font-family="Verdana" font-size="12">Ouvrage</text>
	<text x="272" y="362.8" fill="#000000" font-family="Verdana" font-size="12">NumOuv</text>
	<line x1="272" y1="365" x2="325" y2="365" stroke="#000000" stroke-width="1"></line>
	<text x="272" y="379.8" fill="#000000" font-family="Verdana" font-size="12">TitreOuv</text>
</g>

<!-- Entity Objet -->
<g id="entity-Objet">
	<g id="frame-Objet">
		<rect x="138" y="110" width="62" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="138" y="135.0" width="62" height="77" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="138" y="110" width="62" height="102" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="138" y1="135" x2="200" y2="135" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="152" y="127.7" fill="#000000" font-family="Verdana" font-size="12">Objet</text>
	<text x="143" y="152.7" fill="#000000" font-family="Verdana" font-size="12">NumObj</text>
	<line x1="143" y1="155" x2="193" y2="155" stroke="#000000" stroke-width="1"></line>
	<text x="143" y="169.8" fill="#000000" font-family="Verdana" font-size="12">DesObj</text>
	<text x="143" y="186.8" fill="#000000" font-family="Verdana" font-size="12">TypeObj</text>
	<text x="143" y="203.8" fill="#000000" font-family="Verdana" font-size="12">dateObj</text>
</g>

<!-- Entity Site -->
<g id="entity-Site">
	<g id="frame-Site">
		<rect x="368" y="119" width="66" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="368" y="144.0" width="66" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="368" y="119" width="66" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="368" y1="144" x2="434" y2="144" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="389" y="136.7" fill="#000000" font-family="Verdana" font-size="12">Site</text>
	<text x="373" y="161.8" fill="#000000" font-family="Verdana" font-size="12">CodeSite</text>
	<line x1="373" y1="164" x2="428" y2="164" stroke="#000000" stroke-width="1"></line>
	<text x="373" y="178.8" fill="#000000" font-family="Verdana" font-size="12">DesSite</text>
	<text x="373" y="195.8" fill="#000000" font-family="Verdana" font-size="12">Civsite</text>
</g>

<!-- Entity Musée -->
<g id="entity-Musée">
	<g id="frame-Musée">
		<rect x="129" y="17" width="80" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="129" y="42.0" width="80" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="129" y="17" width="80" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="129" y1="42" x2="209" y2="42" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="149" y="34.7" fill="#000000" font-family="Verdana" font-size="12">Musée</text>
	<text x="134" y="59.8" fill="#000000" font-family="Verdana" font-size="12">CodeMusee</text>
	<line x1="134" y1="62" x2="204" y2="62" stroke="#000000" stroke-width="1"></line>
	<text x="134" y="76.8" fill="#000000" font-family="Verdana" font-size="12">NomMusee</text>
</g>

<!-- Entity Auteur -->
<g id="entity-Auteur">
	<g id="frame-Auteur">
		<rect x="9" y="312" width="98" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="9" y="337.0" width="98" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="9" y="312" width="98" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="9" y1="337" x2="107" y2="337" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="37" y="329.7" fill="#000000" font-family="Verdana" font-size="12">Auteur</text>
	<text x="14" y="354.8" fill="#000000" font-family="Verdana" font-size="12">NumAuteur</text>
	<line x1="14" y1="357" x2="84" y2="357" stroke="#000000" stroke-width="1"></line>
	<text x="14" y="371.8" fill="#000000" font-family="Verdana" font-size="12">NomAuteur</text>
	<text x="14" y="388.8" fill="#000000" font-family="Verdana" font-size="12">PrenomAuteur</text>
</g>

<!-- Entity Editeur -->
<g id="entity-Editeur">
	<g id="frame-Editeur">
		<rect x="482" y="320" width="58" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="482" y="345.0" width="58" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="482" y="320" width="58" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="482" y1="345" x2="540" y2="345" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="489" y="337.7" fill="#000000" font-family="Verdana" font-size="12">Editeur</text>
	<text x="487" y="362.8" fill="#000000" font-family="Verdana" font-size="12">NumEdi</text>
	<line x1="487" y1="365" x2="535" y2="365" stroke="#000000" stroke-width="1"></line>
	<text x="487" y="379.8" fill="#000000" font-family="Verdana" font-size="12">DesEdi</text>
</g>
</svg>

## Demande

1. Ecrire le MRD à partir du MCD
1. Ecrire les requêtes SQL permettant de créer les tables de ce MRD
1. Répondez en SQL aux demandes suivantes :
    1. Quels sont les sites de la civilisation "Maya" ?
    1. Quels sont les différents types d'objets possibles ?
    1. Quels sont les auteurs de l'ouvrage "Mémoire sur quelques antiquités remarquables du département des Vosges" ?
    1. Quelles sont les villes où sont présents à la fois un musée et un site archéologique ?
    1. A la date d'aujourd'hui, calculez le nombre d'objets exposés dans chaque musée.
    1. Donnez les 5 auteurs ayant écrits le plus d'ouvrages.
    1. Donnez les 10 villes les plus référencées dans les ouvrages (via les sites donc).
    1. Quels sont les objets n'ayant jamais été exposé dans le musée auquel ils appartiennent ?
    1. Quels sont les objets n'étant référencés dans aucun ouvrage ?
    1. Existe-t'il un auteur ayant écrit sur toutes les civilisations connues ?