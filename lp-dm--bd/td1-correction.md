# Modélisation d'une base de données

## La société française d'archéologie

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


## SI d’une bibliothèque

<svg width="512" height="330" view_box="0 0 512 330" xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">\n\n<desc>Généré par Mocodo 2.3.7 le Mon, 05 Oct 2020 01:55:38</desc>

<rect id="frame" x="0" y="0" width="512" height="330" fill="#f7f7f7" stroke="#808080" stroke-width="1" stroke-dasharray="2,2"></rect>

<!-- Association Est de categorie -->
<line x1="198" y1="161" x2="65" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="132" y="178.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="65" y1="43" x2="65" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="70.0" y="94" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est de categorie">
	<path d="M 107 136 a 14 14 90 0 1 14 14 V 161 h -112 V 150 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 121 161.0 v 11 a 14 14 90 0 1 -14 14 H 23 a 14 14 90 0 1 -14 -14 V 161.0 H 112" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="9" y="136" width="112" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="9" y1="161" x2="121" y2="161" stroke="#8073ac" stroke-width="1"></line>
	<text x="16" y="153.7" fill="#000000" font-family="Verdana" font-size="12">Est de categorie</text>
</g>

<!-- Association Est de type -->
<line x1="325" y1="279" x2="325" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="330.0" y="229" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="325" y1="43" x2="325" y2="161" stroke="#8073ac" stroke-width="2"></line>
<text x="330.0" y="94" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est de type">
	<path d="M 353 136 a 14 14 90 0 1 14 14 V 161 h -84 V 150 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 367 161.0 v 11 a 14 14 90 0 1 -14 14 H 297 a 14 14 90 0 1 -14 -14 V 161.0 H 84" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="283" y="136" width="84" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="283" y1="161" x2="367" y2="161" stroke="#8073ac" stroke-width="1"></line>
	<text x="290" y="153.7" fill="#000000" font-family="Verdana" font-size="12">Est de type</text>
</g>

<!-- Association Dure -->
<line x1="325" y1="43" x2="198" y2="43" stroke="#8073ac" stroke-width="2"></line>
<text x="255" y="60.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="65" y1="43" x2="198" y2="43" stroke="#8073ac" stroke-width="2"></line>
<text x="119" y="60.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Dure">
	<path d="M 236 18 a 14 14 90 0 1 14 14 V 43 h -104 V 32 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 250 43.0 v 11 a 14 14 90 0 1 -14 14 H 160 a 14 14 90 0 1 -14 -14 V 43.0 H 104" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="146" y="18" width="104" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="146" y1="43" x2="250" y2="43" stroke="#8073ac" stroke-width="1"></line>
	<text x="183" y="35.7" fill="#000000" font-family="Verdana" font-size="12">Dure</text>
	<text x="153" y="60.8" fill="#000000" font-family="Verdana" font-size="12">DureeEmprunt</text>
</g>

<!-- Association EstMembre -->
<line x1="325" y1="279" x2="451" y2="279" stroke="#8073ac" stroke-width="2"></line>
<text x="372" y="296.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="451" y1="161" x2="451" y2="279" stroke="#8073ac" stroke-width="2"></line>
<text x="456.0" y="220" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-EstMembre">
	<path d="M 478 254 a 14 14 90 0 1 14 14 V 279 h -82 V 268 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 492 279.0 v 11 a 14 14 90 0 1 -14 14 H 424 a 14 14 90 0 1 -14 -14 V 279.0 H 82" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="410" y="254" width="82" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="410" y1="279" x2="492" y2="279" stroke="#8073ac" stroke-width="1"></line>
	<text x="417" y="271.7" fill="#000000" font-family="Verdana" font-size="12">EstMembre</text>
</g>

<!-- Association Emprunte -->
<line x1="325" y1="279" x2="198" y2="279" stroke="#8073ac" stroke-width="2"></line>
<text x="256" y="296.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="198" y1="161" x2="198" y2="279" stroke="#8073ac" stroke-width="2"></line>
<text x="203.0" y="246" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Emprunte">
	<path d="M 226 254 a 14 14 90 0 1 14 14 V 279 h -84 V 268 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 240 279.0 v 11 a 14 14 90 0 1 -14 14 H 170 a 14 14 90 0 1 -14 -14 V 279.0 H 84" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="156" y="254" width="84" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="156" y1="279" x2="240" y2="279" stroke="#8073ac" stroke-width="1"></line>
	<text x="168" y="271.7" fill="#000000" font-family="Verdana" font-size="12">Emprunte</text>
	<text x="163" y="296.8" fill="#000000" font-family="Verdana" font-size="12">DateRetour</text>
</g>

<!-- Entity TypeLecteur -->
<g id="entity-TypeLecteur">
	<g id="frame-TypeLecteur">
		<rect x="282" y="9" width="86" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="282" y="34.0" width="86" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="282" y="9" width="86" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="282" y1="34" x2="368" y2="34" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="287" y="26.7" fill="#000000" font-family="Verdana" font-size="12">TypeLecteur</text>
	<text x="287" y="51.8" fill="#000000" font-family="Verdana" font-size="12">NumType</text>
	<line x1="287" y1="54" x2="345" y2="54" stroke="#000000" stroke-width="1"></line>
	<text x="287" y="68.8" fill="#000000" font-family="Verdana" font-size="12">LibType</text>
</g>

<!-- Entity Categorie -->
<g id="entity-Categorie">
	<g id="frame-Categorie">
		<rect x="16" y="9" width="98" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="16" y="34.0" width="98" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="16" y="9" width="98" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="16" y1="34" x2="114" y2="34" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="35" y="26.7" fill="#000000" font-family="Verdana" font-size="12">Categorie</text>
	<text x="21" y="51.8" fill="#000000" font-family="Verdana" font-size="12">NumCategorie</text>
	<line x1="21" y1="54" x2="108" y2="54" stroke="#000000" stroke-width="1"></line>
	<text x="21" y="68.8" fill="#000000" font-family="Verdana" font-size="12">LibCategorie</text>
</g>

<!-- Entity Livre -->
<g id="entity-Livre">
	<g id="frame-Livre">
		<rect x="158" y="93" width="80" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="158" y="118.0" width="80" height="111" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="158" y="93" width="80" height="136" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="158" y1="118" x2="238" y2="118" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="183" y="110.7" fill="#000000" font-family="Verdana" font-size="12">Livre</text>
	<text x="163" y="135.7" fill="#000000" font-family="Verdana" font-size="12">NumLivre</text>
	<line x1="163" y1="138" x2="222" y2="138" stroke="#000000" stroke-width="1"></line>
	<text x="163" y="152.7" fill="#000000" font-family="Verdana" font-size="12">TitreLivre</text>
	<text x="163" y="169.8" fill="#000000" font-family="Verdana" font-size="12">NomAuteur</text>
	<text x="163" y="186.8" fill="#000000" font-family="Verdana" font-size="12">Editeur</text>
	<text x="163" y="203.8" fill="#000000" font-family="Verdana" font-size="12">NbDispo</text>
	<text x="163" y="220.8" fill="#000000" font-family="Verdana" font-size="12">Edition</text>
</g>

<!-- Entity Lecteur -->
<g id="entity-Lecteur">
	<g id="frame-Lecteur">
		<rect x="283" y="237" width="84" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="283" y="262.0" width="84" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="283" y="237" width="84" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="283" y1="262" x2="367" y2="262" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="302" y="254.7" fill="#000000" font-family="Verdana" font-size="12">Lecteur</text>
	<text x="288" y="279.8" fill="#000000" font-family="Verdana" font-size="12">NumLecteur</text>
	<line x1="288" y1="282" x2="362" y2="282" stroke="#000000" stroke-width="1"></line>
	<text x="288" y="296.8" fill="#000000" font-family="Verdana" font-size="12">Nom</text>
	<text x="288" y="313.8" fill="#000000" font-family="Verdana" font-size="12">Adresse</text>
</g>

<!-- Entity Société -->
<g id="entity-Société">
	<g id="frame-Société">
		<rect x="399" y="119" width="104" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="399" y="144.0" width="104" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="399" y="119" width="104" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="399" y1="144" x2="503" y2="144" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="428" y="136.7" fill="#000000" font-family="Verdana" font-size="12">Société</text>
	<text x="404" y="161.8" fill="#000000" font-family="Verdana" font-size="12">IdSociete</text>
	<line x1="404" y1="164" x2="462" y2="164" stroke="#000000" stroke-width="1"></line>
	<text x="404" y="178.8" fill="#000000" font-family="Verdana" font-size="12">NomSociete</text>
	<text x="404" y="195.8" fill="#000000" font-family="Verdana" font-size="12">AdresseSociete</text>
</g>
</svg>

## Gestion des Stocks

<svg width="553" height="288" view_box="0 0 553 288" xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">\n\n<desc>Généré par Mocodo 2.3.7 le Mon, 05 Oct 2020 02:12:25</desc>

<rect id="frame" x="0" y="0" width="553" height="288" fill="#f7f7f7" stroke="#808080" stroke-width="1" stroke-dasharray="2,2"></rect>

<!-- Association Contient -->
<line x1="278" y1="245" x2="172" y2="245" stroke="#8073ac" stroke-width="2"></line>
<text x="211" y="262.0" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<path d="M55 144 C 113.851794736 142.17975443 152.851794736 175.846421097 172 245" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="101" y="178.660969095" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Contient">
	<path d="M 192 220 a 14 14 90 0 1 14 14 V 245 h -68 V 234 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 206 245.0 v 11 a 14 14 90 0 1 -14 14 H 152 a 14 14 90 0 1 -14 -14 V 245.0 H 68" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="138" y="220" width="68" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="138" y1="245" x2="206" y2="245" stroke="#8073ac" stroke-width="1"></line>
	<text x="146" y="237.7" fill="#000000" font-family="Verdana" font-size="12">Contient</text>
	<text x="145" y="262.8" fill="#000000" font-family="Verdana" font-size="12">Quantité</text>
</g>

<!-- Association Appartient -->
<path d="M55 144 C 113.424795992 145.32560346 152.424795992 111.658936794 172 43" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="101" y="119.339030905" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="278" y1="43" x2="172" y2="43" stroke="#8073ac" stroke-width="2"></line>
<text x="216" y="60.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Appartient">
	<path d="M 197 18 a 14 14 90 0 1 14 14 V 43 h -78 V 32 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 211 43.0 v 11 a 14 14 90 0 1 -14 14 H 147 a 14 14 90 0 1 -14 -14 V 43.0 H 78" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="133" y="18" width="78" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="133" y1="43" x2="211" y2="43" stroke="#8073ac" stroke-width="1"></line>
	<text x="140" y="35.7" fill="#000000" font-family="Verdana" font-size="12">Appartient</text>
</g>

<!-- Association Est composé -->
<path d="M55 144 C 12.3333333333 115.666666667 12.3333333333 82.0 55 43" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="30.0" y="102" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<path d="M55 144 C 97.6666666667 115.666666667 97.6666666667 82.0 55 43" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="58.0" y="102" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est composé">
	<path d="M 87 18 a 14 14 90 0 1 14 14 V 43 h -92 V 32 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 101 43.0 v 11 a 14 14 90 0 1 -14 14 H 23 a 14 14 90 0 1 -14 -14 V 43.0 H 92" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="9" y="18" width="92" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="9" y1="43" x2="101" y2="43" stroke="#8073ac" stroke-width="1"></line>
	<text x="16" y="35.7" fill="#000000" font-family="Verdana" font-size="12">Est composé</text>
</g>

<!-- Association S'approvisionne -->
<line x1="515" y1="144" x2="398" y2="144" stroke="#8073ac" stroke-width="2"></line>
<text x="460" y="161.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="278" y1="144" x2="398" y2="144" stroke="#8073ac" stroke-width="2"></line>
<text x="315" y="161.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-S'approvisionne">
	<path d="M 440 119 a 14 14 90 0 1 14 14 V 144 h -112 V 133 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 454 144.0 v 11 a 14 14 90 0 1 -14 14 H 356 a 14 14 90 0 1 -14 -14 V 144.0 H 112" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="342" y="119" width="112" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="342" y1="144" x2="454" y2="144" stroke="#8073ac" stroke-width="1"></line>
	<text x="349" y="136.7" fill="#000000" font-family="Verdana" font-size="12">S'approvisionne</text>
</g>

<!-- Association Se substitue -->
<path d="M55 144 C 96.3333333333 172.333333333 96.3333333333 206.0 55 245" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="58.0" y="195" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<path d="M55 144 C 12.3333333333 172.333333333 12.3333333333 206.0 55 245" fill="none" stroke="#8073ac" stroke-width="2"></path>
<text x="30.0" y="195" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Se substitue">
	<path d="M 86 220 a 14 14 90 0 1 14 14 V 245 h -90 V 234 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 100 245.0 v 11 a 14 14 90 0 1 -14 14 H 24 a 14 14 90 0 1 -14 -14 V 245.0 H 90" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="10" y="220" width="90" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="10" y1="245" x2="100" y2="245" stroke="#8073ac" stroke-width="1"></line>
	<text x="17" y="237.7" fill="#000000" font-family="Verdana" font-size="12">Se substitue</text>
</g>

<!-- Association Est stocké -->
<line x1="55" y1="144" x2="172" y2="144" stroke="#8073ac" stroke-width="2"></line>
<text x="101" y="161.0" fill="#b35806" font-family="Verdana" font-size="12">1,N</text>
<line x1="278" y1="144" x2="172" y2="144" stroke="#8073ac" stroke-width="2"></line>
<text x="219" y="161.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est stocké">
	<path d="M 197 119 a 14 14 90 0 1 14 14 V 144 h -78 V 133 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 211 144.0 v 11 a 14 14 90 0 1 -14 14 H 147 a 14 14 90 0 1 -14 -14 V 144.0 H 78" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="133" y="119" width="78" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="133" y1="144" x2="211" y2="144" stroke="#8073ac" stroke-width="1"></line>
	<text x="140" y="136.7" fill="#000000" font-family="Verdana" font-size="12">Est stocké</text>
</g>

<!-- Association DroitApp -->
<line x1="515" y1="144" x2="398" y2="43" stroke="#8073ac" stroke-width="2"></line>
<text x="460" y="129.626781061" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="278" y1="43" x2="398" y2="43" stroke="#8073ac" stroke-width="2"></line>
<text x="318" y="60.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-DroitApp">
	<path d="M 418 9 a 14 14 90 0 1 14 14 V 34 h -68 V 23 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 432 34.0 v 29 a 14 14 90 0 1 -14 14 H 378 a 14 14 90 0 1 -14 -14 V 34.0 H 68" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="364" y="9" width="68" height="68" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="364" y1="34" x2="432" y2="34" stroke="#8073ac" stroke-width="1"></line>
	<text x="371" y="26.7" fill="#000000" font-family="Verdana" font-size="12">DroitApp</text>
	<text x="371" y="51.8" fill="#000000" font-family="Verdana" font-size="12">DateDéb</text>
	<text x="371" y="68.8" fill="#000000" font-family="Verdana" font-size="12">DateFin</text>
</g>

<!-- Association Passe -->
<line x1="515" y1="144" x2="398" y2="245" stroke="#8073ac" stroke-width="2"></line>
<text x="459" y="167.373218939" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="278" y1="245" x2="398" y2="245" stroke="#8073ac" stroke-width="2"></line>
<text x="323" y="262.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<g id="association-Passe">
	<path d="M 409 220 a 14 14 90 0 1 14 14 V 245 h -50 V 234 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 423 245.0 v 11 a 14 14 90 0 1 -14 14 H 387 a 14 14 90 0 1 -14 -14 V 245.0 H 50" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="373" y="220" width="50" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="373" y1="245" x2="423" y2="245" stroke="#8073ac" stroke-width="1"></line>
	<text x="380" y="237.7" fill="#000000" font-family="Verdana" font-size="12">Passe</text>
</g>

<!-- Entity Catégorie -->
<g id="entity-Catégorie">
	<g id="frame-Catégorie">
		<rect x="243" y="9" width="70" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="243" y="34.0" width="70" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="243" y="9" width="70" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="243" y1="34" x2="313" y2="34" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="248" y="26.7" fill="#000000" font-family="Verdana" font-size="12">Catégorie</text>
	<text x="248" y="51.8" fill="#000000" font-family="Verdana" font-size="12">NumCat</text>
	<line x1="248" y1="54" x2="298" y2="54" stroke="#000000" stroke-width="1"></line>
	<text x="248" y="68.8" fill="#000000" font-family="Verdana" font-size="12">LibCat</text>
</g>

<!-- Entity Client -->
<g id="entity-Client">
	<g id="frame-Client">
		<rect x="486" y="102" width="58" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="486" y="127.0" width="58" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="486" y="102" width="58" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="486" y1="127" x2="544" y2="127" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="497" y="119.7" fill="#000000" font-family="Verdana" font-size="12">Client</text>
	<text x="491" y="144.8" fill="#000000" font-family="Verdana" font-size="12">NumClt</text>
	<line x1="491" y1="147" x2="537" y2="147" stroke="#000000" stroke-width="1"></line>
	<text x="491" y="161.8" fill="#000000" font-family="Verdana" font-size="12">Nom</text>
	<text x="491" y="178.8" fill="#000000" font-family="Verdana" font-size="12">Prenom</text>
</g>

<!-- Entity Matériel -->
<g id="entity-Matériel">
	<g id="frame-Matériel">
		<rect x="14" y="110" width="82" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="14" y="135.0" width="82" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="14" y="110" width="82" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="14" y1="135" x2="96" y2="135" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="30" y="127.7" fill="#000000" font-family="Verdana" font-size="12">Matériel</text>
	<text x="19" y="152.8" fill="#000000" font-family="Verdana" font-size="12">NumMat</text>
	<line x1="19" y1="155" x2="70" y2="155" stroke="#000000" stroke-width="1"></line>
	<text x="19" y="169.8" fill="#000000" font-family="Verdana" font-size="12">Designation</text>
</g>

<!-- Entity Commande -->
<g id="entity-Commande">
	<g id="frame-Commande">
		<rect x="238" y="211" width="80" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="238" y="236.0" width="80" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="238" y="211" width="80" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="238" y1="236" x2="318" y2="236" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="243" y="228.7" fill="#000000" font-family="Verdana" font-size="12">Commande</text>
	<text x="243" y="253.8" fill="#000000" font-family="Verdana" font-size="12">NumCmd</text>
	<line x1="243" y1="256" x2="300" y2="256" stroke="#000000" stroke-width="1"></line>
	<text x="243" y="270.8" fill="#000000" font-family="Verdana" font-size="12">DateCmd</text>
</g>

<!-- Entity Magasin -->
<g id="entity-Magasin">
	<g id="frame-Magasin">
		<rect x="246" y="102" width="64" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="246" y="127.0" width="64" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="246" y="102" width="64" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="246" y1="127" x2="310" y2="127" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="253" y="119.7" fill="#000000" font-family="Verdana" font-size="12">Magasin</text>
	<text x="251" y="144.8" fill="#000000" font-family="Verdana" font-size="12">NumMag</text>
	<line x1="251" y1="147" x2="305" y2="147" stroke="#000000" stroke-width="1"></line>
	<text x="251" y="161.8" fill="#000000" font-family="Verdana" font-size="12">DesMag</text>
	<text x="251" y="178.8" fill="#000000" font-family="Verdana" font-size="12">Adresse</text>
</g>
</svg>

## Gestion d’une compagnie aérienne

<svg width="523" height="422" view_box="0 0 523 422" xmlns="http://www.w3.org/2000/svg" xmlns:link="http://www.w3.org/1999/xlink">\n\n<desc>Généré par Mocodo 2.3.7 le Mon, 05 Oct 2020 02:29:50</desc>

<rect id="frame" x="0" y="0" width="523" height="422" fill="#f7f7f7" stroke="#808080" stroke-width="1" stroke-dasharray="2,2"></rect>

<!-- Association Décolle -->
<line x1="385" y1="143" x2="484" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="427" y="160.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="484" y1="51" x2="484" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="489.0" y="110" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Décolle">
	<path d="M 500 118 a 14 14 90 0 1 14 14 V 143 h -60 V 132 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 514 143.0 v 11 a 14 14 90 0 1 -14 14 H 468 a 14 14 90 0 1 -14 -14 V 143.0 H 60" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="454" y="118" width="60" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="454" y1="143" x2="514" y2="143" stroke="#8073ac" stroke-width="1"></line>
	<text x="461" y="135.7" fill="#000000" font-family="Verdana" font-size="12">Décolle</text>
</g>

<!-- Association Est breveté -->
<line x1="51" y1="253" x2="51" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="56.0" y="203" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="51" y1="51" x2="51" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="56.0" y="93" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est breveté">
	<path d="M 79 118 a 14 14 90 0 1 14 14 V 143 h -84 V 132 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 93 143.0 v 11 a 14 14 90 0 1 -14 14 H 23 a 14 14 90 0 1 -14 -14 V 143.0 H 84" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="9" y="118" width="84" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="9" y1="143" x2="93" y2="143" stroke="#8073ac" stroke-width="1"></line>
	<text x="16" y="135.7" fill="#000000" font-family="Verdana" font-size="12">Est breveté</text>
</g>

<!-- Association Est utilisé -->
<line x1="277" y1="253" x2="277" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="282.0" y="194" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="277" y1="51" x2="277" y2="143" stroke="#8073ac" stroke-width="2"></line>
<text x="282.0" y="93" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est utilisé">
	<path d="M 300 118 a 14 14 90 0 1 14 14 V 143 h -74 V 132 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 314 143.0 v 11 a 14 14 90 0 1 -14 14 H 254 a 14 14 90 0 1 -14 -14 V 143.0 H 74" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="240" y="118" width="74" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="240" y1="143" x2="314" y2="143" stroke="#8073ac" stroke-width="1"></line>
	<text x="247" y="135.7" fill="#000000" font-family="Verdana" font-size="12">Est utilisé</text>
</g>

<!-- Association Atterrit -->
<line x1="385" y1="143" x2="385" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="390.0" y="101" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="484" y1="51" x2="385" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="427" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Atterrit">
	<path d="M 400 26 a 14 14 90 0 1 14 14 V 51 h -58 V 40 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 414 51.0 v 11 a 14 14 90 0 1 -14 14 H 370 a 14 14 90 0 1 -14 -14 V 51.0 H 58" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="356" y="26" width="58" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="356" y1="51" x2="414" y2="51" stroke="#8073ac" stroke-width="1"></line>
	<text x="363" y="43.7" fill="#000000" font-family="Verdana" font-size="12">Atterrit</text>
</g>

<!-- Association Réalise -->
<line x1="277" y1="253" x2="385" y2="253" stroke="#8073ac" stroke-width="2"></line>
<text x="329" y="270.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="385" y1="143" x2="385" y2="253" stroke="#8073ac" stroke-width="2"></line>
<text x="390.0" y="194" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Réalise">
	<path d="M 400 228 a 14 14 90 0 1 14 14 V 253 h -58 V 242 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 414 253.0 v 11 a 14 14 90 0 1 -14 14 H 370 a 14 14 90 0 1 -14 -14 V 253.0 H 58" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="356" y="228" width="58" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="356" y1="253" x2="414" y2="253" stroke="#8073ac" stroke-width="1"></line>
	<text x="363" y="245.7" fill="#000000" font-family="Verdana" font-size="12">Réalise</text>
</g>

<!-- Association Est -->
<line x1="51" y1="253" x2="51" y2="371" stroke="#8073ac" stroke-width="2"></line>
<text x="56.0" y="312" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="158" y1="371" x2="51" y2="371" stroke="#8073ac" stroke-width="2"></line>
<text x="96" y="388.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est">
	<path d="M 54 346 a 14 14 90 0 1 14 14 V 371 h -34 V 360 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 68 371.0 v 11 a 14 14 90 0 1 -14 14 H 48 a 14 14 90 0 1 -14 -14 V 371.0 H 34" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="34" y="346" width="34" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="34" y1="371" x2="68" y2="371" stroke="#8073ac" stroke-width="1"></line>
	<text x="41" y="363.7" fill="#000000" font-family="Verdana" font-size="12">Est</text>
</g>

<!-- Association Est de type -->
<line x1="277" y1="51" x2="158" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="221" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">1,1</text>
<line x1="51" y1="51" x2="158" y2="51" stroke="#8073ac" stroke-width="2"></line>
<text x="86" y="68.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Est de type">
	<path d="M 186 26 a 14 14 90 0 1 14 14 V 51 h -84 V 40 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 200 51.0 v 11 a 14 14 90 0 1 -14 14 H 130 a 14 14 90 0 1 -14 -14 V 51.0 H 84" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="116" y="26" width="84" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="116" y1="51" x2="200" y2="51" stroke="#8073ac" stroke-width="1"></line>
	<text x="123" y="43.7" fill="#000000" font-family="Verdana" font-size="12">Est de type</text>
</g>

<!-- Association Réserve -->
<line x1="385" y1="371" x2="277" y2="371" stroke="#8073ac" stroke-width="2"></line>
<text x="325" y="388.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="277" y1="253" x2="277" y2="371" stroke="#8073ac" stroke-width="2"></line>
<text x="282.0" y="321" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<g id="association-Réserve">
	<path d="M 295 346 a 14 14 90 0 1 14 14 V 371 h -64 V 360 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 309 371.0 v 11 a 14 14 90 0 1 -14 14 H 259 a 14 14 90 0 1 -14 -14 V 371.0 H 64" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="245" y="346" width="64" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="245" y1="371" x2="309" y2="371" stroke="#8073ac" stroke-width="1"></line>
	<text x="252" y="363.7" fill="#000000" font-family="Verdana" font-size="12">Réserve</text>
</g>

<!-- Association Est affecté -->
<line x1="51" y1="253" x2="158" y2="253" stroke="#8073ac" stroke-width="2"></line>
<text x="91" y="270.0" fill="#b35806" font-family="Verdana" font-size="12">0,N</text>
<line x1="277" y1="253" x2="158" y2="253" stroke="#8073ac" stroke-width="2"></line>
<text x="204" y="270.0" fill="#b35806" font-family="Verdana" font-size="12">0,6</text>
<g id="association-Est affecté">
	<path d="M 184 228 a 14 14 90 0 1 14 14 V 253 h -80 V 242 a 14 14 90 0 1 14 -14" fill="#b2abd2" stroke="#b2abd2" stroke-width="0"></path>
	<path d="M 198 253.0 v 11 a 14 14 90 0 1 -14 14 H 132 a 14 14 90 0 1 -14 -14 V 253.0 H 80" fill="#d8daeb" stroke="#d8daeb" stroke-width="0"></path>
	<rect x="118" y="228" width="80" height="50" fill="none" rx="14" stroke="#8073ac" stroke-width="2"></rect>
	<line x1="118" y1="253" x2="198" y2="253" stroke="#8073ac" stroke-width="1"></line>
	<text x="125" y="245.7" fill="#000000" font-family="Verdana" font-size="12">Est affecté</text>
</g>

<!-- Entity Passager -->
<g id="entity-Passager">
	<g id="frame-Passager">
		<rect x="352" y="329" width="66" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="352" y="354.0" width="66" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="352" y="329" width="66" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="352" y1="354" x2="418" y2="354" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="357" y="346.7" fill="#000000" font-family="Verdana" font-size="12">Passager</text>
	<text x="357" y="371.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="357" y1="374" x2="406" y2="374" stroke="#000000" stroke-width="1"></line>
	<text x="357" y="388.8" fill="#000000" font-family="Verdana" font-size="12">Nom</text>
	<text x="357" y="405.8" fill="#000000" font-family="Verdana" font-size="12">Prénom</text>
</g>

<!-- Entity Vol -->
<g id="entity-Vol">
	<g id="frame-Vol">
		<rect x="230" y="202" width="94" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="230" y="227.0" width="94" height="77" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="230" y="202" width="94" height="102" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="230" y1="227" x2="324" y2="227" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="267" y="219.7" fill="#000000" font-family="Verdana" font-size="12">Vol</text>
	<text x="235" y="244.7" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="235" y1="247" x2="284" y2="247" stroke="#000000" stroke-width="1"></line>
	<text x="235" y="261.8" fill="#000000" font-family="Verdana" font-size="12">Date</text>
	<text x="235" y="278.8" fill="#000000" font-family="Verdana" font-size="12">Heure départ</text>
	<text x="235" y="295.8" fill="#000000" font-family="Verdana" font-size="12">Heure arrivée</text>
</g>

<!-- Entity Personnel -->
<g id="entity-Personnel">
	<g id="frame-Personnel">
		<rect x="16" y="211" width="70" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="16" y="236.0" width="70" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="16" y="211" width="70" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="16" y1="236" x2="86" y2="236" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="21" y="228.7" fill="#000000" font-family="Verdana" font-size="12">Personnel</text>
	<text x="21" y="253.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="21" y1="256" x2="70" y2="256" stroke="#000000" stroke-width="1"></line>
	<text x="21" y="270.8" fill="#000000" font-family="Verdana" font-size="12">Nom</text>
	<text x="21" y="287.8" fill="#000000" font-family="Verdana" font-size="12">Prénom</text>
</g>

<!-- Entity Avion -->
<g id="entity-Avion">
	<g id="frame-Avion">
		<rect x="247" y="26" width="60" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="247" y="51.0" width="60" height="25" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="247" y="26" width="60" height="50" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="247" y1="51" x2="307" y2="51" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="260" y="43.7" fill="#000000" font-family="Verdana" font-size="12">Avion</text>
	<text x="252" y="68.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="252" y1="71" x2="301" y2="71" stroke="#000000" stroke-width="1"></line>
</g>

<!-- Entity Catégorie -->
<g id="entity-Catégorie">
	<g id="frame-Catégorie">
		<rect x="123" y="337" width="70" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="123" y="362.0" width="70" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="123" y="337" width="70" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="123" y1="362" x2="193" y2="362" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="128" y="354.7" fill="#000000" font-family="Verdana" font-size="12">Catégorie</text>
	<text x="128" y="379.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="128" y1="382" x2="177" y2="382" stroke="#000000" stroke-width="1"></line>
	<text x="128" y="396.8" fill="#000000" font-family="Verdana" font-size="12">Libellé</text>
</g>

<!-- Entity Liaison -->
<g id="entity-Liaison">
	<g id="frame-Liaison">
		<rect x="348" y="109" width="74" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="348" y="134.0" width="74" height="43" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="348" y="109" width="74" height="68" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="348" y1="134" x2="422" y2="134" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="363" y="126.7" fill="#000000" font-family="Verdana" font-size="12">Liaison</text>
	<text x="353" y="151.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="353" y1="154" x2="402" y2="154" stroke="#000000" stroke-width="1"></line>
	<text x="353" y="168.8" fill="#000000" font-family="Verdana" font-size="12">Fréquence</text>
</g>

<!-- Entity Lieu -->
<g id="entity-Lieu">
	<g id="frame-Lieu">
		<rect x="454" y="9" width="60" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="454" y="34.0" width="60" height="59" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="454" y="9" width="60" height="84" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="454" y1="34" x2="514" y2="34" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="471" y="26.7" fill="#000000" font-family="Verdana" font-size="12">Lieu</text>
	<text x="459" y="51.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="459" y1="54" x2="508" y2="54" stroke="#000000" stroke-width="1"></line>
	<text x="459" y="68.8" fill="#000000" font-family="Verdana" font-size="12">Nom</text>
	<text x="459" y="85.8" fill="#000000" font-family="Verdana" font-size="12">Pays</text>
</g>

<!-- Entity Type -->
<g id="entity-Type">
	<g id="frame-Type">
		<rect x="21" y="26" width="60" height="25" fill="#fdb863" stroke="#fdb863" stroke-width="0"></rect>
		<rect x="21" y="51.0" width="60" height="25" fill="#fee0b6" stroke="#fee0b6" stroke-width="0"></rect>
		<rect x="21" y="26" width="60" height="50" fill="none" stroke="#e08214" stroke-width="2"></rect>
		<line x1="21" y1="51" x2="81" y2="51" stroke="#e08214" stroke-width="1"></line>
	</g>
	<text x="36" y="43.7" fill="#000000" font-family="Verdana" font-size="12">Type</text>
	<text x="26" y="68.8" fill="#000000" font-family="Verdana" font-size="12">Numéro</text>
	<line x1="26" y1="71" x2="75" y2="71" stroke="#000000" stroke-width="1"></line>
</g>
</svg>
